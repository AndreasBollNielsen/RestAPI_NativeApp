const express = require('express');
const app = express();
const cors = require('cors');
const handler = require('./handler');

const port = 3600;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//use handler for api calls
app.use('/api', handler);




//output port listener
app.listen(port,'0.0.0.0', () => { console.log(`port is listening ${port}`) });