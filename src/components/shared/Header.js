import React, { Component } from "react";
import { Layout, Row, Col, Icon, Dropdown, Button, Menu } from "antd";
import { connect } from "react-redux";
import {
  openSider,
  closeSider,
  closeDrawer,
  openDrawer
} from "../../actions/ui";
import DropDownMenu from "./DropDownMenu";
import { logout } from "../../actions/auth";
import showConfirm from "../../helpers/modal";

class Header extends Component {
  state = {
    collapsed: false,
    visible: false,
    placement: "left"
  };

  renderDropdownMenu = () => (
    <Menu>
      <Menu.Item>
        <a
          onClick={() => {
            showConfirm({
              ok: this.props.logout,
              title: "정말로 로그아웃 하시겠습니까?",
              content: "로그아웃시 로그인 페이지로 이동합니다."
            });
          }}
        >
          로그아웃
        </a>
      </Menu.Item>
    </Menu>
  );

  toggleSider = () => {
    const {
      openSider,
      closeSider,
      ui: { sider }
    } = this.props;

    sider.collapsed ? openSider() : closeSider();
  };

  toggleDrawer = () => {
    const {
      openDrawer,
      closeDrawer,
      ui: { drawer }
    } = this.props;

    drawer.open ? closeDrawer() : openDrawer();
  };

  render() {
    const { ui } = this.props;
    return (
      <Layout.Header className="wrapper__header">
        <Row>
          <Col span={12}>
            <Button
              className="header__trigger pc"
              shape="circle"
              icon={ui.sider.collapsed ? "bars" : "more"}
              size="large"
              onClick={this.toggleSider}
            />

            <Button
              className="header__trigger mobile"
              shape="circle"
              icon={ui.sider.collapsed ? "bars" : "more"}
              size="large"
              onClick={this.toggleDrawer}
            />

            <h1 className="header__title">Dashboard</h1>
          </Col>
          <Col span={4} offset={8} className="header__right">
            <Dropdown
              trigger="click"
              overlay={this.renderDropdownMenu}
              placement="bottomLeft"
            >
              <Button shape="circle" icon="user" />
            </Dropdown>
          </Col>
        </Row>
      </Layout.Header>
    );
  }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => {
  return {
    openSider: () => dispatch(openSider()),
    closeSider: () => dispatch(closeSider()),
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: () => dispatch(closeDrawer()),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
