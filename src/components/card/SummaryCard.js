import React from "react";

import { Card, Divider, Icon, Col, Row } from "antd";

class SummaryCard extends React.Component {
  render() {
    return (
      <Card
        bodyStyle={{ padding: "14px" }}
        style={{ height: "130px", position: "relative" }}
        bordered={false} /*loading*/
      >
        <div
          style={{
            position: "absolute",
            top: -26,
            left: 11,
            borderRadius: "7px",
            background: "linear-gradient(60deg, #ffa726, #fb8c00)",
            boxShadow:
              "0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(255, 152, 0,.4)",
            width: "87px",
            height: "87px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Icon type="twitter" style={{ fontSize: "3rem", color: "#fff" }} />
        </div>

        <Row>
          <Col span={24} style={{ textAlign: "right" }}>
            <div>
              <p style={{ marginBottom: "0" }}>Used Space</p>
              <h2>49/50 GB</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Divider style={{ margin: 0, marginTop: "14px" }} />
          <div style={{ marginTop: "8px" }}>
            <Icon type="highlight" />{" "}
            <span style={{ marginLeft: "4px" }}>Get more space</span>
          </div>
        </Row>
      </Card>
    );
  }
}

export default SummaryCard;
