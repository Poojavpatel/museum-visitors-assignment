const axios = require('axios');
const CONFIG_CONSTANTS = require('../config/index');

const checkApiHealth = async (req, res) => {  
  const config = {
    method: 'get',
    url: `${CONFIG_CONSTANTS.url.museumEndpoint}?$limit=1`,
    headers: { 
      'X-App-Token': CONFIG_CONSTANTS.token['X-App-Token']
    }
  };
  
  try{
    const response = await axios(config);
    res.status(200).send({success: true, apiConnection: true, message: 'Successfully connected to Museum Visitors API'});
  } catch(e) {
    res.status(503).send({success: false, apiConnection: false, message: e?.response?.data?.message});
  }
}

module.exports = {
  checkApiHealth,
}