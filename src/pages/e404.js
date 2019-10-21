import React from "react";
import { Link } from "react-router-dom";
import { Result, Button } from "antd";
const e404 = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="찾을 수 없는 페이지 입니다. 요청하신 페이지가 사라졌거나, 잘못되 경로를 입력하셨습니다."
      extra={
        <Button type="primary">
          <Link to="/">홈으로 이동</Link>
        </Button>
      }
    />
  );
};

export default e404;
