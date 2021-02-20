
const { Vehicle, Service} = require('./index.js');

(async () => {
  const v = new Vehicle({
    make: 'Kwa',
    model: 'asdf',
    year: 1234,
    nick_name: 'dasd',
    vin: 'string'
  })
  await v.save();
  var vehicle = await Vehicle.find();
  console.log(vehicle)
})();