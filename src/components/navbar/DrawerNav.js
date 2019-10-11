import React from "react";
import { connect } from "react-redux";
import { Drawer, Menu, Icon, Button } from "antd";
import { closeDrawer } from "../../actions/ui";
import NavMenu from "./NavMenu";
import Logo from "../shared/Logo";

const { SubMenu } = Menu;

class DrawerNav extends React.Component {
  state = {
    collapsed: false,
    visible: false,
    placement: "left"
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div>
        <Drawer
          placement="left"
          closable={false}
          onClose={this.props.close}
          visible={this.props.open}
          className="drawer"
        >
          <Logo />
          <NavMenu />
        </Drawer>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    close: () => dispatch(closeDrawer())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DrawerNav);
