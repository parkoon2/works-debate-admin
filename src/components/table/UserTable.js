import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/ko";
import { Link } from "react-router-dom";
import { Table, Tag, Divider, Popconfirm, Icon, Card, Tooltip } from "antd";
import { deleteUser } from "../../actions/users";

moment.locale("ko");

const More = () => (
  <Tooltip placement="bottom" title={"더보기"}>
    <Link to="/users">
      <Icon type="more" />
    </Link>
  </Tooltip>
);

class UserTable extends React.Component {
  columns = [
    {
      title: "번호",
      dataIndex: "index",
      key: "index",
      render: text => <a href>{text}</a>
    },
    {
      title: "아이디",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "이름",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "권한",
      key: "role",
      dataIndex: "role",
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = "green";
            if (tag === "관리자") color = "tomato";
            if (tag === "일반 사용자") color = "green";
            if (tag === "운영자") color = "geekblue";

            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      )
    },
    {
      title: "최종 접속일",
      dataIndex: "loggedAt",
      key: "loggedAt",
      render: date => (
        <span>
          {moment.unix(1571034686295 / 1000).format("LLL")}
          <Divider type="vertical" />
          {moment().fromNow(date)}
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
            title="삭제 하시겠습니까?"
            icon={<Icon type="question-circle-o" style={{ color: "red" }} />}
            onCancel={() => {}}
            onConfirm={() => {
              this.props.dispatch(deleteUser(user.id));
            }}
            cancelText="취소"
            okText="삭제"
          >
            <a href>삭제</a>
          </Popconfirm>
        </span>
      )
    }
  ];

  render() {
    return (
      <Card
        title="회원 관리"
        headStyle={{ fontWeight: "bold" }}
        bordered={false}
        extra={this.props.more && More()}
      >
        <Table
          columns={this.columns}
          dataSource={this.props.users}
          pagination={this.props.pagination}
          loading={this.props.loading}
        />
      </Card>
    );
  }
}

// const mapStateToProps = state => ({ ...state });
// const mapDispatchToProps = dispatch => ({
//   deleteUser: id => dispatch(deleteUser(id))
// });

export default connect()(UserTable);
