import { store } from "../store";
import { showToastAction } from "../store/slices/commonSlice";
import { entries, notEqual, values } from "./javascript";
import formValidation from "./validations";

export const showFormErrors = (data, setData, ignore) => {
  let formErrors = {};
  entries(data).forEach(([key, value]) => {
    formErrors = {
      ...formErrors,
      ...formValidation(key, value, data, ignore),
    };
  });
  ignore?.forEach((name) => {
    if (formErrors[name]) {
      formErrors[name] = "";
    }
  });
  setData({ ...data, formErrors });
  return !values(formErrors).some((v) => notEqual(v, ""));
};
export const checkFormErrors = (data, ignore) => {
  let formErrors = {};
  entries(data).forEach(([key, value]) => {
    formErrors = {
      ...formErrors,
      ...formValidation(key, value, data, ignore),
    };
  });
  ignore?.forEach((name) => {
    if (formErrors[name]) {
      formErrors[name] = "";
    }
  });
  return formErrors;
};

export const spaceToDash = (inputString) => {
  return inputString.replace(/ /g, "-").toLowerCase();
};

export const dashToSpace = (inputString) => {
  return inputString
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const handleFormatDate = (value, action) => {
  if (value) {
    let date = new Date(value);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();
    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }

    let formattedDate = "";

    if (action === "year") {
      formattedDate = year;
    } else {
      formattedDate = year + "-" + month + "-" + dt;
      // formattedDate = dt + "-" + month + "-" + year;
      // formattedDate = dt + "." + month + "." + year;
    }
    return formattedDate;
  }
};

export const deepCopy = (data) => {
  return JSON.parse(JSON.stringify(data));
};

export const getLessonLabel = (id) => {
  switch (id) {
    case "unit-study":
    case "unit":
      return "Unity Study";

    default:
      return "Lesson";
  }
};

function toDateIfValid(value) {
  if (typeof value === "string") {
    const date = new Date(value);
    if (!isNaN(date.getTime())) {
      return date;
    }
  }
  return value;
}

export const mapGeneratedResponseToData = (sourceData = {}, responseData) => {
  if (!responseData) return null;
  const sourceKeys = Object.keys(sourceData);
  const result = {};
  sourceKeys.forEach((key) => {
    result[key] = toDateIfValid(responseData[key]) ?? null;
  });

  return result;
};

export const showCatchErrorToast = (
  title = "Error",
  detail = "Something went wrong"
) => {
  store.dispatch(
    showToastAction({
      type: "error",
      title,
      detail,
    })
  );
};

// Converts "Unit Study Plan" -> "unit-study-plan"
export const toSlug = (str) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // removes special characters, including underscore
    .replace(/\s+/g, "-") // convert spaces to hyphens
    .replace(/-+/g, "-"); // collapse multiple hyphens
};

// Converts "unit-study-plan" -> "Unit Study Plan"
export const fromSlug = (slug) => {
  return slug
    .replace(/-/g, " ") // Replace hyphens with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
};
