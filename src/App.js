import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Layout,
  Row,
  Col,
  Icon,
  Button,
  Dropdown,
  Card,
  Table,
  Divider,
  Popconfirm,
  Menu,
  Tag,
  Avatar
} from "antd";
import Header from "./components/shared/Header";
import Navbar from "./components/navbar/NavBar";

import UserTable from "./components/table/UserTable";
// User
import { users } from "./data";

// Components

// Pages
import Home from "./pages/Home";
import QnA from "./pages/QnA";
import QnADetail from "./pages/QnADetail";
import Debates from "./pages/Debates";
import Users from "./pages/Users";
import WrappedLogin from "./pages/Login";

const { Content } = Layout;

class App extends Component {
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

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value
    });
  };
  render() {
    return (
      <>
        <Layout>
          <Navbar />
          <Layout>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />

              <Route path="/users" component={Users} />
              <Route path="/debates" component={Debates} />
              <Route path="/qna/:id" component={QnADetail} />
              <Route path="/qna" component={QnA} />
            </Switch>
          </Layout>
        </Layout>
        {/* <WrappedLogin /> */}
      </>
    );
  }
}

export default App;
