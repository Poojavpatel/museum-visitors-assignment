const express = require('express');
const health = require('./routes/health.js');
const routes = require('./routes/index');

const app = express();
app.use(express.json());

// routes
app.get('/' ,(req,res) => {
  res.status(200).send({success: true, data: 'Hello World'})
});
app.use('/health' , health);
app.use('/api' , routes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started at port ${port}`));

module.exports = app;