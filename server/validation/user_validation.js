import Joi from 'joi';

// Define the schema for user creation
export const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});