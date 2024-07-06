import UserModel from "../model/auth/user_model.js";
import { userSchema } from "../validation/user_validation.js";


export const createUser = async (req, res) => {
    try {
      // Validate the request body
      const { error, value } = userSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
  
      const { email, password } = value;
  
      if (email !== 'Amjad@desolint.com' || password !== '123456abc') {
        return res.status(400).json({ error: 'Invalid email or password' });
      }
  
      // Create a new user in the database
      const user = new UserModel({ email, password });
      await user.save();
      res.status(201).json({
        success:true,
        message:"login successfully",
        user
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };