const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Vehicle = require('../database-mongo/vehicle');
const Service = require('../database-mongo/service')

const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// Returns all vehicles
app.get('/vehicle', async (req, res) => {
  try {
    var results = await Vehicle.find();
    // console.log(results)
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Adds a vehicle to the db
app.post('/vehicle', async (req, res) => {
  try {
    var result = await Vehicle.create(req.body);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

