const Validator = require("validator");
const checkEmpty = require("./checkEmpty");

module.exports = function validateMessageInput(data) {
  let errors = {};

  data.name = !checkEmpty(data.name) ? data.name : "";
  data.email = !checkEmpty(data.email) ? data.email : "";
  data.message = !checkEmpty(data.message) ? data.message : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Your name is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Your email address is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "That email is invalid";
  }

  if (Validator.isEmpty(data.message)) {
    errors.message = "A message is required";
  }

  return {
    errors,
    isValid: checkEmpty(errors)
  };
};
