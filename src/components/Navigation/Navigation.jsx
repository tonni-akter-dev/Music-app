import React from "react";
import logo from "../../assets/Logo.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import "./Navigation.css";
import Footer from "../Footer/Footer";
const Navigation = () => {
  const userData = JSON.parse(localStorage.getItem("users"));
  return (
    <>
      <div className="navbar bg_dark ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/accounts">Accounts</NavLink>
              </li>
              <li>
                <NavLink to="/accounts">Payment Information</NavLink>
              </li>
              <li>
                <NavLink to="/accounts">Contact Us</NavLink>
              </li>

              <li>
                {" "}
                <NavLink
                  to="/support"
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                >
                  Support
                </NavLink>
              </li>
            </ul>
          </div>
          <a className=" normal-case text-xl">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center  hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 justify-center items-center">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/accounts">Accounts</NavLink>
            </li>
            <li>
              <NavLink to="/payment">Payment Information</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              {userData.isAuthenticated == true ? (
                <NavLink to="/support">Support</NavLink>
              ) : (
                <NavLink to="/support">Support</NavLink>
              )}
            </li>
            <li>
              <input
                type="text"
                placeholder="Find your favourite artists"
                className="input input-bordered w-full max-w-xs"
              />
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
