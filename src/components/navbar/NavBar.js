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
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}
        className="navbar"
        width={260}
      >
        <Logo />
        {/* <Divider></Divider> */}
        {/* <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />{" "}
        Tania Adrew */}
        <NavMenu />
      </Sider>
    );
  }
}

export default Navbar;
