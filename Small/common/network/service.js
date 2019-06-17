const wxRequest = require('wxRequest.js');
const config = require("config.js");

/* 页面上使用实例
service.getBusInfoPromise("636路", "0").then(res => {
  return service.getBusStopListPromise(res.data.data.sid, res.data.data.stopType)
}).then(res => {
  console.log(res.data.rtnMsg);
});
*/


function getBusInfoPromise(busName, stopType) {
  var getBusInfoUrl = config.url.getBusInfo;
  var data = { "busName": busName, "stopType": stopType }
  return wxRequest.wxPromise("POST", getBusInfoUrl, data);
}

function getBusStopListPromise(sid, stopType) {
  var getStopListUrl = config.url.getBusStopList;
  var data = { "sid": sid, "stopType": stopType }
  return wxRequest.wxPromise("POST", getStopListUrl, data);
};