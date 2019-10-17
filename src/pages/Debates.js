import React from "react";
import { connect } from "react-redux";
import { Layout, Row, Col, Input, Select, Pagination } from "antd";
import DebateTable from "../components/table/DebateTable";
import { fetchDebates } from "../actions/debates";
const { Option } = Select;
const { Search } = Input;

function handleChange(value) {
  console.log(`selected ${value}`);
}

class Debates extends React.Component {
  state = {
    keyword: ""
  };

  componentDidMount() {
    this.props.fetchDebates();
  }

  handleSelectChange = value => {
    this.setState({
      status: value
    });
  };

  handleStatusFilter = status => {
    this.props.fetchDebates({
      status
    });
  };

  onPageChange = (page, pageSize) => {
    const { status, keyword } = this.state;
    const skip = (page - 1) * pageSize;

    this.props.fetchDebates({
      keyword,
      status,
      offset: skip
    });
  };

  render() {
    return (
      <>
        <Layout.Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280
          }}
        >
          {/* <Row style={{ textAlign: "left", marginBottom: "12px" }}>
            <Input.Group compact>
              <Select
                defaultValue="all"
                style={{ width: "7%", marginRight: "10px" }}
                onChange={this.handleSelectChange} 
              >
                <Option value="all">전체</Option>
                <Option value="ready">준비</Option>
                <Option value="start">진행</Option>
                <Option value="end">종료</Option>
              </Select>

              <Search
                style={{ width: "27%" }}
                autoFocus
                placeholder="검색어를 입력하세요."
                onSearch={this.onSearch}
                enterButton
              />
            </Input.Group>
          </Row>  */}
          <Row>
            <Col span={24}>
              <DebateTable
                items={this.props.debates.items}
                loading={this.props.debates.loading}
                handleStatusFilter={this.handleStatusFilter}
                pagination={
                  <Pagination
                    defaultCurrent={1}
                    total={this.props.debates.total}
                    pageSize={10}
                    onChange={this.onPageChange}
                  />
                }
              />
            </Col>
          </Row>
        </Layout.Content>
      </>
    );
  }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  fetchDebates: option => dispatch(fetchDebates(option))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Debates);
