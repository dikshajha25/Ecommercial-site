import JWT from 'jsonwebtoken';
import { MongoClientAuthProviders } from './../node_modules/mongodb/src/mongo_client_auth_providers';
import usermodel from '../models/usermodel';

//Protected Routes token base
export const requireSingin = async (req,res,next) => {
  try{
    const decode = JWT.verify
    (req.headers.authorization,process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch(error) {
    console.log(error);
  }
}

//admin access
export const isadmin = async (req,res,next) => {
  try {
    const user = await userModel.findById(req.user._id)
    if(user.role !== 1){
      return res.status(401).send({
        success:false,
        message:'UnAuthorized Access'
      });
    } else{
      next();
    };
  } catch (error) {
      console.log(error);
  }
}