import React, { useState } from "react";
import AuthLayout from "../../layout/auth/AuthLayout";
import {
  CustomCheckbox,
  CustomInput,
  CustomPassword,
} from "../../shared/component/AllInputs";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton, {
  GoogleButton,
} from "../../shared/component/CustomButton";
import formValidation from "../../utils/validations";
import { useDispatch } from "react-redux";
import { showFormErrors } from "../../utils/commonFunctions";
import { login } from "../../services/auth";
import { loginAction } from "../../store/actions/authActions";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password_: "",
    rememberMe: true,
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ name, value }) => {
    const formErrors = formValidation(name, value, data);
    setData((prev) => ({ ...prev, [name]: value, formErrors }));
  };

  const handleSubmit = () => {
    if (showFormErrors(data, setData)) {
      const payload = { email: data.email, password: data.password_ };

      setLoading(true);
      dispatch(
        loginAction(payload, setLoading, (res) => {
          setLoading(false);
          login(res.access, () => navigate("/users"));
        })
      );
    }
  };

  return (
    <AuthLayout
      heading="Admin Login"
      subheading="Please sign in to your account."
    >
      <CustomInput
        name={"email"}
        label="Email Address"
        col={12}
        onChange={handleChange}
        data={data}
      />
      <CustomPassword
        name="password_"
        label="Password"
        placeholder="Password"
        col={12}
        onChange={handleChange}
        data={data}
      />
      <div className="flex gap-3 justify-content-between align-items-center">
        <CustomCheckbox
          name="rememberMe"
          label="Remember Me"
          col={6}
          extraClassName="mb-0"
          onChange={handleChange}
          checked={data.rememberMe}
        />
      </div>
      <PrimaryButton
        label="Sign In"
        extraClassNames="w-full mt-3 bg-yellow-color"
        onClick={handleSubmit}
        loading={loading}
        disabled={loading}
      />
    </AuthLayout>
  );
}
