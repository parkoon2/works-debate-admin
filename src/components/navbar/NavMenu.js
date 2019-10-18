import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";
import { setPage } from "../../actions/page";
import { MENU_MAP } from "../../constants/map";

class NavMenu extends Component {
  state = {
    collapsed: false
  };

  handlePage = name => {
    this.props.dispatch(setPage(name));
  };

  render() {
    const { page } = this.props;
    return (
      <>
        <Menu
          defaultSelectedKeys={String(page)}
          mode="inline"
          theme="dark"
          // inlineCollapsed={this.state.collapsed}
          style={{ background: "transparent", marginTop: "24px" }}
          className="menu"
        >
          <Menu.Item
            key="/dashboard"
            onClick={this.handlePage.bind(this, "/dashboard")}
            className="menu__item"
          >
            <Link to="/">
              <Icon className="item__icon" type="layout" theme="filled" />
              <span className="item__title">대시보드</span>
            </Link>
          </Menu.Item>
          <Menu.Item
            key="/users"
            onClick={this.handlePage.bind(this, "/users")}
            className="menu__item"
          >
            <Link to="/users">
              <Icon className="item__icon" type="contacts" theme="filled" />
              <span className="item__title">회원 관리</span>
            </Link>
          </Menu.Item>
          <Menu.Item
            key="/debates"
            onClick={this.handlePage.bind(this, "/debates")}
            className="menu__item"
          >
            <Link to="/debates">
              <Icon className="item__icon" type="message" theme="filled" />
              <span className="item__title">토론방 관리</span>
            </Link>
          </Menu.Item>
          <Menu.Item
            key="/qna"
            onClick={this.handlePage.bind(this, "/qna")}
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

const mapStateToProps = state => ({ ...state });

export default connect(
  mapStateToProps,
  null
)(NavMenu);
