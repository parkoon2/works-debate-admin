import React from "react";

import { Layout, Row, Col } from "antd";
import LineGraph from "../components/graph/LineGraph";
import SummaryCard from "../components/card/SummaryCard";
import UserTable from "../components/table/UserTable";
import { users } from "../data";

class Users extends React.Component {
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
            </Col>
          </Row>
        </Layout.Content>
      </>
    );
  }
}

export default Users;
