import React from "react";
import { FC } from "react";
import { NavLink } from "react-router-dom";

export interface CommonLayoutProps {
  children?: React.ReactNode;
}

const CommonLayout: FC<CommonLayoutProps> = ({ children }) => {
  return (
    <div
      className="nc-CommonLayoutProps bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="border-b border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
        <div className="container">
          <div className="flex space-x-8 md:space-x-14 overflow-x-auto hiddenScrollbar">
            <NavLink
              to="/account"
              className={({ isActive }) =>
                `block py-5 md:py-8 border-b-2 flex-shrink-0 ${
                  !isActive ? "border-transparent" : "border-primary-500"
                }`
              }
            >
              Account info
            </NavLink>
            <NavLink
              to="/account-savelists"
              className={({ isActive }) =>
                `block py-5 md:py-8 border-b-2 flex-shrink-0 ${
                  !isActive ? "border-transparent" : "border-primary-500"
                }`
              }
            >
              Saved properties
            </NavLink>
            <NavLink
              to="/account-password"
              className={({ isActive }) =>
                `block py-5 md:py-8 border-b-2 flex-shrink-0 ${
                  !isActive ? "border-transparent" : "border-primary-500"
                }`
              }
            >
              Change password
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container pt-14 sm:pt-20 pb-24 lg:pb-30">{children}</div>
    </div>
  );
};

export default CommonLayout;
