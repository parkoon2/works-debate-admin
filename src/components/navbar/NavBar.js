import React, { Component } from "react";

import { Layout, Divider, Avatar } from "antd";
import NavMenu from "./NavMenu";
import Logo from "../shared/Logo";

const { Sider } = Layout;

class Navbar extends Component {
  state = {
    collapsed: false
  };

  render() {
    return (
      <Sider
        style={{
          background: "#333333"
          // paddingLeft: "12px",
          // paddingRight: "12px"
        }}
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}
      >
        <Logo />
        <Divider></Divider>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />{" "}
        Tania Adrew
        <Divider></Divider>
        <NavMenu />
      </Sider>
    );
  }
}

export default Navbar;
