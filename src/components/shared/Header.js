/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import { Layout, Row, Col, Button, Icon, Divider } from "antd";
import { connect } from "react-redux";
import {
  openSider,
  closeSider,
  closeDrawer,
  openDrawer
} from "../../actions/ui";
import { logout } from "../../actions/auth";
import showConfirm from "../../helpers/modal";

class Header extends Component {
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

            <h1 className="header__title">{this.props.page}</h1>
          </Col>
          <Col span={8} offset={4} className="header__right">
            <div className="right__info">
              <span>관리자</span> 님이 로그인 하였습니다.(마지막 접속시간:
              10293=30393)
            </div>
            <Divider type="vertical" style={{ background: "#999" }} />
            <Button
              type="danger"
              onClick={() => {
                showConfirm({
                  ok: this.props.logout,
                  title: "정말로 로그아웃 하시겠습니까?",
                  content: "로그아웃시 로그인 페이지로 이동합니다."
                });
              }}
            >
              <Icon type="logout" />
              <Icon></Icon>
              로그아웃
            </Button>
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
