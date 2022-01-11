const devConfig = {
  url: {
    museumEndpoint : 'https://data.lacity.org/resource/trxm-jn3c.json'
  },
  token: {
    'X-App-Token': 'yQLuRBGWgjyZ4oCHIRe2q2SAL'
    // 'X-App-Token': process.env.apiToken     // use env variables after deployment
  }
}

module.exports = devConfig;