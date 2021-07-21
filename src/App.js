import React, { useState } from "react";
import RocketImage from "./assets/rocket.png";
import "./App.css";
import data from "./assets/changes.json";
import HeatMapDate from "./react-d3-heatmap/index";
import messages from "./assets/messages.json";
const App = () => {
	const [message, setMessage] = useState(
		"Select a Box to view changes for that date"
	);
	const [infos, setInfos] = useState([]);
	const [boxSelected, SetBoxSelected] = useState(false);
	const [tempdata, setTempdata] = useState({
		date: "",
		count: -1,
	});
	const value = data.counts;
	const formatDate = (date) => {
		var d = new Date(date),
			month = "" + (d.getMonth() + 1),
			day = "" + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = "0" + month;
		if (day.length < 2) day = "0" + day;

		return [year, month, day].join("-");
	};
	return (<>
		<div className="contain"/>
			<div className="main">
				<div
					className="sub"
					style={{ alignItems: "center", paddingBottom: "10px" }}
				>
					<h1>Change Heat Map</h1>
					<HeatMapDate
						data={value}
						rectSize={10}
						// height={360}
						width={840}
						rectWidth={12}
						startDate={new Date(data.startDate)}
						endDate={new Date(data.endDate)}
						onClick={(value) => {
							setTempdata({ date: value.date, count: value.count });
							if (value.count === 0) {
								setMessage(`No changes available On ${value.date.toString()}`);

								SetBoxSelected(false);
								setInfos([]);
							}
							if (value.count > 0) {
								setMessage(
									`Showing ${
										value.count
									} changes that occurred On ${value.date.toString()}`
								);
								setInfos((info) => {
									return messages.filter((item) => {
										if (item.date === formatDate(value.date)) {
											return item;
										}
									});
								});
								SetBoxSelected(true);
							}
						}}
						yearLables={["2020", "2021"]}
						colors={[
							{ count: 2, color: "#FCA08B" },
							{ count: 4, color: "#FC8D72" },
							{ count: 10, color: "#FD7859" },
							{ count: 20, color: "#FC6341" },
						]}
						monthSpace={20}
						fadeAnimation={{ animate: true, duration: 0.4 }}
						displayYear
						displayLegend
					/>
				</div>
				<div className="sub">
					<h2>{message}</h2>

					<div>
						<ui style={{ listStyleType: "none" }}>
							{infos.map((message) => {
								return (
									<li
										key={message.index}
										style={{
											display: "flex",
											flexDirection: "coloum",
											alignItems: "center",
										}}
									>
										<img
											src={RocketImage}
											style={{ height: "32px", marginRight: "48px" }}
										/>
										<h4 style={{}}>{message.description}</h4>
									</li>
								);
							})}
						</ui>
					</div>
				</div>
		</div></>
	);
};

export default App;
