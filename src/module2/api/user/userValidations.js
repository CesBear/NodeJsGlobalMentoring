import userDB from './userDB';
import msg from './userErrorMessages';
import { createValidator } from 'express-joi-validation';
import Joi from '@hapi/joi';

const userSchema = Joi.object({
    age: Joi.number()
        .integer()
        .min(4)
        .max(130)
        .required(),
    login: Joi.string()
        .required(),
    password: Joi.string()
        .pattern(new RegExp('[^A-Za-z0-9]+'))
        .required()
});

const validator = createValidator({});

const loginValidation = {
    isUserExiting(req, res, next) {
        const user = userDB.finfUserByLogin(req.body.login);
        return !user ? next() : res.status(400).send(msg.userNotFound);
    },
    isUserShchemaValid: validator.body(userSchema)
};

module.exports = loginValidation;
