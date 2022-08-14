const { body, params } = require('express-validator');

const registrationValidation = {
  fullname: {
    in: ['body'],
    errorMessage: 'Input a fullname',
    isString: true,
  },
  email: {
    in: ['body'],
    errorMessage: 'Must be a valid email',
    isEmail: true,
  },
  password: {
    in: ['body'],
    isStrongPassword: true,
    errorMessage: 'Password must contains alphanumerical with case and Symbol must be at least 8 char max 15',
    isLength: {
      options: { min: 8 },
      options: { max: 15 }
    }
  }
}

const loginValidation = {
  email: {
    in: ['body'],
    errorMessage: 'Wrong Input',
    isEmail: true,
  },
  password: {
    in: ['body'],
    errorMessage: 'Wrong Password Input',
  }
}

const postValidator = {
  title: {
    in: ['body'],
    errorMessage: 'Input a title',
    isString: true,
    isLength: {
      options: {min: 1},
      options: {max: 150}
    }
  },
  imageUrl: {
    in: ['body'],
    errorMessage: 'Must be a valid url',
    isURL: true,
    isLength: {
      options: {min: 1},
      options: {max: 150}
    }
  },
  password: {
    in: ['body'],
    errorMessage: 'Article Must contains text inside',
    isLength: {
      options: {min: 1},
      options: { max: 225 }
    }
  }
}

const validators = {
  loginValidation,
  registrationValidation,
  postValidator,
}

module.exports = validators;
