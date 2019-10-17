import React from "react";
import { Popconfirm, Button, Icon } from "antd";

const DeleteButton = ({ title, onConfirm }) => {
  return (
    <Popconfirm
      title={title}
      icon={<Icon type="question-circle-o" style={{ color: "red" }} />}
      onCancel={() => {}}
      onConfirm={onConfirm}
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
  );
};

export default DeleteButton;
