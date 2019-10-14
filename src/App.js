import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout, Divider } from "antd";
import Header from "./components/shared/Header";
import Navbar from "./components/navbar/NavBar";

// Pages
import Home from "./pages/Home";
import QnA from "./pages/QnA";
import QnADetail from "./pages/QnADetail";
import Debates from "./pages/Debates";
import Users from "./pages/Users";
import WrappedLogin from "./pages/Login";
import DrawerNav from "./components/navbar/DrawerNav";
import Footer from "./components/shared/Footer";
import { isAuthenticated } from "./helpers/auth";

class App extends Component {
  render() {
    const { ui } = this.props;

    return (
      <div className="wrapper__app">
        {isAuthenticated() ? (
          <Layout>
            <Navbar />
            <DrawerNav open={ui.drawer.open} />
            <Layout
              className="app__content"
              style={{
                marginLeft: ui.sider.collapsed ? "80px" : "260px",
                transition: ".2s"
              }}
            >
              <Header />
              <Switch>
                <Route exact path="/" component={Home} />

                <Route path="/users" component={Users} />
                <Route path="/debates" component={Debates} />
                <Route path="/qna/:id" component={QnADetail} />
                <Route path="/qna" component={QnA} />
              </Switch>

              <Divider style={{ marginTop: 0 }} />
              <Footer />
            </Layout>
          </Layout>
        ) : (
          <WrappedLogin />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(
  mapStateToProps,
  null
)(App);
