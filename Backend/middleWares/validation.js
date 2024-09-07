import Joi from "joi";

const signupValidation = (req, res, next) => {
  const sechema = Joi.object({
    name: Joi.string().max(100).min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(10).required(),
  });
  const { error } = sechema.validate(req.body);
  if (error) return res.status(400).json({ message: "bad request", error });
  next();
};
const LoginValidation = (req, res, next) => {
  const sechema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(10).required(),
  });
  const { error } = sechema.validate(req.body);
  if (error) return res.status(400).json({ message: "bad request", error });
  next();
};
export { signupValidation, LoginValidation };
