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
  componentDidMount() {
    this.props.loadDebates();
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
                defaultValue="lucy"
                style={{ width: "7%", marginRight: "10px" }}
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
                style={{ width: "27%" }}
                autoFocus
                placeholder="검색어를 입력하세요."
                onSearch={value => alert(value)}
                enterButton
              />
            </Input.Group>
          </Row>
          <Row>
            <Col span={24}>
              <DebateTable
                items={this.props.debates.items}
                loading={this.props.debates.loading}
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
      </>
    );
  }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  loadDebates: () => dispatch(fetchDebates())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Debates);
