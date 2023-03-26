const bcrypt = require('bcrypt');
const User=require('../model/userSchema');


const add = async (req, res, next) => {
    const postData=req.body;
    postData['image']=req.file.filename;
    let user;
    try {
      user = new User(postData);
  
      user = await user.save();
    } catch (err) {
      console.log(err);
      return next();
    }
    res.status(201).json({
      user: user,
    });
};

const login = async (req, res, next) => {
   let{email, password} = req.body;
  

  const user = await User.findOne({email}); // { } or undefined
  if(!user){
      return  res.status(401).send("User not found");
  }

  let IsPasswordValid =  await bcrypt.compare(password, user.password);

  if(!IsPasswordValid){
      return  res.status(404).send("Password Incorrect");
  }
  res.status(200).send({
      status : "success",
      message : "Login Successful",
      data : user,
      jwttoken:user.generateJWTToken()
  })
  next()
};

exports.add = add;
exports.login = login;