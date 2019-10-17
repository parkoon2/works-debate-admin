import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Row, Col, Icon } from "antd";

import { getUsers } from "../actions/users";
import { fetchQnA } from "../actions/qna";

// Components
import SummaryCard from "../components/card/SummaryCard";
import LineGraph from "../components/graph/LineGraph";
import UserTable from "../components/table/UserTable";
import QnaTable from "../components/table/QnaTable";

// Dummy Data
import { users } from "../data";
import colors from "../constants/colors";

class Home extends Component {
  componentDidMount() {
    this.props.getUsers();
    this.props.getQnA();
  }

  render() {
    return (
      <div className="dashboard__wrapper">
        <Layout.Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280
          }}
        >
          <div className="dashboard__summary-container">
            <Row gutter={32} className="summary__row">
              <Col xs={24} sm={12} xl={6} className="summary__col">
                <SummaryCard
                  icon={
                    <Icon
                      type="user"
                      style={{ fontSize: "3rem", color: "#fff" }}
                    />
                  }
                  iconBackground={colors.linearBlue}
                  title={"전체 사용자"}
                  subtitle={this.props.users.total}
                  updated={"just updated"}
                />
              </Col>
              <Col xs={24} sm={12} xl={6} className="summary__col">
                <SummaryCard
                  icon={
                    <Icon
                      type="message"
                      theme="filled"
                      style={{ fontSize: "3rem", color: "#fff" }}
                    />
                  }
                  iconBackground={colors.linearRed}
                  title={"토론방"}
                  subtitle={"+245"}
                  updated={"just updated"}
                />
              </Col>
              <Col xs={24} sm={12} xl={6} className="summary__col">
                <SummaryCard
                  icon={
                    <Icon
                      type="appstore"
                      theme="filled"
                      style={{ fontSize: "3rem", color: "#fff" }}
                    />
                  }
                  iconBackground={colors.linearGreen}
                  title={"찬/반 게시물"}
                  subtitle={"+245"}
                  updated={"just updated"}
                />
              </Col>
              <Col xs={24} sm={12} xl={6} className="summary__col">
                <SummaryCard
                  icon={
                    <Icon
                      type="edit"
                      theme="filled"
                      style={{ fontSize: "3rem", color: "#fff" }}
                    />
                  }
                  iconBackground={colors.linearOrange}
                  title={"문의 게시물"}
                  subtitle={this.props.qna.total}
                  updated={"just updated"}
                />
              </Col>
            </Row>
          </div>

          <div className="dashboard__graph-container">
            <Row style={{ marginBottom: "12px" }}>
              <Col span={24}>
                <LineGraph
                  title="라인 그래프"
                  dataLabel="일간 방문수"
                  data={[
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                  ]}
                  xAxisLabels={[
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    19,
                    20,
                    21,
                    22,
                    23,
                    24,
                    25,
                    26,
                    27,
                    28,
                    29,
                    30
                  ]}
                />
              </Col>
            </Row>
          </div>

          <div className="dashboard__boards-container">
            <Row gutter={8}>
              <Col lg={12} md={24} className="boards__col">
                <UserTable
                  users={this.props.users.users}
                  pagination={false}
                  more
                  height={750}
                />
              </Col>
              <Col lg={12} md={24} className="boards__col">
                <QnaTable
                  items={this.props.qna.items}
                  pagination={false}
                  more
                  height={750}
                />
              </Col>
            </Row>
          </div>
        </Layout.Content>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  getUsers: option => dispatch(getUsers(option)),
  getQnA: option => dispatch(fetchQnA(option))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
