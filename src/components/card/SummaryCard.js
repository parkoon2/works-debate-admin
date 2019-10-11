import React from "react";

import { Card, Divider, Icon, Col, Row } from "antd";

class SummaryCard extends React.Component {
  render() {
    return (
      <Card
        bodyStyle={{ padding: "14px" }}
        bordered={false} /*loading*/
        className="card__summary"
      >
        <div
          className="summary__icon-container"
          style={{ background: this.props.iconBackground }}
        >
          {this.props.icon}
        </div>

        <Row>
          <Col span={24} style={{ textAlign: "right" }}>
            <div>
              <p style={{ marginBottom: "0" }}>{this.props.title}</p>
              <h2>{this.props.subtitle}</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Divider style={{ margin: 0, marginTop: "14px" }} />
          <div style={{ marginTop: "8px" }}>
            <Icon type="calendar" theme="filled" />
            <span style={{ marginLeft: "4px" }}>{this.props.updated}</span>
          </div>
        </Row>
      </Card>
    );
  }
}

export default SummaryCard;
