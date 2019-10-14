import React from "react";
import { connect } from "react-redux";
import { Layout, Row, Col, Input, Select } from "antd";
import UserTable from "../components/table/UserTable";
import { getUsers } from "../actions/users";

const { Option } = Select;
const { Search } = Input;

function handleChange(value) {
  console.log(`selected ${value}`);
}

class Users extends React.Component {
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
          <Row style={{ textAlign: "center", marginBottom: "12px" }}>
            <Input.Group compact>
              <Select
                defaultValue="lucy"
                style={{ width: "12%", marginRight: "10px" }}
                onChange={handleChange} /*loading disabled*/
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>

              <Select
                defaultValue="lucy"
                style={{ width: "12%", marginRight: "10px" }}
                onChange={handleChange} /*loading disabled*/
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>

              {/* ------ */}

              {/* ------ */}

              <Search
                style={{ width: "40%" }}
                placeholder="input search text"
                onSearch={value => alert(value)}
                enterButton
              />
            </Input.Group>
          </Row>
          <Row>
            <Col span={24}>
              <UserTable
                users={this.props.users.users}
                loading={this.props.users.loading}
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
  getUsers: () => dispatch(getUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
