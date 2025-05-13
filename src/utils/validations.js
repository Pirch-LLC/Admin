import { FirstletterUpperCase, equal, length } from "./javascript";
import {
  emailValidation,
  whiteSpaceCheck,
  formatFieldName,
  passwordValidation,
} from "./regex";

const formValidation = (name, value, state, ignore = []) => {
  let formErrors = { ...state.formErrors };

  if (ignore.includes(name)) {
    if (formErrors[name]) {
      formErrors[name] = "";
    }
    return formErrors;
  }

  switch (name) {
    case "email":
      if (equal(length(value))) {
        formErrors[name] = `${formatFieldName(name)} is required!`;
      } else if (whiteSpaceCheck(value)) {
        formErrors[name] = `Unnecessary space in word!`;
      } else if (!emailValidation(value)) {
        formErrors[name] = `Please enter valid email!`;
      } else {
        formErrors[name] = "";
      }
      break;
    case "password":
    case "new_password":
    case "newPassword":
      if (equal(length(value))) {
        formErrors[name] = `${formatFieldName(name)} is required!`;
      } else if (whiteSpaceCheck(value)) {
        formErrors[name] = `Unnecessary space in word!`;
      } else if (!passwordValidation(value)) {
        formErrors[
          name
        ] = `Please enter a password with 8-16 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character`;
      } else {
        formErrors[name] = "";
      }
      break;
    case "confirm_password":
      if (equal(length(value))) {
        formErrors[name] = `${formatFieldName(name)} is required!`;
      } else if (whiteSpaceCheck(value)) {
        formErrors[name] = `Unnecessary space in word!`;
      } else if (value !== state["password"]) {
        formErrors[name] = "Password does not match";
      } else {
        formErrors[name] = "";
      }
      break;

    case "newConfirmPassword":
      if (equal(length(value))) {
        formErrors[name] = `Confirm Password is required!`;
      } else if (whiteSpaceCheck(value)) {
        formErrors[name] = `Unnecessary space in word!`;
      } else if (value !== state["newPassword"]) {
        formErrors[name] = "Confirm Password does not match";
      } else {
        formErrors[name] = "";
      }
      break;
    case "name":
    case "fullName":
    case "title":
    case "tagLine":
    case "location":
    case "meetupLead":
    case "topic":
    case "theme":
      if (!value) {
        formErrors[name] = `${formatFieldName(name)} is required!`;
      } else if (whiteSpaceCheck(value)) {
        formErrors[name] = `Unnecessary space in word!`;
      } else {
        formErrors[name] = "";
      }
      break;

    //just value
    case "password_":
    case "image":
    case "child":
    case "start_date":
    case "start_time":
      if (!value) {
        formErrors[name] = `${formatFieldName(name)} is required!`;
      } else {
        formErrors[name] = "";
      }
      break;

    //validate number
    // case "duration":
    // case "parent_energy_level":
    //   if (!value) {
    //     formErrors[name] = `${formatFieldName(name)} is required!`;
    //   } else {
    //     formErrors[name] = "";
    //   }
    //   break;

    case "dateOfBirth":
    case "gradeLevel":
    case "grade_level":
    case "age":
    case "daily_time_commitment":
    // case "duration":
    case "reading_level":
    case "oldPassword":
    case "learning_style":
    case "style_vibe":
    case "subject_focus":
    case "resource_preferences":
      if (!value || value.length === 0) {
        formErrors[name] = `${formatFieldName(name)} is required!`;
      } else {
        formErrors[name] = "";
      }
      break;

    case "leaders":
      if (!value || (Array.isArray(value) && value.length === 0)) {
        formErrors[name] = `${formatFieldName(name)} are required!`;
      } else {
        formErrors[name] = "";
      }
      break;

    case "endDate":
      if (!value) {
        formErrors[name] = `${formatFieldName(name)} is required!`;
      } else if (
        state?.startDate &&
        new Date(value) < new Date(state.startDate)
      ) {
        formErrors[name] = `End date should not be less than start date`;
      } else {
        formErrors[name] = "";
      }
      break;
  }
  return formErrors;
};

export default formValidation;
