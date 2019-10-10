import React from "react";
import {
  Layout,
  Row,
  Col,
  Button,
  Descriptions,
  Badge,
  Input,
  Card
} from "antd";
import LineGraph from "../components/graph/LineGraph";
import SummaryCard from "../components/card/SummaryCard";
import UserTable from "../components/table/UserTable";
import { users } from "../data";

import { Link, useParams } from "react-router-dom";
const { TextArea } = Input;
class QnADetail extends React.Component {
  state = {
    value: ""
  };

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  componentDidMount() {
    console.log(JSON.stringify(this.props, null, 2));
  }

  render() {
    const { value } = this.state;
    return (
      <>
        <Layout.Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280
          }}
        >
          <Card>
            <Row>
              <Col>
                <Descriptions title="문의하기" bordered>
                  <Descriptions.Item label="작성자">홍길동</Descriptions.Item>
                  <Descriptions.Item label="작성일">
                    1990.09.17
                  </Descriptions.Item>
                  <Descriptions.Item label="답변여부">
                    <Badge status="processing" text="Running" />
                  </Descriptions.Item>
                  <Descriptions.Item label="문의 제목" span={3}>
                    문의를 문의드립니다.
                  </Descriptions.Item>
                  <Descriptions.Item label="문의 내용" span={3}>
                    군사법원의 조직·권한 및 재판관의 자격은 법률로 정한다.
                    언론·출판에 대한 허가나 검열과 집회·결사에 대한 허가는
                    인정되지 아니한다. 근로자는 근로조건의 향상을 위하여
                    자주적인 단결권·단체교섭권 및 단체행동권을 가진다.
                    국민경제의 발전을 위한 중요정책의 수립에 관하여 대통령의
                    자문에 응하기 위하여 국민경제자문회의를 둘 수 있다. 국가는
                    농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을
                    도모함으로써 농·어민의 이익을 보호한다.
                  </Descriptions.Item>
                  <Descriptions.Item label="답변" span={3}>
                    구글에서 검색해보세요
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>

            <Row>
              <Col>
                <TextArea
                  value={value}
                  onChange={this.onChange}
                  placeholder="Controlled autosize"
                  autosize={{ minRows: 3, maxRows: 5 }}
                />
              </Col>
            </Row>

            <Row>
              <Col style={{ textAlign: "right" }}>
                <Link to="/qna">
                  <Button>목록</Button>
                </Link>
                <Button>답변하기</Button>
              </Col>
            </Row>
          </Card>
        </Layout.Content>
      </>
    );
  }
}

export default QnADetail;
