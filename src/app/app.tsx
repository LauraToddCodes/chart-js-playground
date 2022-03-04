import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { BarChart } from "../pages";
import React from "react";

export function App() {
	return (
		<div className="App">
			<header className="App-header"></header>
			<Router>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/bar-chart">Bar Chart</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path="/bar-chart" element={<BarChart />} />

					<Route path="/" element={<div>Honey! I'm Home!</div>} />
				</Routes>
			</Router>
		</div>
	);
}
