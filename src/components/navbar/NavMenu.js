import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Menu, Icon } from "antd";

const { SubMenu } = Menu;

class NavMenu extends Component {
  state = {
    collapsed: false,
    visible: false,
    placement: "left"
  };
  render() {
    return (
      <>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
          style={{ background: "transparent" }}
          className="menu"
        >
          <Menu.Item
            key="1"
            onClick={() => console.log("메뉴 클릭")}
            className="menu__item"
          >
            <Link to="/">
              <Icon className="item__icon" type="layout" theme="filled" />
              <span className="item__title">대시보드</span>
            </Link>
          </Menu.Item>
          <Menu.Item
            key="2"
            onClick={() => console.log("메뉴 클릭")}
            className="menu__item"
          >
            <Link to="/users">
              <Icon className="item__icon" type="contacts" theme="filled" />
              <span className="item__title">회원 관리</span>
            </Link>
          </Menu.Item>
          <Menu.Item
            key="3"
            onClick={() => console.log("메뉴 클릭")}
            className="menu__item"
          >
            <Link to="/debates">
              <Icon className="item__icon" type="message" theme="filled" />
              <span className="item__title">토론방 관리</span>
            </Link>
          </Menu.Item>
          <Menu.Item
            key="4"
            onClick={() => console.log("메뉴 클릭")}
            className="menu__item"
          >
            <Link to="qna">
              <Icon className="item__icon" type="table" />
              <span className="item__title">문의 게시판</span>
            </Link>
          </Menu.Item>
        </Menu>

        {/* <Switch>
          <Route exact path="/">
            <div>/1</div>
          </Route>
          <Route path="/users">
            <h1>/2</h1>
          </Route>
          <Route path="/debate">
            <h1>/3</h1>
          </Route>
          <Route path="/qna">
            <h1>/4</h1>
          </Route>
        </Switch> */}
      </>
    );
  }
}

export default NavMenu;
