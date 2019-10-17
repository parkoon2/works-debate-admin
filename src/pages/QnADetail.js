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
  Skeleton,
  Popconfirm,
  Icon
} from "antd";
import { fetchQnAById, updateComment, deleteQnAById } from "../actions/qna";

import { Link } from "react-router-dom";
import notify from "../helpers/notification";
import DeleteButton from "../components/DeleteButton";
const { TextArea } = Input;
class QnADetail extends React.Component {
  state = {
    comment: ""
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.loadQna(id);
  }

  handleComment = () => {
    const { comment } = this.state;

    if (!comment) {
      return notify({
        description: "답변 내용을 입력해주세요.",
        type: "error",
        message: "입력 실패"
      });
    }

    const id = this.props.match.params.id;
    this.props.updateComment(id, comment);

    this.setState({
      comment: ""
    });
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
          <Card
            title="Sidney No. 1 Lake Park"
            extra={
              <DeleteButton
                title="게시글을 삭제 하시겠습니까?"
                onConfirm={() => {
                  this.props.deleteQna(this.props.match.params.id);
                }}
              ></DeleteButton>
            }
          >
            <>
              {selectedItem && (
                <>
                  <Row>
                    <Col>
                      <Descriptions bordered>
                        <Descriptions.Item label="작성자">
                          {selectedItem.author}
                        </Descriptions.Item>
                        <Descriptions.Item label="작성일">
                          {selectedItem.createdate}
                        </Descriptions.Item>
                        <Descriptions.Item label="답변여부">
                          {selectedItem.status === "done" ? (
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
                            {selectedItem.commentcontent}
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
                        value={this.state.comment}
                      />
                    </Col>
                  </Row>
                </>
              )}
            </>
            <Row style={{ marginTop: 20 }}>
              <Col style={{ textAlign: "right" }}>
                <Link to="/qna">
                  <Button style={{ marginRight: 12 }}>목록</Button>
                </Link>
                <Button
                  onClick={this.handleComment}
                  disabled={loading}
                  loading={loading}
                >
                  답변하기
                </Button>
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
  deleteQna: id => dispatch(deleteQnAById(id)),
  updateComment: (id, comment) => dispatch(updateComment(id, comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QnADetail);
