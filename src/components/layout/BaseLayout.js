import React, { Component } from "react";
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
import Header from "../shared/Header";
import Navbar from "../navbar/NavBar";
import SummaryCard from "../card/SummaryCard";
import LineGraph from "../graph/LineGraph";
import TableLayout from "../table/UserTable";
import UserTable from "../table/UserTable";
// User
import { users } from "../../data";

// Components

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

// Dummy Data

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: text => <a>{text}</a>
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a>Invite {record.name}</a>
        <Divider type="vertical" />
        <Popconfirm
          title="삭제 하시겠습니까?"
          icon={<Icon type="question-circle-o" style={{ color: "red" }} />}
          onCancel={() => alert("취소")}
          onConfirm={() => alert("삭제")}
          cancelText="취소"
          okText="삭제"
        >
          <a>Delete</a>
        </Popconfirm>
        ,
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

class BaseLayout extends Component {
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
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280
              }}
            >
              <Row gutter={32} style={{ marginBottom: "12px" }}>
                <Col span={6} style={{ background: "tomato" }}>
                  <SummaryCard />
                </Col>
                <Col span={6} style={{ background: "tomato" }}>
                  <SummaryCard />
                </Col>
                <Col span={6} style={{ background: "tomato" }}>
                  <SummaryCard />
                </Col>
                <Col span={6} style={{ background: "tomato" }}>
                  <SummaryCard />
                </Col>
              </Row>

              <Row style={{ marginBottom: "12px" }}>
                <Col span={24}>
                  <LineGraph
                    title="라인 그래프"
                    dataLabel="사용자 유입량"
                    data={[65, 59, 80, 81, 56, 55, 40]}
                    xAxisLabels={[
                      1,
                      2,
                      3,
                      4,
                      5,
                      6,
                      76,
                      7,
                      8,
                      8,
                      9,
                      9,
                      7,
                      5,
                      4,
                      3,
                      1,
                      3,
                      4,
                      5
                    ]}
                  />
                </Col>
              </Row>
              <Row gutter={8}>
                <Col span={12}>
                  <UserTable users={users} />
                </Col>
                <Col span={12}>
                  <UserTable users={users} />
                </Col>
              </Row>
            </Content>
          </Layout>
        </Layout>
        {/* {this.props.children} */}
      </>
    );
  }
}

export default BaseLayout;
