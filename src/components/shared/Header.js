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
      <Layout.Header style={{ padding: 0 }}>
        <Row>
          <Col span={4} style={{ background: "gray" }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />

            <span>Dashboard</span>
          </Col>
          <Col
            span={8}
            style={{ background: "blue", textAlign: "right" }}
            offset={12}
          >
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
