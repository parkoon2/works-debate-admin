import React from "react";
import { connect } from "react-redux";
import { Layout, Divider } from "antd";
import NavBar from "../navbar/NavBar";
import DrawerNav from "../navbar/DrawerNav";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

class BaseLayout extends React.Component {
  render() {
    const { ui } = this.props;
    return (
      <Layout>
        <NavBar />
        <DrawerNav open={ui.drawer.open} />
        <Layout
          className="app__content"
          style={{
            marginLeft: ui.sider.collapsed ? "80px" : "260px",
            transition: ".2s"
          }}
        >
          <Header />

          {this.props.children}

          <Divider style={{ marginTop: 0 }} />
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(
  mapStateToProps,
  null
)(BaseLayout);
