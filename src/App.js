import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
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
import e404 from "./pages/e404";
import { setPage } from "./actions/page";

class App extends Component {
  componentDidMount() {
    window.onload = () => {
      // 이거 때문에 페이지 깜빡거림
      // 가장 best한 방법은
      // 현재 라우터 유지시는 방법
      // 나중에 해결하기
      // if (window.location.pathname !== "/") {
      //   window.location.replace("/");
      // }
    };

    this.props.setPage(window.location.pathname);
  }
  componentWillUnmount() {
    window.onload = null;
  }
  render() {
    const { ui, auth } = this.props;
    return (
      <div className="wrapper__app">
        {isAuthenticated() ? (
          <>
            <Switch>
              <Route exact path="/">
                <Redirect to="/dashboard" />
              </Route>
              <Route path="/dashboard" component={Home} />

              <Route path="/users" component={Users} />
              <Route path="/debates" component={Debates} />
              <Route path="/qna/:id" component={QnADetail} />
              <Route path="/qna" component={QnA} />
              <Route path="*" component={e404} />
            </Switch>
          </>
        ) : (
          <WrappedLogin />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  setPage: page => dispatch(setPage(page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
