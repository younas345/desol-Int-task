import Joi from 'joi';

export const carSchema = Joi.object({
  model: Joi.string().min(3).required(),
  city: Joi.string().min(3).required(),
  price: Joi.number().required(),
  phoneNumber: Joi.string().min(11).max(20).required(),
  images: Joi.array().items(Joi.string()), 
//   userReference: Joi.string().required(),
});
