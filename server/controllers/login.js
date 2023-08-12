const user=require('../models/usermodel.js');
const mongoose=require('mongoose');
const express=require('express');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');

exports.logIn=async (req,res)=>{
   const {username,password}=req.body();
   try {
        const getUserData=await user.findOne({username}).select("+password");
        if (getUserData && getUserData.username) {
            const result= await bcrypt.compare(password,getUserData.password);
            if(result){
                const token =await getUserData.jwtToken();
                const coockieOption={
                    maxAge:24*60*60*1000, //24hrs
                    httpOnly:true
                };
                res.cookie("token", token, cookieOption);
                  res.status(200).json({
                    success: true,
                    data: getuserData
                  });
            }
            else{
                res.status(401).send({msg:'password is incorrect'});
            }
        }
        else{
            res.status(401).send({msg:'Username not find'});
        }
   } catch (error) {
        res.status(501).send({msg:error.message});
   }
}