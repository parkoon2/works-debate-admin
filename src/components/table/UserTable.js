import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/ko";
import { Link } from "react-router-dom";
import {
  Table,
  Tag,
  Divider,
  Popconfirm,
  Icon,
  Card,
  Tooltip,
  Button,
  Pagination,
  Row,
  Col
} from "antd";
import { deleteUser } from "../../actions/users";

moment.locale("ko");

const More = () => (
  <Tooltip placement="bottom" title={"더보기"}>
    <Link to="/users">
      <Icon type="more" />
    </Link>
  </Tooltip>
);

const ROLE_MAP = {
  0: {
    name: "관리자",
    color: "#ff7a45"
  },
  1: {
    name: "운영자",
    color: "green"
  },
  2: {
    name: "일반 사용자",
    color: "geekblue"
  }
};

class UserTable extends React.Component {
  columns = [
    // {
    //   title: "번호",
    //   dataIndex: "index",
    //   key: "index",
    //   render: text => <a href>{text}</a>
    // },
    {
      title: "아이디",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "넥네임",
      dataIndex: "nickname",
      key: "nickname"
    },
    {
      title: "권한",
      key: "level",
      dataIndex: "level",
      render: level => {
        if (level !== undefined) {
          return (
            <Tag color={ROLE_MAP[level].color} key={level}>
              {ROLE_MAP[level].name}
            </Tag>
          );
        }
      }
    },
    {
      title: "최종 접속일",
      dataIndex: "recentDate",
      key: "recentDate",
      render: date => (
        <span>
          {moment(date).format("LLL")}
          <Divider type="vertical" />
          {moment(date).fromNow()}
        </span>
      )
    },
    {
      title: "삭제",
      key: "delete",
      render: (text, user) => (
        <span>
          {/* <Divider type="vertical" /> */}
          <Popconfirm
            title={`${user.id}를 삭제 하시겠습니까?`}
            icon={<Icon type="question-circle-o" style={{ color: "red" }} />}
            onCancel={() => {}}
            onConfirm={() => {
              this.props.dispatch(deleteUser(user.id));
            }}
            cancelText="취소"
            okText="삭제"
          >
            <Button
              className="header__trigger pc"
              shape="round"
              icon="delete"
              // type="danger"
              size="small"
            />
          </Popconfirm>
        </span>
      )
    }
  ];

  render() {
    console.log("========= LOG START =======");
    console.log(this.props.pagination);
    console.log("========= LOG END =========");

    return (
      <Card
        title={this.props.title && "회원 관리"}
        headStyle={{ fontWeight: "bold" }}
        bordered={false}
        extra={this.props.more && More()}
        style={{ height: this.props.height }}
      >
        <Table
          columns={this.columns}
          dataSource={this.props.users}
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

export default connect()(UserTable);
