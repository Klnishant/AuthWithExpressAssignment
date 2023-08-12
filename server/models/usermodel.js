const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:[30,'name should be less than 30 characters'],
        trim:true,
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        maxLength:[15,'username should be less than 15 characters'],
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minLength:[8,'password must be 8 characters long']
    },
    bio:{
        type:String,
        required:true,
        maxLength:[50,'bio should be less than 50 characters']
    }
})

// method to generate token 
userSchema.methods={
    jwtToken(){
        return JWT.sign({id:this._id,username:this.username},process.env.SECRET,{
            expiresIn:'24d'
        })
    }
}

// to hash password before saving it
userSchema.pre("save",async function(next){
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12); //hashing password
    return next();
})

module.exports=mongoose.model("User",userSchema);