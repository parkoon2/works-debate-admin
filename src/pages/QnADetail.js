import React from "react";
import { connect } from "react-redux";
import {
  Layout,
  Row,
  Col,
  Button,
  Descriptions,
  Badge,
  Input,
  Card,
  Skeleton
} from "antd";
import { fetchQnAById, updateComment } from "../actions/qna";

import { Link } from "react-router-dom";
const { TextArea } = Input;
class QnADetail extends React.Component {
  state = {
    comment: ""
  };

  onChange = ({ target }) => {
    console.log("comment");
    this.setState({ [target.name]: target.value });
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.loadQna(id);
  }

  handleComment = () => {
    const { comment } = this.state;
    const id = this.props.match.params.id;
    this.props.updateComment(id, comment);
  };

  render() {
    const { loading, selectedItem } = this.props.qna;

    return (
      <>
        <Layout.Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280
          }}
        >
          <Card title="Sidney No. 1 Lake Park">
            {loading ? (
              <Skeleton paragraph={{ rows: 6 }} active />
            ) : (
              <>
                {selectedItem && (
                  <>
                    <Row>
                      <Col>
                        <Descriptions bordered>
                          <Descriptions.Item label="작성자">
                            {selectedItem.writer}
                          </Descriptions.Item>
                          <Descriptions.Item label="작성일">
                            {selectedItem.createdAt}
                          </Descriptions.Item>
                          <Descriptions.Item label="답변여부">
                            {selectedItem.answerd ? (
                              <Badge status="success" text="답변 완료" />
                            ) : (
                              <Badge status="processing" text="답변 미완료" />
                            )}
                          </Descriptions.Item>
                          <Descriptions.Item label="문의 제목" span={3}>
                            {selectedItem.title}
                          </Descriptions.Item>
                          <Descriptions.Item label="문의 내용" span={3}>
                            {selectedItem.content}
                          </Descriptions.Item>
                          <Descriptions.Item label="답변" span={3}>
                            <div style={{ whiteSpace: "pre-wrap" }}>
                              {selectedItem.comment}
                            </div>
                          </Descriptions.Item>
                        </Descriptions>
                      </Col>
                    </Row>

                    <Row style={{ marginTop: 32 }}>
                      <Col>
                        <TextArea
                          name="comment"
                          comment={this.state.comment}
                          onChange={this.onChange}
                          placeholder="답변하실 내용을 적어주세요."
                          autosize={{ minRows: 7, maxRows: 7 }}
                        />
                      </Col>
                    </Row>
                  </>
                )}
              </>
            )}
            <Row style={{ marginTop: 20 }}>
              <Col style={{ textAlign: "right" }}>
                <Link to="/qna">
                  <Button style={{ marginRight: 12 }}>목록</Button>
                </Link>
                <Button onClick={this.handleComment}>답변하기</Button>
              </Col>
            </Row>
          </Card>
        </Layout.Content>
      </>
    );
  }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  loadQna: id => dispatch(fetchQnAById(id)),
  updateComment: (id, comment) => dispatch(updateComment(id, comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QnADetail);
