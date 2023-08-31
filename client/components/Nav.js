import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Avatar } from "antd";
const Nav = () => {
  const [current, setCurrent] = useState("");
  const [state, setState] = useContext(UserContext);
  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);
  const router = useRouter();
  const logout = () => {
    window.localStorage.removeItem("auth");
    setState(null);
    router.push("/login");
  };
  return (
    <nav className="nav bg-dark d-flex justify-content-center">
      <Link
        href="/"
        className={`nav-link    ${current === "/" && "active"}`}
      >
        <Avatar src="/images/logo_transparent.png"/>
        MERNCAMP
      </Link>

      {state !== null ? (
        <>
          <Link
            href="/user/dashboard"
            className={`nav-link  ${
              current === "/user/dashboard" && "active"
            }`}
          >
            {state && state.user && state.user.name}
          </Link>
          <Link
            href="/user/profile/update"
            className={`nav-link  ${
              current === "/user/profile/update" && "active"
            }`}
          >
            Profile
          </Link>

          <a onClick={logout} className="nav-link  pointer">
            Logout
          </a>
        </>
      ) : (
        <>
          <Link
            href="/login"
            className={`nav-link  ${
              current === "/login" && "active"
            }`}
          >
            Login
          </Link>

          <Link
            href="/register"
            className={`nav-link text-light ${
              current === "/register" && "active"
            }`}
          >
            Register
          </Link>
        </>
      )}
    </nav>
  );
};
export default Nav;
