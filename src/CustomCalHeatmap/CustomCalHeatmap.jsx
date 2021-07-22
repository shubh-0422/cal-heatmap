
import React, { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";

const CustomCalHeatmap = ({
	title,
	data,
	rectSize,
	height,
	width,
	rectWidth,
	startDate,
	endDate,
	monthSpace,
	displayYear,
	displayLegend,
	legendLables,
	yearLables,
	colors,
	onClick,
}) => {
	const marginRight = 4;

	const daysName = [" ", "2", " ", "4", " ", "6", " "];
	const prefix1 = displayYear
		? new Date(yearLables[0]).getFullYear().toString() + ""
		: "";
	const prefix2 = displayYear
		? new Date(yearLables[1]).getFullYear().toString() + ""
		: "";
	const formatDate = (date) => {
		var d = new Date(date),
			month = "" + (d.getMonth() + 1),
			day = "" + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = "0" + month;
		if (day.length < 2) day = "0" + day;

		return [year, month, day].join("-");
	};
	const monthsName = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"July",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const [monthList] = useState(() => {
		var start = formatDate(startDate).split("-");
		var end = formatDate(endDate).split("-");
		var startYear = parseInt(start[0]);
		var endYear = parseInt(end[0]);
		var months = [];

		for (var i = startYear; i <= endYear; i++) {
			var endMonth = i !== endYear ? 11 : parseInt(end[1]) - 1;
			var startMon = i === startYear ? parseInt(start[1]) - 1 : 0;
			for (var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j + 1) {
				months.push({ name: monthsName[j], year: i });
			}
		}
		return months;
	});
	const addDays = function (currentDate, days) {
		var date = new Date(currentDate);
		date.setDate(date.getDate() + days);
		return date;
	};
	const dayfinder = function () {
		var dateArray = [];
		var currentDate = startDate;
		var objMatch = false;
		const maxCount = 0;

		while (currentDate <= endDate) {
			objMatch = data.find((obj) => {
				const dateTmp = new Date(obj.date);
				dateTmp.setHours(0, 0, 0, 0);
				currentDate.setHours(0, 0, 0, 0);
				return dateTmp.getTime() === currentDate.getTime();
			});
			var finalColor = "red";

			if (objMatch === undefined) {
				finalColor = colors[0];
			} else if (objMatch.count > 14) {
				finalColor = colors[4];
			} else if (objMatch.count > 10) {
				finalColor = colors[3];
			} else if (objMatch.count > 5) {
				finalColor = colors[2];
			} else if (objMatch.count > 2) {
				finalColor = colors[1];
			}

			// console.log(data);
			var date = formatDate(currentDate);
			dateArray.push({
				singledate: currentDate.getDate(),
				date: date,
				day: currentDate.getDay(),
				month: monthsName[currentDate.getMonth()],
				year: currentDate.getFullYear(),
				count: objMatch ? objMatch.count : maxCount || 0,
				color: finalColor.color,
			});
			currentDate = addDays(currentDate, 1);
		}
		return dateArray;
	};
	const onBoxclick = (currentDate) => {
		console.log("box", currentDate.date, currentDate.count);
		onClick(currentDate.date, currentDate.count);
	};
	return (
		<div>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<div style={{ fontSize: `${rectWidth + 3}px`, marginLeft: "100px" }}>
					{prefix1}
				</div>
				<div style={{ postion:'fixed',fontSize: `${rectWidth + 3}px`, marginRight: `70px` }}>
					{prefix2}
				</div>
			</div>
			<div style={{overflowX: "scroll",
  scrollbarWidth: "none"}}>
				<ui
					style={{
						listStyleType: "none",
						display: "flex",
						// justifyContent: "space-evenly",
					}}
				>
					<li>
						<ui
							style={{
								listStyleType: "none",
								display: "flex",
								flexDirection: "column",
								marginTop: "20px",
								justifyContent: "space-evenly",
								marginRight: "12px",
							}}
						>
							{daysName.map((name) => {
								return (
									<li
										style={{
											fontSize: `${rectWidth + 3}px`,
											marginTop: "14px",
											marginLeft: "40px",
											marginRight: "14px",
										}}
									>
										{name ? name : " "}
									</li>
								);
							})}
						</ui>
					</li>
					{monthList.map((month) => {
						return (
							<li
								style={{
									paddingBottom: "5px",
									fontSize: `${rectWidth + 3}px`,
									marginRight:"25px",
									marginLeft: `${
										Math.floor(1 / 7) * (rectWidth + marginRight)
									}px`,
									minWidth: `${
										month.name === monthsName[new Date(startDate).getMonth()]
											? "70px"
											: "105px"
									}`,
								}}
							>
								{month.name}
								<div style={{ display: "flex", justifyContent: "left" }}>
									<div
										style={{
											height: `${16 * rectWidth + marginRight}px`,
											display: "flex",
											justifyContent: "top",
											flexDirection: "column",
											flexWrap: "wrap",
											// gridAutoFlow: 'row',
											// gridTemplatecolumns: 'repeat(8, 2fr)',  gridTemplateRows:'repeat(10, 3px)'
										}}
									>
										{dayfinder().map((current) => {
											if (
												current.month === month.name &&
												month.year === current.year
											) {
												return (
													<li
														style={{ cursor: "pointer" }}
														onClick={() => {
															onBoxclick({ ...current });
														}}
													>
														<Tooltip
															arrow
															title={`${current.count} changes on ${
																monthsName[new Date(current.date).getMonth()]
															} ${new Date(current.date).getDate()}, ${new Date(
																current.date
															).getFullYear()}										
										}`}
															placement="top"
														>
															<svg
																style={{
																	// padding: "3px",
																	width: `${rectWidth + marginRight + 3}px`,
																	height: `${rectWidth + marginRight + 3}px`,
																	viewBox: `0 0 ${
																		rectWidth + marginRight + 3
																	}px ${rectWidth + marginRight + 3}px`,
																	fill: `${current.color}`,
																	xmlns: "http://www.w3.org/2000/svg",
																}}
															>
																<rect
																	style={{
																		width: `${rectWidth + marginRight}px`,
																		height: `${rectWidth + marginRight}px`,
																		fill: `${current.color}`,
																	}}
																/>
															</svg>
														</Tooltip>
													</li>
												);
											}
										})}
									</div>
								</div>
							</li>
						);
					})}
				</ui>
			</div>

			<div
				style={{
					fontSize: `${rectWidth + 3}px`,
					display: "flex",
					justifyContent: "right",
					marginRight: "20px",
					paddingBottom: "10px",
				}}
			>
				<div style={{ fontSize: `${rectWidth + 3}px`, marginRight: "20px" }}>
					{"Less"}
				</div>
				{colors.map((name) => {
					return (
						<div
							style={{
								marginLeft: "3px",
								marginRight: "3px",
								marginTop: "3px",
							}}
						>
							<svg
								style={{
									width: `${rectWidth + marginRight}px`,
									height: `${rectWidth + marginRight}px`,
									viewBox: `0 0 ${rectWidth + marginRight}px ${
										rectWidth + marginRight
									}px`,
									fill: `${name.color}`,
									xmlns: "http://www.w3.org/2000/svg",
								}}
							>
								<rect
									style={{
										width: `${rectWidth + marginRight}px`,
										height: `${rectWidth + marginRight}px`,
										fill: `${name.color}`,
									}}
								/>
							</svg>
						</div>
					);
				})}

				<div
					style={{
						fontSize: `${rectWidth + 3}px`,
						marginRight: "20px",
						marginLeft: "20px",
					}}
				>
					{"More"}
				</div>
			</div>
		</div>
	);
};

export default CustomCalHeatmap;
