import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/ko";
import { Link } from "react-router-dom";
import {
  Table,
  Divider,
  Popconfirm,
  Icon,
  Card,
  Tooltip,
  Row,
  Col
} from "antd";
import { deleteDebate } from "../../actions/debates";
import DeleteButton from "../DeleteButton";

moment.locale("ko");

const More = () => (
  <Tooltip placement="bottom" title={"더보기"}>
    <Link to="/users">
      <Icon type="more" />
    </Link>
  </Tooltip>
);

class DebateTable extends React.Component {
  columns = [
    {
      title: "번호",
      dataIndex: "roomId",
      key: "roomId"
    },
    {
      title: "채널",
      dataIndex: "channel",
      key: "channel"
    },
    {
      title: "상태",
      dataIndex: "status",
      filters: [
        // { text: "전체", value: "all" },
        { text: "준비", value: "ready" },
        { text: "진행", value: "start" },
        { text: "종료", value: "end" }
      ],
      filterMultiple: false,
      key: "status",
      render: status => {
        let str = "";
        if (status === "ready") {
          str = "준비중";
        } else if (status === "end") {
          str = "종료";
        } else {
          str = "진행중";
        }

        return <span>{str}</span>;
      }
    },
    {
      title: "주제",
      key: "title",
      dataIndex: "title"
    },
    {
      title: "생성일",
      dataIndex: "createTime",
      key: "createTime",
      render: date => (
        <span>
          {moment(date).format("LLL")}
          <Divider type="vertical" />
          {moment(date).fromNow()}
        </span>
      )
    },
    {
      title: "사회자",
      key: "userId",
      dataIndex: "userId"
    },
    {
      title: "삭제",
      key: "delete",
      render: (text, debate) => (
        <DeleteButton
          title="삭제 하시겠습니까"
          onConfirm={() => {
            this.props.dispatch(deleteDebate(debate.roomId));
          }}
        ></DeleteButton>
      )
    }
  ];

  handleTableChange = (pagination, filters, sorter) => {
    // filters.status[0]: undefined -> all
    const filter = filters.status[0] ? filters.status[0] : "all";
    this.props.handleStatusFilter(filter);
  };

  render() {
    return (
      <Card
        title={this.props.title && "토론방 관리"}
        bordered={false}
        headStyle={{ fontWeight: "bold" }}
        extra={this.props.more && More()}
        style={{ height: this.props.height }}
      >
        <Table
          columns={this.columns}
          dataSource={this.props.items}
          pagination={false}
          loading={this.props.loading}
          onChange={this.handleTableChange}
          locale={{
            filterConfirm: "확인",
            filterReset: "초기화"
          }}
        />

        <Row style={{ marginTop: "20px" }}>
          <Col style={{ textAlign: "right" }}>{this.props.pagination}</Col>
        </Row>
      </Card>
    );
  }
}

// const mapStateToProps = state => ({ ...state });
// const mapDispatchToProps = dispatch => ({
//   deleteDebate: id => dispatch(deleteDebate(id))
// });

export default connect()(DebateTable);
