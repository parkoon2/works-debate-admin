import React, { Component } from "react";

import { Layout, Divider, Avatar } from "antd";
import NavMenu from "./NavMenu";
import Logo from "../shared/Logo";
import { connect } from "react-redux";
const { Sider } = Layout;

class Navbar extends Component {
  state = {
    collapsed: false
  };

  render() {
    const { ui } = this.props;

    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={ui.sider.collapsed}
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

const mapStateToProps = state => ({ ...state });

export default connect(
  mapStateToProps,
  null
)(Navbar);
