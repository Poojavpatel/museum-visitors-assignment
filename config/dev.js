const devConfig = {
  url: {
    museumEndpoint : 'https://data.lacity.org/resource/trxm-jn3c.json'
  },
  token: {
    'X-App-Token': process.env.API_TOKEN
  }
}

module.exports = devConfig;