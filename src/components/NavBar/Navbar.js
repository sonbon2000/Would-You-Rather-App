import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavBar } from "./useNavBar";

const NavBar = () => {
  const [values, handlers] = useNavBar();
  return (
    <>
      <div className="navbar-container">
        <div className="nav-menu">
          <div className="nav-menu-left">
            <div className="navbar-common">
              <Link
                className="nav-menu-item"
                onClick={handlers.navigateHome}
                to="/"
              >
                Home
              </Link>
            </div>
            <div className="navbar-common">
              <Link
                className="nav-menu-item"
                onClick={handlers.navigateQuestion}
                to="/add"
              >
                New Question
              </Link>
            </div>
            <div className="navbar-common">
              <Link
                className="nav-menu-item"
                onClick={handlers.navigateLeaderboard}
                to="/leaderboard"
              >
                Leaderboard
              </Link>
            </div>
          </div>
          <div className="navbar-center"></div>
          <div className="nav-menu-right">
            <div className="navbar-user navbar-common-right">
              <img
                alt=""
                className="nav-img"
                src={values.users[values.userId].avatarURL}
              />
              <span>Hello, {values.users[values.userId].name}</span>
            </div>
            <div
              className="navbar-common-right"
              onClick={handlers.handleLogoutUser}
            >
              <div className="nav-button-logout">Logout</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
