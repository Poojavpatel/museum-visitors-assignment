const moment = require('moment');
const axios = require('axios');
const CONFIG_CONSTANTS = require('../config/index');

const formatAttendanceData = (museumData = {}, ignore = '') => {
  const attendance = {
    month: museumData.month ? moment(museumData.month).format('MMM') : '',
    year:  museumData.month ? moment(museumData.month).format('YYYY') : '',
    higest: {visitors: 0},
    lowest: {visitors: Number.POSITIVE_INFINITY},
    total: 0
  };
  for(let museum in museumData){
    if(museum === 'month') continue;
    const museumVisitors = parseInt(museumData[museum] || 0);
    if(museum === ignore){
      attendance.ignored = {museum, visitors: museumVisitors}
      continue;
    }
    if(museumVisitors > attendance.higest.visitors) attendance.higest = {museum, visitors: museumVisitors};
    if(museumVisitors < attendance.lowest.visitors) attendance.lowest = {museum, visitors: museumVisitors};
    attendance.total += museumVisitors;
  }
  return attendance;
}

const getVistitorsSummary = async (req, res) => {  
  const {date, ignore} = req.query;
  if(!date){
    res.status(400).send({success: false, message: 'date field is required'});
    return false;
  }
  const formatted = moment(date, "x").format("YYYY-MM-DD");
  const response = await axios.get(`${CONFIG_CONSTANTS.url.museumEndpoint}?month=${formatted}`, {
    headers: { 
      'X-App-Token': CONFIG_CONSTANTS.token['X-App-Token']
    }
  });
  if(!(response.status === 200 && response.data?.length)){
    res.status(200).send({success: false, data: response.data, message: 'No Records found'});
    return false;
  }
  const attendance = formatAttendanceData(response.data[0], ignore)
  res.status(200).send({attendance});
}

module.exports = {
  getVistitorsSummary,
  formatAttendanceData
}