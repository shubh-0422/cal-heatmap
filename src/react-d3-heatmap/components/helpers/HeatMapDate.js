"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateD3Dataset = exports.noDisplayColor = void 0;
var noDisplayColor = "#aaaaaa22";
exports.noDisplayColor = noDisplayColor;

var generateD3Dataset = function generateD3Dataset(nbDayDiff, svg, daysName, rectWidth, marginBottom, textColor, data, bufferDate, backgroundColor, startDateYesterday, defaultColor, colors, rangeDisplayData) {
  var dataset = [];
  var startDateDisplayData = rangeDisplayData && rangeDisplayData[0] ? new Date(rangeDisplayData[0]) : null;
  if (startDateDisplayData) startDateDisplayData.setHours(0, 0, 0, 0);
  var endDateDisplayData = rangeDisplayData && rangeDisplayData[1] ? new Date(rangeDisplayData[1]) : null;
  if (endDateDisplayData) endDateDisplayData.setHours(0, 0, 0, 0);

  if (endDateDisplayData && startDateDisplayData && startDateDisplayData.getTime() > endDateDisplayData.getTime()) {
    var tmpDate = new Date(startDateDisplayData);
    startDateDisplayData = new Date(endDateDisplayData);
    endDateDisplayData = new Date(tmpDate);
  }

  var _loop = function _loop(i) {
    if (i == 0 || i === 2 || i === 4 || i === 6) {
      // Display day name as y axis
      svg.append("text").text(daysName[i / 2]).attr("y", i % 7 * (rectWidth + marginBottom) + rectWidth / 6 + 32+30).attr("x",10).attr("font-size", rectWidth + 3).attr("fill", textColor);
    } // Find the first data that match with current bufferDate


    var objMatch = data.find(function (obj) {
      var dateTmp = new Date(obj.date);
      dateTmp.setHours(0, 0, 0, 0);
      bufferDate.setHours(0, 0, 0, 0);
      return dateTmp.getTime() === bufferDate.getTime();
    }); // If bufferDate < (startDate - 1 day) we set the square color like background to make that 'invisible'

    var finalColor = backgroundColor;
    var maxCount = null;

    if (startDateDisplayData && startDateDisplayData.getTime() > bufferDate.getTime() || endDateDisplayData && endDateDisplayData.getTime() < bufferDate.getTime()) {
      finalColor = noDisplayColor;
    } // If there is no match we set the default color
    else if (objMatch === undefined && bufferDate.getTime() >= startDateYesterday.getTime()) {
        finalColor = defaultColor;
      } else if (bufferDate.getTime() >= startDateYesterday.getTime()) {
        finalColor = colors.filter(function (c) {
          return c.count <= objMatch.count;
        });

        if (finalColor.length === 0) {
          finalColor = defaultColor;
        } else {
          finalColor = finalColor[finalColor.length - 1].color;
        }
      }

    var today = new Date(bufferDate.getTime()); // Finally, we push it to an Array that will be used by d3

    dataset.push({
      date: today,
      count: objMatch ? objMatch.count : maxCount || 0,
      color: finalColor,
      i: i
    });
    bufferDate.setDate(bufferDate.getDate() + 1);
  };

  for (var i = 0; i < nbDayDiff; i++) {
    _loop(i);
  }

  return dataset;
};

exports.generateD3Dataset = generateD3Dataset;