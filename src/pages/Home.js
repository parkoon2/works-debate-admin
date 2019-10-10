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

// Components
import SummaryCard from "../components/card/SummaryCard";
import LineGraph from "../components/graph/LineGraph";
import UserTable from "../components/table/UserTable";

// Dummy Data
import { users } from "../data";

class Home extends Component {
  render() {
    return (
      <>
        <Layout.Content
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
        </Layout.Content>
      </>
    );
  }
}

export default Home;
