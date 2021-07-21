"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true,
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var d3 = _interopRequireWildcard(require("d3"));

var _HeatMapDate = require("./helpers/HeatMapDate");

var _d3Tip = _interopRequireDefault(require("d3-tip"));

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};
		if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) {
					var desc =
						Object.defineProperty && Object.getOwnPropertyDescriptor
							? Object.getOwnPropertyDescriptor(obj, key)
							: {};
					if (desc.get || desc.set) {
						Object.defineProperty(newObj, key, desc);
					} else {
						newObj[key] = obj[key];
					}
				}
			}
		}
		newObj.default = obj;
		return newObj;
	}
}

function _typeof(obj) {
	if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
		_typeof = function _typeof(obj) {
			return typeof obj;
		};
	} else {
		_typeof = function _typeof(obj) {
			return obj &&
				typeof Symbol === "function" &&
				obj.constructor === Symbol &&
				obj !== Symbol.prototype
				? "symbol"
				: typeof obj;
		};
	}
	return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _defineProperties(target, props) {
	for (var i = 0; i < props.length; i++) {
		var descriptor = props[i];
		descriptor.enumerable = descriptor.enumerable || false;
		descriptor.configurable = true;
		if ("value" in descriptor) descriptor.writable = true;
		Object.defineProperty(target, descriptor.key, descriptor);
	}
}

function _createClass(Constructor, protoProps, staticProps) {
	if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	if (staticProps) _defineProperties(Constructor, staticProps);
	return Constructor;
}

function _possibleConstructorReturn(self, call) {
	if (call && (_typeof(call) === "object" || typeof call === "function")) {
		return call;
	}
	return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
	_getPrototypeOf = Object.setPrototypeOf
		? Object.getPrototypeOf
		: function _getPrototypeOf(o) {
				return o.__proto__ || Object.getPrototypeOf(o);
		  };
	return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function");
	}
	subClass.prototype = Object.create(superClass && superClass.prototype, {
		constructor: { value: subClass, writable: true, configurable: true },
	});
	if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
	_setPrototypeOf =
		Object.setPrototypeOf ||
		function _setPrototypeOf(o, p) {
			o.__proto__ = p;
			return o;
		};
	return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
	if (self === void 0) {
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called"
		);
	}
	return self;
}

function _defineProperty(obj, key, value) {
	if (key in obj) {
		Object.defineProperty(obj, key, {
			value: value,
			enumerable: true,
			configurable: true,
			writable: true,
		});
	} else {
		obj[key] = value;
	}
	return obj;
}

/**
 * Component that display a heatmap to visualize data through date.
 * Each square is a day.
 */
var HeatMapDate =
	/*#__PURE__*/
	(function (_React$PureComponent) {
		_inherits(HeatMapDate, _React$PureComponent);

		/**
		 * Set a default value to unrequired props
		 */
		function HeatMapDate(props) {
			var _this;

			_classCallCheck(this, HeatMapDate);

			_this = _possibleConstructorReturn(
				this,
				_getPrototypeOf(HeatMapDate).call(this, props)
			);

			_defineProperty(
				_assertThisInitialized(_assertThisInitialized(_this)),
				"ID",
				void 0
			);

			_defineProperty(
				_assertThisInitialized(_assertThisInitialized(_this)),
				"IDLegend",
				void 0
			);

			if (props.rectWidth && props.rectWidth < 0)
				throw new Error("rectWidth must be greater than zero");
			if (props.marginBottom && props.marginBottom < 0)
				throw new Error("marginBottom must be greater than zero");
			if (props.marginRight && props.marginRight < 0)
				throw new Error("marginRight must be greater than zero");
			if (props.monthSpace && props.monthSpace < 0)
				throw new Error("monthSpace must be greater than zero");
			if (props.radius && props.radius < 0)
				throw new Error("radius must be greater than zero");
			_this.ID = Math.random()
				.toString(36)
				.replace(/[^a-z]+/g, "")
				.substr(0, 32);
			_this.IDLegend = Math.random()
				.toString(36)
				.replace(/[^a-z]+/g, "")
				.substr(0, 32);
			_this.state = {
				svgElem: undefined,
				svgLegend: undefined,
				firstRender: true,
			};
			return _this;
		}

		_createClass(HeatMapDate, [
			{
				key: "cleanHeatMap",
				value: function cleanHeatMap(svg) {
					d3.select(".d3-tip." + this.ID).remove();
					d3.select(".d3-tip." + this.IDLegend).remove(); // We remove all elements (rect + text) to properly update the svg

					svg.selectAll("*").remove();
				},
			},
			{
				key: "renderLegend",
				value: function renderLegend(svgLegend, legendWidth = 500) {
					var _this2 = this;

					var _this$props = this.props,
						colors = _this$props.colors,
						defaultColor = _this$props.defaultColor,
						rectWidth = _this$props.rectWidth,
						marginRight = _this$props.marginRight,
						displayLegend = _this$props.displayLegend,
						backgroundColor = _this$props.backgroundColor,
						textColor = _this$props.textColor,
						radius = _this$props.radius,
						textDefaultColor = _this$props.textDefaultColor,
						yearLables = _this$props.yearLables;

					if (displayLegend) {
						var svgLegendD3 = d3.select(svgLegend);
						svgLegendD3.selectAll("*").remove();
						svgLegendD3.attr("width", 1600).attr("height", 30);
						
						svgLegendD3
							.append("text")
							.text("Less")
							.attr("x", 950)
							.attr("y", 28)
							.attr("font-size", rectWidth + 3)
							.attr("fill", textColor);
						svgLegendD3
							.append("text")
							.text("More")
							.attr("x", 1100)
							.attr("y", 28)
							.attr("font-size", rectWidth + 3)
							.attr("fill", textColor);
						var tip = (0, _d3Tip.default)()
							.attr("class", "d3-tip " + this.IDLegend)
							.offset([-8, 0])
							.html(function (d) {
								var displ = d.text ? d.text : d.count.toString();
								return (
									"<div style={{ fontSize: '15' ,font-family: 'Poppins'> " +
									displ +
									"</div>"
								);
							});
						svgLegendD3.call(tip);
						var legendColors = [
							{
								color: defaultColor,
								count: 0,
								text: textDefaultColor ? textDefaultColor : "0",
							},
						];
						colors.map(function (c) {
							legendColors.push(c);
						});
						svgLegendD3
							.selectAll("rect")
							.data(legendColors)
							.enter()
							.append("rect")
							.attr("width", rectWidth)
							.attr("height", rectWidth)
							.attr("x", function (d, i) {
								return (rectWidth + marginRight) * i + rectWidth * 6 + 930;
							})
							.attr("y", 22 - rectWidth / 2)
							.attr("rx", radius)
							.attr("ry", radius)
							.attr("fill", function (d) {
								return d.color;
							})
							.on("mouseover", function (d) {
								if (d.color !== backgroundColor) {
									tip.show(d, this);
									d3.select(this).attr("stroke", textColor);
								}
							})
							.on("mouseout", function (d) {
								tip.hide(d, _this2);
								d3.selectAll("rect").attr("stroke", "none");
							});
					} else {
						var _svgLegendD = d3.select(svgLegend);

						_svgLegendD.attr("width", 0).attr("height", 0);
					}
				},
			},
			{
				key: "renderHeatMap",
				value: function renderHeatMap(dataset, svg, noMonthName) {
					var _this3 = this;

					var _this$props2 = this.props,
						startDate = _this$props2.startDate,
						rectWidth = _this$props2.rectWidth,
						marginBottom = _this$props2.marginBottom,
						backgroundColor = _this$props2.backgroundColor,
						textColor = _this$props2.textColor,
						radius = _this$props2.radius,
						displayYear = _this$props2.displayYear,
						onClick = _this$props2.onClick,
						onDoubleClick = _this$props2.onDoubleClick,
						onMouseEnter = _this$props2.onMouseEnter,
						onMouseLeave = _this$props2.onMouseLeave,
						monthSpace = _this$props2.monthSpace,
						marginRight = _this$props2.marginRight,
						yearLables = _this$props2.yearLables; // Array of months for x axis

					var monthsName = [
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

					if (dataset.length > 0) {
						// I added an ID the tooltip because it's a workaround to prevent the tooltip won't hide when the component is updating
						var tip = (0, _d3Tip.default)()
							.attr("class", "d3-tip " + this.ID)
							.offset([-8, 0])
							.html(function (d) {
								if (d.color !== backgroundColor) {
									return (
										"<div style={{ fontSize: '15' ,font-family: 'Poppins'}}>" +
										d.count +
										" changes on " +
										monthsName[d.date.getMonth()] +
										" " +
										d.date.getDate() +
										", " +
										d.date.getFullYear() +
										"</div>"
									);
								} else return null;
							});
						svg.call(tip); // Display all data squares

						var monthOffset = 0;
						svg
							.selectAll("rect")
							.data(dataset)
							.enter()
							.append("rect")
							.attr("fill-opacity", 1)
							.attr("width", rectWidth)
							.attr("height", rectWidth)
							.attr("class", "dayRect")
							.attr("x", function (d) {
								var prefixYear = displayYear ? rectWidth : 0;
								var currentDate = new Date(d.date);

								if (
									currentDate.getDate() === 1 &&
									d.color !== backgroundColor
								) {
									monthOffset++;
								}

								if (
									(currentDate.getDate() === 1 &&
										d.color !== backgroundColor) ||
									(currentDate.getTime() ===
										new Date(startDate).setHours(0, 0, 0, 0) &&
										new Date(startDate).getDate() < 14)
								) {
									svg
										.append("text")
										.text(monthsName[currentDate.getMonth()])
										.attr("x", function () {
											return (
												Math.floor(d.i / 7) * (rectWidth + marginRight) +
												110 +
												monthOffset * monthSpace -
												prefixYear
											);
										})
										.attr("y", 42)
										.attr("font-size", rectWidth + 3)
										.attr("fill", textColor);
								}

								return (
									Math.floor(d.i / 7) * (rectWidth + marginRight) +
									65 +
									monthOffset * monthSpace
								);
							})
							.attr("y", function (d) {
								return (d.i % 7) * (rectWidth + marginBottom) + 50;
							})
							.attr("fill", function (d) {
								return d.color;
							})
							.attr("rx", radius)
							.attr("ry", radius)
							.on("mouseover", function (d, i) {
								if (
									d.color !== backgroundColor &&
									d.color !== _HeatMapDate.noDisplayColor
								) {
									tip.show(d, this);
									d3.select(this).attr("stroke", "black");
								}

								onMouseEnter(d, i);
							})
							.on("mouseout", function (d, i) {
								tip.hide(d, _this3);
								d3.selectAll("rect").attr("stroke", "none");
								onMouseLeave(d, i);
							})
							.on("click", function (d, i) {
								onClick(d, i);
							})
							.on("ondblclick", function () {
								onDoubleClick();
							});
					}
          var prefix1 = displayYear
							? new Date(yearLables[0]).getFullYear().toString() + ""
							: " "; // Display month name
						var prefix2 = displayYear
							? new Date(yearLables[1]).getFullYear().toString() + ""
							: " "; // Display month name

						svg
							.append("text")
							.text(prefix1)
							.attr("x", 70)
							.attr("y", 20)
							.attr("font-size", rectWidth + 3)
							.attr("fill", textColor);

						svg
							.append("text")
							.text(prefix2)
							.attr("x", 1150)
							.attr("y", 20)
							.attr("font-size", rectWidth + 3)
							.attr("fill", textColor);

				},
			},
			{
				key: "render",
				value: function render() {
					var _this4 = this;

					var _this$props3 = this.props,
						startDate = _this$props3.startDate,
						endDate = _this$props3.endDate,
						data = _this$props3.data,
						colors = _this$props3.colors,
						defaultColor = _this$props3.defaultColor,
						rectWidth = _this$props3.rectWidth,
						marginRight = _this$props3.marginRight,
						marginBottom = _this$props3.marginBottom,
						backgroundColor = _this$props3.backgroundColor,
						textColor = _this$props3.textColor,
						classnames = _this$props3.classnames,
						shouldStartMonday = _this$props3.shouldStartMonday,
						monthSpace = _this$props3.monthSpace,
						rangeDisplayData = _this$props3.rangeDisplayData,
						fadeAnimation = _this$props3.fadeAnimation;
					var _this$state = this.state,
						svgElem = _this$state.svgElem,
						svgLegend = _this$state.svgLegend; // Array of days for y axis

					var daysName = !shouldStartMonday
						? ["Sun", "Tue", "Thu", "Sat"]
						: ["Mon", "Wed", "Fri", "Sun"];
					var svg = d3.select(svgElem); // This is a possible workaround about tooltips that do not want to hide when data changes
					// See https://github.com/Caged/d3-tip/issues/133

					this.cleanHeatMap(svg);
					var tmpBufferDate = new Date(startDate);
					var startDateYesterday = new Date(startDate); // When want to display month on first column if difference between
					// startDate and endDate less than 1 month

					var noMonthName =
						(startDate.getMonth() === endDate.getMonth() &&
							startDate.getFullYear() === endDate.getFullYear()) ||
						(startDate.getMonth() == 11 &&
							endDate.getMonth() === 0 &&
							endDate.getFullYear() - startDate.getFullYear() === 1);
					startDateYesterday.setDate(startDateYesterday.getDate() - 1); // We set bufferDate to the previous Sunday (or Monday following 'shouldStartMonday' prop) of startDate.

					tmpBufferDate.setDate(
						tmpBufferDate.getDate() - startDateYesterday.getDay()
					);

					if (!shouldStartMonday) {
						tmpBufferDate.setDate(tmpBufferDate.getDate() - 1);
					} // buffer that begin from previous Sunday (or Monday) of startDate then browse every day to endDate

					var bufferDate = new Date(tmpBufferDate);
					bufferDate.setHours(0, 0, 0, 0); // Number of day from bufferDate to endDate

					var nbDayDiff =
						(endDate.getTime() - bufferDate.getTime()) / 1000 / 60 / 60 / 24;
					var nbMonthsDiff =
						(endDate.getTime() - bufferDate.getTime()) /
						1000 /
						60 /
						60 /
						24 /
						30;
					var legendWidth =
						(rectWidth + marginRight) * colors.length + 90 + 200;
					var svgWidth =
						(rectWidth + marginRight) * (nbDayDiff / 7) +
						nbMonthsDiff * monthSpace +
						200; // Set width and height of SVG element

					svg
						.attr("width", legendWidth > svgWidth ? legendWidth : svgWidth)
						.attr("height", (rectWidth + marginBottom) * 7 + 50);
					var dataset = (0, _HeatMapDate.generateD3Dataset)(
						nbDayDiff,
						svg,
						daysName,
						rectWidth,
						marginBottom,
						textColor,
						data,
						bufferDate,
						backgroundColor,
						startDateYesterday,
						defaultColor,
						colors,
						rangeDisplayData
					);
					this.renderLegend(svgLegend, legendWidth);
					this.renderHeatMap(dataset, svg, noMonthName);
					var styles = {
						width: legendWidth > svgWidth ? legendWidth : svgWidth + "px",
						height: "auto",
						backgroundColor: backgroundColor,
						animationDuration: "0s",
					};

					if (fadeAnimation.animate) {
						styles.animationDuration = fadeAnimation.duration + "s";
					}

					return React.createElement(
						"div",
						{
							className: "react-d3-heatMap-container " + classnames,
							style: styles,
							id: "react-d3-heatMap-" + this.ID,
						},
						React.createElement("svg", {
							style: {
								width: "1200",
								display: "block",
							},
							ref: function ref(elem) {
								if (!_this4.state.svgElem)
									_this4.setState({
										svgElem: elem,
									});
							},
						}),
						React.createElement("svg", {
							ref: function ref(elem) {
								if (!_this4.state.svgLegend)
									_this4.setState({
										svgLegend: elem,
									});
							},
						})
					);
				},
			},
		]);

		return HeatMapDate;
	})(React.PureComponent);

exports.default = HeatMapDate;

_defineProperty(HeatMapDate, "defaultProps", {
	marginRight: 4,
	marginBottom: 4,
	displayLegend: true,
	rectWidth: 10,
	defaultColor: "#cdcdcd",
	backgroundColor: "#fff",
	textColor: "#000",
	radius: 0,
	classnames: "",
	yearLables: [],
	onClick: function onClick() {},
	onDoubleClick: function onDoubleClick() {},
	onMouseLeave: function onMouseLeave() {},
	onMouseEnter: function onMouseEnter() {},
	shouldStartMonday: false,
	monthSpace: 0,
	rangeDisplayData: [],
	fadeAnimation: {
		animate: true,
		duration: 0.4,
	},
});
