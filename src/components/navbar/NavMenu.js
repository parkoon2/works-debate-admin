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
          style={{ background: "#333333" }}
        >
          <Menu.Item key="1" onClick={() => console.log("메뉴 클릭")}>
            <Link to="/">
              <Icon type="pie-chart" />
              <span>대시보드</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2" onClick={() => console.log("메뉴 클릭")}>
            <Link to="/users">
              <Icon type="pie-chart" />
              <span>회원 관리</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3" onClick={() => console.log("메뉴 클릭")}>
            <Link to="/debates">
              <Icon type="pie-chart" />
              <span>토론방 관리</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4" onClick={() => console.log("메뉴 클릭")}>
            <Link to="qna">
              <Icon type="pie-chart" />
              <span>문의 게시판</span>
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
