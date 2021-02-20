const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Vehicle = require('../database-mongo/vehicle');
const Service = require('../database-mongo/service');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// Returns all vehicles
app.get('/vehicle', async (req, res) => {
  try {
    var results = await Vehicle.find();
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Adds a vehicle to the db
app.post('/vehicle', async (req, res) => {
  try {
    var result = await Vehicle.create(req.body.vehicle);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
})

// Get list of services for a specific vehicle
app.get('/service', async (req, res) => {
  try {
    var results = await Service.find({vehicleId: req.query.ID});
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Add a service to a vehicle's record
app.post('/service', async (req, res) => {
  try {
    var result = await Service.create(req.body.service);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
})


app.listen(process.env.PORT || PORT, function() {
  console.log(`listening on port ${PORT}!`);
});

