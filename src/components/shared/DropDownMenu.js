import React from "react";
import { Menu } from "antd";

const DropDownMenu = () => {
  const logout = () => {
    alert("logout");
  };

  return (
    <Menu>
      <Menu.Item>
        <a onClick={logout}>로그아웃</a>
      </Menu.Item>
    </Menu>
  );
};

export default DropDownMenu;
