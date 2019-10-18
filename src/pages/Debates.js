import React from "react";
import { connect } from "react-redux";
import { Layout, Row, Col, Input, Select, Pagination } from "antd";
import DebateTable from "../components/table/DebateTable";
import BaseLayout from "../components/layout/BaseLayout";

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
      <BaseLayout>
        <Layout.Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280
          }}
        >
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
      </BaseLayout>
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
