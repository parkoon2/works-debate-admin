import React from "react";
import { connect } from "react-redux";
import { Layout, Row, Col } from "antd";
import { fetchQnA } from "../actions/qna";
import QnaTable from "../components/table/QnaTable";

class QnA extends React.Component {
  componentDidMount() {
    this.props.loadQnA();
  }

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
              <QnaTable
                items={this.props.qna.items}
                loading={this.props.qna.loading}
              />
            </Col>
          </Row>
        </Layout.Content>
      </>
    );
  }
}
const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  loadQnA: () => dispatch(fetchQnA())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QnA);
