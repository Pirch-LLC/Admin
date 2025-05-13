import React, { useState } from "react";
import Sidebar from "../shared/Sidebar";
import PrivateTopbar from "../shared/PrivateTopbar";
import Logo from "../../assets/images/logo-private.svg";
import smallLogo from "../../assets/images/smalllogo.svg";

export default function PrivateLayout({ children }) {
  const [isCollapse, setIsCollapse] = useState();
  const handleToggleSidebar = () => {
    setIsCollapse((prev) => !prev);
  };

  return (
    <div className="md:flex private-layout-container">
      <Sidebar
        btnClass={isCollapse ? "btn-label-hide" : ""}
        labelClass={isCollapse ? "labelhide" : ""}
        logoSrc={isCollapse ? smallLogo : Logo}
        sidebarClass={isCollapse ? "collapsed" : ""}
        onCrossClick={()=> setIsCollapse(false)}
      />
      <div className={`main-content ${isCollapse ? "collapsed" : ""}`}>
        <PrivateTopbar onClick={handleToggleSidebar} />
        <div className="inner-content p-3">{children}</div>
      </div>
    </div>
  );
}
