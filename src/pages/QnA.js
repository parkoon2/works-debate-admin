import React from "react";
import { connect } from "react-redux";
import { Layout, Row, Col, Input, Select, Pagination } from "antd";
import { fetchQnA } from "../actions/qna";
import QnaTable from "../components/table/QnaTable";
import BaseLayout from "../components/layout/BaseLayout";
const { Option } = Select;
const { Search } = Input;
class QnA extends React.Component {
  state = {
    listType: "title",
    keyword: ""
  };

  componentDidMount() {
    this.props.loadQnA();
  }

  handleListOptionChange = value => {
    this.setState({
      listType: value
    });
  };
  onSearch = keyword => {
    const { listType } = this.state;

    this.setState({
      keyword
    });
    this.props.loadQnA({
      keyword,
      listType
    });
  };

  onPageChange = (page, pageSize) => {
    const { listType, keyword } = this.state;
    const skip = (page - 1) * pageSize;

    this.props.loadQnA({
      keyword,
      listType,
      offset: skip
    });
  };
  render() {
    return (
      <BaseLayout>
        <Layout.Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280
          }}
        >
          <Row style={{ textAlign: "left", marginBottom: "12px" }}>
            <Input.Group compact>
              <Select
                defaultValue={this.state.listType}
                style={{ width: "7%", marginRight: "10px" }}
                onChange={this.handleListOptionChange} /*loading disabled*/
              >
                <Option value="title">제목</Option>
                <Option value="contents">내용</Option>
              </Select>

              {/* ------ */}

              {/* ------ */}

              <Search
                style={{ width: "27%" }}
                autoFocus
                placeholder="검색어를 입력하세요."
                onSearch={this.onSearch}
                // onChange={this.handleSearchChange}
                // value={this.state.keyword}
                enterButton
              />
            </Input.Group>
          </Row>
          <Row>
            <Col span={24}>
              <QnaTable
                items={this.props.qna.items}
                loading={this.props.qna.loading}
                pagination={
                  <Pagination
                    defaultCurrent={1}
                    total={this.props.qna.total}
                    pageSize={10}
                    onChange={this.onPageChange}
                  />
                }
              />
            </Col>
          </Row>
        </Layout.Content>
      </BaseLayout>
    );
  }
}
const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  loadQnA: option => dispatch(fetchQnA(option))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QnA);
