import React from "react";
import CustomContainer from "../../shared/component/CustomContainer";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";

export default function Topbar() {
  return (
    <div className="topbar p-2">
      <CustomContainer>
        <Link to="/">
          <img src={Logo} alt="" className="w-6rem md:w-8rem" />
        </Link>
      </CustomContainer>
    </div>
  );
}
