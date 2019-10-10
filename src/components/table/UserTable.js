import React from "react";
import { Table, Tag, Divider, Popconfirm, Icon, Card } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: text => <a>{text}</a>
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
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
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a>Invite {record.name}</a>
        <Divider type="vertical" />
        <Popconfirm
          title="삭제 하시겠습니까?"
          icon={<Icon type="question-circle-o" style={{ color: "red" }} />}
          onCancel={() => alert("취소")}
          onConfirm={() => alert("삭제")}
          cancelText="취소"
          okText="삭제"
        >
          <a>Delete</a>
        </Popconfirm>
        ,
      </span>
    )
  }
];

class UserTable extends React.Component {
  render() {
    return (
      <Card title="회원~~" bordered={false}>
        <Table columns={columns} dataSource={this.props.users} />
      </Card>
    );
  }
}

export default UserTable;
