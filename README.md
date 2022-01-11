# museum-visitors-assignment

## To run the project 
Make sure node and npm are installed on machine
```bash
export API_TOKEN="yQLuRBGWgjyZ4oCHIRe2q2SAL" APP_ENV="dev"

npm i
npm start
# server will start on port 5000
```

## Endpoints 

### Check health of project
```
GET 'http://localhost:5000/health'
```
Response structure
```
{
  "success": true,
  "apiConnection": true,
  "message": "Successfully connected to Museum Visitors API"
}
```

### Get Visitors Data
```
GET 'http://localhost:5000/api/visitors?date=1404198000000&ignore=avila_adobe'
```

Response structure
```
{
  "attendance": {
    "month": "Jul",
    "year": "2014",
    "higest": {
      "museum": "america_tropical_interpretive_center",
      "visitors": 13490
    },
    "lowest": {
      "museum": "hellman_quon",
      "visitors": 120
    },
    "total": 28157,
    "ignored": {
      "museum": "avila_adobe",
      "visitors": 32378
    }
  }
}
```