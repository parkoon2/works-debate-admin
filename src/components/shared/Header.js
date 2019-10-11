import React, { Component } from "react";
import { Layout, Row, Col, Icon, Dropdown, Button } from "antd";
import { connect } from "react-redux";
import { openSider, closeSider } from "../../actions/ui";

class Header extends Component {
  state = {
    collapsed: false,
    visible: false,
    placement: "left"
  };

  componentDidMount() {
    console.log(this.props);
  }

  toggle = () => {
    const {
      open,
      close,
      ui: { sider }
    } = this.props;

    sider.collapsed ? open() : close();
  };

  render() {
    const { ui } = this.props;
    return (
      <Layout.Header className="wrapper__header">
        <Row>
          <Col span={8}>
            <Button
              className="trigger"
              shape="circle"
              icon={ui.sider.collapsed ? "bars" : "more"}
              size="large"
              onClick={this.toggle}
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

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => {
  return {
    open: () => dispatch(openSider()),
    close: () => dispatch(closeSider())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
