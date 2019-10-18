import React from "react";
import { connect } from "react-redux";
import {
  Layout,
  Row,
  Col,
  Button,
  Input,
  Card,
  Icon,
  Comment,
  Tooltip,
  Divider,
  Empty
} from "antd";
import moment from "moment";
import { fetchQnAById, updateComment, deleteQnAById } from "../actions/qna";

import { Link } from "react-router-dom";
import notify from "../helpers/notification";
import DeleteButton from "../components/DeleteButton";
const { TextArea } = Input;

const actions = [
  <span key="comment-basic-like">
    <Tooltip title="Like">
      <Icon type="like" theme={"filled"} />
    </Tooltip>
    <span style={{ paddingLeft: 8, cursor: "auto" }}>{"likes"}</span>
  </span>,
  <span key=' key="comment-basic-dislike"'>
    <Tooltip title="Dislike">
      <Icon type="dislike" theme={"outlined"} />
    </Tooltip>
    <span style={{ paddingLeft: 8, cursor: "auto" }}>{"dislikes"}</span>
  </span>,
  <span key="comment-basic-reply-to">Reply to</span>
];
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
          <Card className="wrapper__qna">
            <>
              {selectedItem && (
                <>
                  <Row>
                    <Col span={12}>
                      <div className="qna__header">
                        <h1 className="qna-header__title">
                          {selectedItem.title}
                        </h1>
                        <span className="qna-header__icon">
                          {selectedItem.isLocked ? (
                            <span>
                              <Icon type="lock" theme="filled" />
                              비공개
                            </span>
                          ) : (
                            <span>
                              <Icon type="unlock" theme="filled" />
                              공개
                            </span>
                          )}
                        </span>

                        <div className="qna-header__info">
                          <span>{selectedItem.author}</span>
                          <Divider type="vertical" />
                          <span>
                            {moment(selectedItem.createDate).format("LLL")}
                          </span>
                          <Divider type="vertical" />
                          <span>조회수 {selectedItem.viewCount}</span>
                        </div>
                      </div>
                    </Col>
                    <Col
                      span={12}
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <DeleteButton
                        title="게시글을 삭제 하시겠습니까?"
                        onConfirm={() => {
                          this.props.deleteQna(this.props.match.params.id);
                        }}
                      ></DeleteButton>
                    </Col>
                    <Col span={24}>
                      <Divider />
                      <div className="qna__content">{selectedItem.content}</div>
                      <div className="qna__comment">
                        <h1>관리자 답변</h1>

                        <Divider
                          style={{ marginTop: "7px", marginBottom: 0 }}
                        />

                        {selectedItem.commentContent ? (
                          <Comment
                            author={<span>관리자</span>}
                            content={<p>{selectedItem.commentContent}</p>}
                            datetime={
                              <Tooltip
                                title={moment(selectedItem.commentDate).format(
                                  "LLL"
                                )}
                              >
                                <span>
                                  {moment(selectedItem.commentDate).fromNow()}
                                </span>
                              </Tooltip>
                            }
                          />
                        ) : (
                          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                        )}
                      </div>
                      <Divider style={{ marginTop: 0 }} />
                    </Col>
                  </Row>

                  <Row style={{ marginTop: 32 }} className="qna__input">
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
