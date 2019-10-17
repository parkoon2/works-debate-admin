import React from "react";
import { connect } from "react-redux";
import { Layout, Row, Col, Input, Select, Pagination } from "antd";
import UserTable from "../components/table/UserTable";
import { getUsers } from "../actions/users";

const { Option } = Select;
const { Search } = Input;

class Users extends React.Component {
  state = {
    listType: "id",
    userType: "all",
    keyword: ""
  };

  handleUserOptionChange = value => {
    this.setState({
      userType: value
    });
  };

  onSearch = keyword => {
    const { listType, userType } = this.state;

    this.setState({
      keyword
    });

    this.props.getUsers({
      keyword,
      listType,
      userType
    });
  };

  onPageChange = (page, pageSize) => {
    const { listType, userType, keyword } = this.state;
    const skip = (page - 1) * pageSize;

    this.props.getUsers({
      keyword,
      listType,
      userType,
      offset: skip
    });
  };

  handleListOptionChange = value => {
    this.setState({
      listType: value
    });
  };

  componentDidMount() {
    this.props.getUsers();
  }
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
          <Row style={{ textAlign: "left", marginBottom: "12px" }}>
            <Input.Group compact>
              <Select
                defaultValue={this.state.listType}
                style={{ width: "7%", marginRight: "10px" }}
                onChange={this.handleListOptionChange} /*loading disabled*/
              >
                <Option value="id">아이디</Option>
                <Option value="name">닉네임</Option>
              </Select>

              <Select
                defaultValue={this.state.userType}
                style={{ width: "7%", marginRight: "10px" }}
                onChange={this.handleUserOptionChange} /*loading disabled*/
              >
                <Option value="all">전체</Option>
                <Option value="general">일반</Option>
                <Option value="manager">운영자</Option>
                <Option value="admin">관리자</Option>
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
              <UserTable
                users={this.props.users.users}
                loading={this.props.users.loading}
                pagination={
                  <Pagination
                    defaultCurrent={1}
                    total={this.props.users.total}
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
  getUsers: option => dispatch(getUsers(option))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
