exports.logInValidator=(req,res,next)=>{
    const {username,password}=req.body();

    if (req.body() && username && password) {
        next();
    }
    else{
        res.status(400).send({msg:'All fields are required'});
    }
}