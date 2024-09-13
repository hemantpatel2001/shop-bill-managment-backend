const userService = require("./service.user");
const userController = {};
const bcrypt =require("bcrypt")
const jwtToken = require("jsonwebtoken")
const dotenv = require('dotenv')
dotenv.config();
// console.log(process.env.JWT_SECRET)

//create
userController.create= async (req, res) =>{ 
    try{
        const {email, password} = req.body
        const create = await userService.create({email, password})
        if (create){
            let token = jwtToken.sign({ _id: create._id }, process.env.JWT_SECRET);
            console.log(token)
            return res.send({ status: "ok", msg: "successfully created customer", data: create, token: token })
            //return res.send ({status:"OK", msg:"Login successful",  data:create})
        }
        return res.send({status:"ERR",msg:"Invalid email and password"})
    }
    catch(error){
        console.log(error, "error")
    return res.send({status:"error", msg:"server side error"})
    }
}
//login user
userController.login = async (req, res) => {
    try{
        const {email, password} = req.body
        const userLogin = await userService.login(email)
        console.log(userLogin)
        // if (userLogin){
        //     return res.send ({status:"200", msg:"Login successful",  data: userLogin})
        // }
        if (userLogin){
            let {password : hash} = userLogin
            const isMatch = bcrypt.compareSync(password,hash)
            if (isMatch){
                let token = jwtToken.sign({ _id: userLogin._id }, process.env.JWT_SECRET);
            console.log(token)
                return res.send ({status:"200", msg:"Login successful",  data: userLogin, token: token})
            }
            else{
                return res.send({status:"ERR",msg:"Invalid email and password"})
                
            }
        }
    }
        catch(error){
        console.log(error, "error")
    return res.send({status:"error", msg:"server side error"})
    }
}

module.exports = userController
