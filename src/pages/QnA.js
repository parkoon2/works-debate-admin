import React from "react";
import { Layout, Row, Col, Button } from "antd";
import LineGraph from "../components/graph/LineGraph";
import SummaryCard from "../components/card/SummaryCard";
import UserTable from "../components/table/UserTable";
import { users } from "../data";

import { Link } from "react-router-dom";

class QnA extends React.Component {
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
          <Row>
            <Col span={24}>
              <UserTable users={users} />
              <Link to="/qna/1212">
                <Button type="primary">디테일</Button>
              </Link>
            </Col>
          </Row>
        </Layout.Content>
      </>
    );
  }
}

export default QnA;
