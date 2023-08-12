const User=require('../models/usermodel.js');
const mongoose=require('mongoose');
const express=require('express');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');

exports.userSignUp=async (req,res)=>{
    try {
        const newUser=await User.create(req.body);
        res.status(200).send({
            msg:'signup success'
        })
    } catch (error) {
        res.status(501).send({msg:error.message})
    }
}