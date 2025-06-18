import React, { useEffect, useState } from "react";
import PageTitleHeader from "../../shared/component/PageTitleHeader";
import { CustomInput, CustomPassword } from "../../shared/component/AllInputs";
import { useNavigate, useParams } from "react-router-dom";
import formValidation from "../../utils/validations";
import { showFormErrors } from "../../utils/commonFunctions";
import { useDispatch, useSelector } from "react-redux";
import PrimaryButton from "../../shared/component/CustomButton";
import { addUserAction, getUserDataAction } from "../../store/actions/userActions";

export default function AddUser() {
  const { id } = useParams();
  const formText = id ? "Edit" : "Add";
  const items = [{ label: `${formText} User` }];
  const home = {
    label: "Users",
    url: "#/users",
  };

  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      getUserDataAction(id, (res) => {
        if (res?.success) {
          setData({
            name: generatedLessonResponse?.name || "",
            email: generatedLessonResponse?.email || "",
            password: generatedLessonResponse?.password || "",
          });
        }
      });
    }
  }, [id]);

  const handleChange = ({ name, value }) => {
    const formErrors = formValidation(name, value, data);
    setData((prev) => ({ ...prev, [name]: value, formErrors }));
  };

  const handleSubmit = () => {
    if (showFormErrors(data, setData)) {
      dispatch(
        addUserAction(data, setLoading, (res) => {
          if (res?.success) {
            navigate("/users");
          }
        })
      );
    }
  };

  return (
    <>
      <PageTitleHeader
        title={`${formText} User`}
        model={items}
        home={home}
        label={items[0].label}
      />
      <div className="p-4 shadow-1 border-round-xl">
        <div className="grid">
          <CustomInput
            name="name"
            className="w-full"
            data={data}
            onChange={handleChange}
            col={6}
            extraClassName="px-2 md:w-6 w-full"
          />
          <CustomInput
            name="email"
            className="w-full"
            data={data}
            onChange={handleChange}
            col={6}
            extraClassName="px-2 md:w-6 w-full"
          />
          <CustomPassword
            name="password"
            className="w-full"
            label="Password"
            placeholder="Password"
            col={6}
            onChange={handleChange}
            data={data}
            extraClassName="px-2 md:w-6 w-full"
          />
        </div>
        <div className="flex justify-content-end mt-5 gap-3">
          <PrimaryButton
            label="Add User"
            extraClassNames="bg-dark-red"
            onClick={handleSubmit}
            loading={loading}
          />
        </div>
      </div>
    </>
  );
}
