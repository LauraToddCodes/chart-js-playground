import * as React from "react";

import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export function BarChart() {
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: "Chart.js Bar Chart",
			},
		},
	};
	return (
		<div style={{ width: "700px" }}>
			<Bar
				options={options}
				data={{
					labels: ["January", "February", "March", "April", "May", "June"],
					datasets: [
						{
							label: "My First dataset",
							backgroundColor: "rgb(255, 99, 132)",
							borderColor: "rgb(255, 99, 132)",
							data: [3, 10, 5, 2, 20, 30, 45],
						},
					],
				}}
			/>
		</div>
	);
}
