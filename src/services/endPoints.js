const endPoints = {
  LOGIN: "auth/admin/login/",
  VERIFY_OTP: "auth/admin/two-factor-verify/",
  SIGNUP: "auth/signup/",
  SEND_OTP: "auth/send-otp/",
  FORGOT_PASSWORD: "auth/forgot-password/",
  CHANGE_PASSWORD: "auth/change-password/",
  GET_PROFILE: "auth/profile/",
  EDIT_PROFILE: "auth/profile/",
  CHILD: "admin/child/",
  DELETE_CHILD: "admin/child/",
  ADD_LESSON: "generate-lesson/",
  USERS: "auth/admin/users/",
  USERS_ACTIVATE_DEACTIVATE: "auth/admin/users/activate-deactivate/",
  INVOICES: "auth/admin/transactions/",

  LESSON: {
    GENERATE: "generate-lesson/",
    LESSONS: "lessons/",
  },
};
export default endPoints;
