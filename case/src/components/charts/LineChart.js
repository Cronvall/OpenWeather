import React, { Component } from 'react';
import Chart from 'chart.js/auto';

export default class ChartDisp extends Component {

	chartRef = React.createRef();

  
	componentDidMount() {
		const ctx = this.chartRef.current.getContext("2d");
		new Chart(ctx, {
			type: "line",
			data: {
                    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    datasets: [{ 
					data: [86,114,106,106,107,111,133],
					label: "Total",
					borderColor: "#FFFFFF",
					fill: false,
				}, 
				]
			},
		});
	}
	render() {
		return (
			<div>
				<canvas id="myChart" ref={this.chartRef}/>
			</div>
			)
	}
}