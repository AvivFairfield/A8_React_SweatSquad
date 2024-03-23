import {
  faBars,
  faClose,
  faUsers,
  faMedal,
  faCog,
  faQuestionCircle,
  faHome,
  faBarsProgress,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { id: "home", icon: faHome, text: "Home", path: "/" },
  {
    id: "friends-list",
    icon: faUsers,
    text: "Friends list",
    path: "/friends-list",
  },
  {
    id: "leaderboard",
    icon: faMedal,
    text: "Leaderboard",
    path: "/leaderboard",
  },
  {
    id: "progression",
    icon: faBarsProgress,
    text: "Progression",
    path: "/progression",
  },
  {
    id: "account-settings",
    icon: faCog,
    text: "Account Settings",
    path: "/account-settings",
  },
  { id: "about", icon: faQuestionCircle, text: "About", path: "/about" },
];

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isMenuItemActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("firstname");
    localStorage.removeItem("lastName");
    navigate("/login");
  };

  const ListItem = ({ item, className, onClick }) => {
    return (
      <li
        className={`flex items-center gap-3 hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md cursor-pointer transition-colors duration-300 ease-in-out ${
          className || ""
        }`}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={item.icon} />
        <span>{item.text}</span>
      </li>
    );
  };

  return (
    <>
      <button
        className="toggle-sidebar fixed z-100 left-5 top-5 cursor-pointer bg-gray-500 text-white px-1 text-xl"
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div
        className={`fixed w-64 top-0 bottom-0 bg-opacity-95 bg-neutral-800 transition-left duration-300 ease-in-out z-50 overflow-y-auto text-white ${
          open ? "left-0" : "-left-64"
        }`}
      >
        <div className="relative h-full">
          <button
            onClick={() => setOpen(!open)}
            className="absolute right-5 top-5"
          >
            <FontAwesomeIcon icon={faClose} width={30} height={30} size="lg" />
          </button>
          <div className="flex flex-col justify-between h-full">
            <ul className="flex flex-col gap-2 py-14 px-3 text-base">
              {menuItems.map((item) => (
                <ListItem
                  key={item.id}
                  item={item}
                  className={
                    isMenuItemActive(item.path) ? "bg-white bg-opacity-10" : ""
                  }
                  onClick={() => {
                    setOpen(false);
                    navigate(item.path);
                  }}
                />
              ))}
            </ul>
            <div className="flex flex-col gap-4 py-6 px-3 text-base">
              <ListItem
                item={{ icon: faSignOutAlt, text: "Sign out" }}
                onClick={handleLogout}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
