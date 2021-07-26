import React, { useState } from "react";
import RocketImage from "./assets/rocket.png";
import "./App.css";
import data from "./assets/changes.json";
import messages from "./assets/messages.json";
import CustomCalHeatmap from "./CustomCalHeatmap/CustomCalHeatmap";
const App = () => {
	const [message, setMessage] = useState(
		"Select a Box to view changes for that date"
	);
	const [infos, setInfos] = useState([]);
	const startDate = () => {
		var date = new Date();
		date.setFullYear(date.getFullYear() - 1).toString();
		return new Date(date);
		// return "2020-07-21T09:59:59.000Z";
	};
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
	return (
		<>
			<div className="contain" />
			<div className="main">
				<div
					className="sub"
					style={{ paddingBottom: "10px" }}
				>
					<h1
						style={{
							width:'95vw',
							alignItems: "center",
							display: "flex",
							justifyContent: "center",
						}}
					>
						Change Heat Map
					</h1>

					<CustomCalHeatmap
						data={value}
						rectSize={10}
						// height={360}
						width={1440}
						rectWidth={12}
						startDate={new Date(startDate())}
						endDate={new Date()}
						monthSpace={12}
						// fadeAnimation={{ animate: true, duration: 0.4 }}
						displayYear
						displayLegend
						legendLables={["Less", "More"]}
						yearLables={["2020", "2021"]}
						colors={[
							{ count: 0, color: "#DCDFE3" },
							{ count: 2, color: "#FCA08B" },
							{ count: 4, color: "#FC8D72" },
							{ count: 10, color: "#FD7859" },
							{ count: 20, color: "#FC6341" },
						]}
						onClick={(date, count) => {
							console.log("onn click", date, count);
							if (count === 0) {
								setMessage(`No changes available On ${new Date(date).toString()}`);

								setInfos([]);
							}
							if (count > 0) {
								setMessage(
									`Showing ${count} changes that occurred On ${new Date(
										date
									).toString()}`
								);
								setInfos((info) => {
									return messages.filter((item) => {
										if (item.date === formatDate(date)) {
											return item;
										}
									});
								});
							}
						}}
					/>
				</div>
				<div className="sub" style={{ alignItems: "center" }}>
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
											paddingTop: "25px",
										}}
									>
										<img
											src={RocketImage}
											style={{ height: "32px", marginRight: "48px" }}
										/>
										<h5 style={{}}>{message.description}</h5>
									</li>
								);
							})}
						</ui>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
