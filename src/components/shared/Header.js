import React, { Component } from "react";
import { Layout, Row, Col, Icon, Dropdown, Button } from "antd";

class Header extends Component {
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

  render() {
    return (
      <Layout.Header className="wrapper__header">
        <Row>
          <Col span={8}>
            <Button
              className="trigger"
              shape="circle"
              icon={this.state.collapsed ? "bars" : "more"}
              onClick={this.toggle}
              size="large"
              className="header__toggle"
            />

            <h1 className="header__title">Dashboard</h1>
          </Col>
          <Col span={8} offset={8} className="header__right">
            <Dropdown trigger="click" placement="bottomLeft">
              <Button shape="circle" icon="user" />
            </Dropdown>
          </Col>
        </Row>
      </Layout.Header>
    );
  }
}

export default Header;
