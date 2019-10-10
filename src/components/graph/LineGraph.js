import React from "react";
import { Card } from "antd";
import Chart from "chart.js";
import PropTypes from "prop-types";

class LineGraph extends React.Component {
  componentDidMount() {
    console.log(this.props);
    var ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: this.props.xAxisLabels,
        datasets: [
          {
            label: this.props.dataLabel,
            data: this.props.data,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            lineTension: 0.1
          }
        ]
      },
      options: {
        responsive: false
        // maintainAspectRatio: false,
      }
    });
  }

  render() {
    return (
      <Card title={this.props.title} bordered={false}>
        <canvas
          id="myChart"
          class="chartjs"
          style={{ display: "block", width: "100%", height: "385px" }}
        ></canvas>
      </Card>
    );
  }
}

LineGraph.propTypes = {
  xAxisLabels: PropTypes.array.isRequired,
  data: PropTypes.array,
  dataLabel: PropTypes.string
};

export default LineGraph;
