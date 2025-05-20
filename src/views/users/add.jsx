import { useEffect, useState } from "react";
import PageTitleHeader from "../../shared/component/PageTitleHeader";
import { CustomInput } from "../../shared/component/AllInputs";
import { useNavigate } from "react-router-dom";
import formValidation from "../../utils/validations";
import { showFormErrors } from "../../utils/commonFunctions";
import { useDispatch } from "react-redux";
import PrimaryButton from "../../shared/component/CustomButton";
import {
  sendUserInviteAction,
} from "../../store/actions/userActions";

export default function AddUser() {
  const items = [{ label: `Invite User` }];
  const home = {
    label: "Users",
    url: "#/users",
  };

  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleChange = ({ name, value }) => {
    const formErrors = formValidation(name, value, data);
    setData((prev) => ({ ...prev, [name]: value, formErrors }));
  };

  const handleSubmit = () => {
    if (showFormErrors(data, setData)) {
      dispatch(
        sendUserInviteAction(data, setLoading, (res) => {
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
        title={`Invite User`}
        model={items}
        home={home}
        label={items[0].label}
      />
      <div className="p-4 shadow-1 border-round-xl">
        <div className="grid">
          <CustomInput
            name="email"
            className="w-full"
            data={data}
            onChange={handleChange}
            col={6}
            extraClassName="px-2 md:w-6 w-full"
          />
        </div>
        <div className="flex justify-content-end mt-5 gap-3">
          <PrimaryButton
            label="Invite User"
            extraClassNames="bg-dark-red"
            onClick={handleSubmit}
            loading={loading}
          />
        </div>
      </div>
    </>
  );
}
