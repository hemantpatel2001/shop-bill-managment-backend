const user = require("./user.model")
const bcrypt = require("bcrypt");
const userService = {};


//register

userService.create = async({email,password}) =>{
    const hash = bcrypt.hashSync(password,10)
 return await user.create({email,password : hash})   
  
}
//user login
userService.login = async(email) =>{
    return await user.findOne({email})}
//     try {
//         const userFind = user.findOne({email,password})
//         console.log(userFind,"user")
//         if (userFind){
//             let {password : hash} = userFind
//             const isMatch = bcrypt.compareSync(password,hash)
//             if (isMatch){
//                 return userFind
//             }
//             else{
//                 return false
//             }
//          }
//     } catch (error) {
//         return false
//     } 
//}
 

module.exports = userService