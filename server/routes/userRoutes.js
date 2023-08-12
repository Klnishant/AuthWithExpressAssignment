const express=require('express');
const logIn =require('../controllers/login.js');
const {userSignUp}=require('../controllers/signup.js')
const {getUserDetails}=require('../controllers/getUser.js');
const {logInValidator}=require('../middlewares/loginValidator.js')
const {signUpValidator}=require('../middlewares/signupValidator.js')
const {authenticateUser}=require('../middlewares/authenticationValidator.js')

const userRoute=express.Router();

userRoute.post("/signup",signUpValidator(),userSignUp());
userRoute.post("/login",logInValidator(),logIn());
userRoute.get("/",authenticateUser(),getUserDetails());

module.exports= {
    userRoute
}