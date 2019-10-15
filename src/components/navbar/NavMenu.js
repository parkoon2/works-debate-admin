import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";
import { setPage } from "../../actions/page";

class NavMenu extends Component {
  state = {
    collapsed: false
  };

  handlePage = name => {
    this.props.dispatch(setPage(name));
  };

  render() {
    return (
      <>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          // inlineCollapsed={this.state.collapsed}
          style={{ background: "transparent" }}
          className="menu"
        >
          <Menu.Item
            key="1"
            onClick={this.handlePage.bind(this, "대시보드")}
            className="menu__item"
          >
            <Link to="/">
              <Icon className="item__icon" type="layout" theme="filled" />
              <span className="item__title">대시보드</span>
            </Link>
          </Menu.Item>
          <Menu.Item
            key="2"
            onClick={this.handlePage.bind(this, "회원관리")}
            className="menu__item"
          >
            <Link to="/users">
              <Icon className="item__icon" type="contacts" theme="filled" />
              <span className="item__title">회원 관리</span>
            </Link>
          </Menu.Item>
          <Menu.Item
            key="3"
            onClick={this.handlePage.bind(this, "토론방 관리")}
            className="menu__item"
          >
            <Link to="/debates">
              <Icon className="item__icon" type="message" theme="filled" />
              <span className="item__title">토론방 관리</span>
            </Link>
          </Menu.Item>
          <Menu.Item
            key="4"
            onClick={this.handlePage.bind(this, "문의 게시판")}
            className="menu__item"
          >
            <Link to="qna">
              <Icon className="item__icon" type="table" />
              <span className="item__title">문의 게시판</span>
            </Link>
          </Menu.Item>
        </Menu>
      </>
    );
  }
}

export default connect()(NavMenu);
