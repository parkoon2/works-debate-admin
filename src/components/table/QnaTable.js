import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/ko";
import { Link } from "react-router-dom";
import { Table, Divider, Icon, Card, Tooltip } from "antd";

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
      dataIndex: "writer",
      key: "writer"
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
      dataIndex: "createdAt",
      key: "createdAt",
      render: date => (
        <span>
          {moment.unix(1571034686295 / 1000).format("LLL")}
          <Divider type="vertical" />
          {moment().fromNow(date)}
        </span>
      )
    },
    {
      title: "답변여부",
      key: "status",
      dataIndex: "status"
    }
  ];
  

  render() {
    return (
      <Card title="QnA 관리" headStyle={{ fontWeight: "bold" }} bordered={false} extra={this.props.more && More()} >
        <Table
          columns={this.columns}
          dataSource={this.props.items}
          pagination={this.props.pagination}
          loading={this.props.loading}
        />
      </Card>
    );
  }
}

// const mapStateToProps = state => ({ ...state });
// const mapDispatchToProps = dispatch => ({});

export default connect()(QnaTable);
