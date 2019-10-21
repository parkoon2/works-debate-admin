import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Row, Col, Icon } from "antd";
import moment from "moment";

import { getUsers } from "../actions/users";
import { fetchQnA } from "../actions/qna";
import { fetchDebates } from "../actions/debates";

// Components
import SummaryCard from "../components/card/SummaryCard";
import LineGraph from "../components/graph/LineGraph";
import UserTable from "../components/table/UserTable";
import QnaTable from "../components/table/QnaTable";

// Dummy Data
import colors from "../constants/colors";
import BaseLayout from "../components/layout/BaseLayout";
import { fetchDailyStatistic } from "../actions/statistic";

class Home extends Component {
  state = {
    updatedAt: moment().format("LLL"),
    graph: {
      data: [],
      xAxisLabels: []
    }
  };

  componentDidMount() {
    this.props.getUsers();
    this.props.getQnA();
    this.props.getDebates();

    this.props.getDailyStatistic();

    this.setState({
      updatedAt: moment().format("LLL")
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // watch statistic update
    if (
      this.props.statistic.items.length !== prevProps.statistic.items.length
    ) {
      this.setState({
        graph: {
          xAxisLabels: this.mapDateToArray(),
          data: this.mapDataToArray()
        }
      });
    }
  }

  mapDateToArray = () => {
    return this.props.statistic.items.map((item, index) => {
      // 첫 번째와 다음달 첫번 째
      if (index === 0 || moment(item.date).date() === 1) {
        return moment(item.date).format("M월 DD일");
      }

      // 오늘
      if (moment(item.date).date() === moment().date()) {
        return "오늘";
      }

      return moment(item.date).date();
    });
  };

  mapDataToArray = () => this.props.statistic.items.map(item => item.count);

  renderLineGraph = () => {
    return (
      this.state.graph.xAxisLabels.length > 0 &&
      this.state.graph.data.length > 0 && (
        <LineGraph
          title="라인 그래프"
          dataLabel="일간 방문수"
          data={this.state.graph.data}
          xAxisLabels={this.state.graph.xAxisLabels}
          refresh={this.props.getDailyStatistic}
        />
      )
    );
  };

  render() {
    return (
      <BaseLayout>
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
                    updated={`${this.state.updatedAt} 기준`}
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
                    subtitle={this.props.debates.total}
                    updated={`${this.state.updatedAt} 기준`}
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
                    updated={`${this.state.updatedAt} 기준`}
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
                    updated={`${this.state.updatedAt} 기준`}
                  />
                </Col>
              </Row>
            </div>

            <div className="dashboard__graph-container">
              <Row style={{ marginBottom: "12px" }}>
                <Col span={24}>{this.renderLineGraph()}</Col>
              </Row>
            </div>

            <div className="dashboard__boards-container">
              <Row gutter={8}>
                <Col lg={12} md={24} className="boards__col">
                  <UserTable
                    title
                    users={this.props.users.users}
                    pagination={false}
                    more
                    height={750}
                  />
                </Col>
                <Col lg={12} md={24} className="boards__col">
                  <QnaTable
                    title
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
      </BaseLayout>
    );
  }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  getUsers: option => dispatch(getUsers(option)),
  getQnA: option => dispatch(fetchQnA(option)),
  getDebates: option => dispatch(fetchDebates(option)),
  getDailyStatistic: () => dispatch(fetchDailyStatistic())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
