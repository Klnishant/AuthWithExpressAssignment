const user=require('../models/usermodel.js');
const mongoose=require('mongoose');
const express=require('express');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');

exports.getUserDetails= async (req,res)=>{
    const {id,username}=req.body();

    try {
        const userDetails=await user.findOne({username});
        res.status(200).send({
            msg:'success',
            userDetails:userDetails,
        })
    } catch (error) {
        res.status(402).send({msg:error.message});
    }
}