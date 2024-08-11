import { check, validationResult } from 'express-validator';

//sign-up
function signupValidationRules(){

    return [
        check("username")
        .isString()
        .notEmpty()
        .isLength({ min : 6 , max : 20})
        .withMessage("Username must be a non-empty string."),
        check("email")
        .isEmail()
        .withMessage("Email must be a valid."),
        check("password")
        .isString()
        .notEmpty()
        .isLength({min : 6})
        .withMessage("Password must be atleast 6 letters string.")
    ]
}

//sign-in
function signinValidationRules(){
    return [
        check("username")
        .isString()
        .notEmpty()
        .isLength({ min : 6 , max : 20})
        .withMessage("Username must be a non empty string."),
        check("password")
        .isString()
        .notEmpty()
        .isLength({min : 6})
        .withMessage("Password must be atleast 6 letters string.")
    ]
}

function setMessagesValidationRules(){
    return [
        check("username")
        .isString()
        .notEmpty()
        .isLength({ min : 6 , max : 20})
        .withMessage("Username must be a non empty string."),
        check("message")
        .isString()
        .notEmpty()
        .isLength({ max : 500})
        .withMessage("Message must be a non empty string with maximum 500 words.")
    ]
}

function getMessagesValidationRules(){
    return [
        check("username")
        .isString()
        .notEmpty()
        .isLength({ min : 6 , max : 20})
        .withMessage("Username must be a non empty string.")
    ]
}

//errors check
function validate(req, res, next){
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ success : false , message : "Input is not valid",  errors : errors.array()});
    }
    next();
}

export {
    signupValidationRules,
    signinValidationRules,
    setMessagesValidationRules,
    getMessagesValidationRules,
    validate
}