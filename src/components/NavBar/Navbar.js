import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavBar } from "./useNavBar";

const NavBar = () => {
  const [values, handlers] = useNavBar();
  return (
    <Menu>
      <Menu.Item name="home">
        <Link className="nav-menu-item" onClick={handlers.navigateHome} to="/">
          Home
        </Link>
      </Menu.Item>

      <Menu.Item name="newQuestion">
        <Link
          className="nav-menu-item"
          onClick={handlers.navigateQuestion}
          to="/add"
        >
          New Question
        </Link>
      </Menu.Item>

      <Menu.Item name="newQuestion">
        <Link
          className="nav-menu-item"
          onClick={handlers.navigateLeaderboard}
          to="/leaderboard"
        >
          Leaderboard
        </Link>
      </Menu.Item>

      <Menu.Item name="login" position="right">
        <img
          alt=""
          className="nav-img"
          src={values.users[values.userId].avatarURL}
        />
        <span>Hello, {values.users[values.userId].name}</span>
      </Menu.Item>

      <Menu.Item name="login">
        <button onClick={handlers.handleLogoutUser}>Log out</button>
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
