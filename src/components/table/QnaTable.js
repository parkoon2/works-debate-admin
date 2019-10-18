import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/ko";
import { Link } from "react-router-dom";
import { Table, Divider, Icon, Card, Tooltip, Row, Col } from "antd";

moment.locale("ko");

const More = () => (
  <Tooltip placement="bottom" title={"더보기"}>
    <Link to="/users">
      <Icon type="more" />
    </Link>
  </Tooltip>
);

class QnaTable extends React.Component {
  columns = [
    {
      title: "번호",
      dataIndex: "index",
      key: "index"
    },
    {
      title: "작성자",
      dataIndex: "author",
      key: "author"
    },
    {
      title: "제목",
      dataIndex: "title",
      key: "title",
      render: (title, qna) => {
        // // 아이디는 변경될 수 있음
        const id = qna.index;
        const to = `/qna/${id}`;
        return (
          <Link to={to}>
            <a href>{title}</a>
          </Link>
        );
      }
    },
    {
      title: "문의일",
      dataIndex: "createDate",
      key: "createDate",
      render: date => (
        <span>
          {moment(date).format("LLL")}
          <Divider type="vertical" />
          {moment(date).fromNow()}
        </span>
      )
    },
    {
      title: "답변여부",
      key: "status",
      dataIndex: "status",
      render: status => {
        let str = "";
        if (!status || status === "ready") {
          str = (
            <Icon
              type="question-circle"
              theme="filled"
              style={{ fontSize: "1.3rem", color: "#faad14" }}
            />
          );
        } else {
          str = (
            <Icon
              type="check-circle"
              theme="filled"
              style={{ fontSize: "1.3rem", color: "#237804" }}
            />
          );
        }

        return <span>{str}</span>;
      }
    }
  ];

  render() {
    return (
      <Card
        title={this.props.title && "QnA 관리"}
        headStyle={{ fontWeight: "bold" }}
        bordered={false}
        extra={this.props.more && More()}
        style={{ height: this.props.height }}
      >
        <Table
          columns={this.columns}
          dataSource={this.props.items}
          pagination={false}
          loading={this.props.loading}
        />

        <Row style={{ marginTop: "20px" }}>
          <Col style={{ textAlign: "right" }}>{this.props.pagination}</Col>
        </Row>
      </Card>
    );
  }
}

// const mapStateToProps = state => ({ ...state });
// const mapDispatchToProps = dispatch => ({});

export default connect()(QnaTable);
