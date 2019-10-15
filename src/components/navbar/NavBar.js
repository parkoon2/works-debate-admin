import React, { Component } from "react";

import { Layout } from "antd";
import NavMenu from "./NavMenu";
import Logo from "../shared/Logo";
import { connect } from "react-redux";
const { Sider } = Layout;

class Navbar extends Component {
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
        <Logo shortcut={ui.sider.collapsed} />
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
