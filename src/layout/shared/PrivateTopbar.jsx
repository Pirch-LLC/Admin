import React, { useEffect, useRef, useState } from "react";
import CollpseIcon from "../../assets/icon/hembrgr.svg";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import { OverlayPanel } from "primereact/overlaypanel";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Divider } from "primereact/divider";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../../store/actions/userActions";
import randomprofiles from "../../assets/images/profile.svg";

export default function PrivateTopbar({ onClick }) {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profile } = useSelector((state) => state?.user);
  const op = useRef(null);

  const notifications = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      time: "14m ago",
      unread: true,
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing",
      time: "15m ago",
      unread: true,
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      time: "Yesterday at 5:42 PM",
      unread: false,
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing",
      time: "Yesterday at 4:22 PM",
      unread: false,
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing",
      time: "Yesterday at 6:50 PM",
      unread: true,
    },
  ];

  useEffect(() => {
    if (!profile?.email) {
      dispatch(getProfileAction());
    }
  }, [profile]);

  return (
    <div className="top-header flex align-items-center justify-content-between p-3 bg-light-color">
      <img src={CollpseIcon} alt="" className="" onClick={onClick} />
      <div className="flex align-items-center gap-5">
        <div className="flex gap-3 align-items-center">
          <Avatar
            image={profile?.image || randomprofiles}
            size="large"
            shape="circle"
          />
          {/* <img src={profile?.image} size="large" shape="circle" alt="" /> */}
          <div className="">
            <p className="font-semibold m-0">{profile?.full_name}</p>
          </div>
        </div>
      </div>
      <OverlayPanel className="w-25rem notification-overlay-panel" ref={op}>
        <div className="flex p-3 justify-content-between align-items-center">
          <h2 className="lobster-regular font-normal text-black-alpha-90 m-0">
            Notifications
          </h2>
          <Link to="/notifications" className="text-blue-500">
            Mark all as read
          </Link>
        </div>
        <Divider className="m-0" />
        <ul className="p-0 m-0 notification-list">
          {notifications.map((n, i) => (
            <li className="flex gap-2 p-3 justify-content-between align-items-center">
              <div className="">
                <p className="text-black-alpha-90 m-0 text-sm">{n.text}</p>
                <small className="text-xs sub-heading">{n.time}</small>
              </div>
              <div className="flex gap-3 align-items-center">
                {n.unread && (
                  <div className="unread-notification bg-red-600 border-circle"></div>
                )}
                <i className="pi pi-times-circle sub-heading"></i>
              </div>
            </li>
          ))}
        </ul>
      </OverlayPanel>
    </div>
  );
}
