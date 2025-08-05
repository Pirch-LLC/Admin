import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Divider } from "primereact/divider";
import DashboardIcon from "../../assets/icon/dashboard.svg";
import { CustomLogoutDialog } from "../../shared/component/CustomDialog";
import { logout } from "../../services/auth";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import Pirchlogo from "../../assets/images/Pirchlogo.svg";
import InvoiceIcon from "../../assets/icon/invoicesInactive.svg"
import ChildIcon from "../../assets/icon/managechild.svg"
export default function Sidebar({
  sidebarClass,
  logoSrc,
  labelClass,
  btnClass,
  onCrossClick,
}) {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);

  const sidebarItems = [
    { label: "Users", icon: ChildIcon, path: "/users" },
    { label: "Invoices", icon: InvoiceIcon, path: "/invoices" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout(dispatch, () => {
      window.location.href = "/";
    });
    setVisible(false);
  };

  return (
    <div
      className={`h-screen bg-main text-white p-3 flex flex-column justify-content-between sidebar ${sidebarClass}`}
    >
      <div>
        <i className="pi pi-times md:hidden" onClick={onCrossClick} />
        <h2 className="text-xl font-bold mb-3">
          <img src={Pirchlogo} alt="Logo" />
        </h2>

        <Divider className="m-0 my-3" />
        <div className="menu-list">
          <ul className="p-0">
            {sidebarItems.map((item, id) => (
              <li key={id} className="list-none mb-2">
                <Link
                  to={item.path}
                  className={clsx(
                    "flex align-items-center gap-3 p-2 px-3 no-underline border-round-3xl transition-colors",
                    {
                      "text-white bg-dark-red": location.pathname === item.path, // Selected link
                      "text-white hover:bg-white-alpha-30 hover:text-white":
                        location.pathname !== item.path, // Non-selected link
                    }
                  )}
                >
                  <img src={item?.icon} />
                  <span className={`text-sm ${labelClass}`}>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p
        className="flex align-items-center px-3 py-2 gap-3 cursor-pointer"
        onClick={() => setVisible(true)}
      >
        <i className="pi pi-sign-out" />
        <span className={`text-sm ${labelClass}`}>Logout Account</span>
      </p>
      <CustomLogoutDialog
        visible={visible}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
        onLogout={handleLogout}
      />
    </div>
  );
}
