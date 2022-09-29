const mongoose = require('mongoose');
const Location = require('./models/location');
require('dotenv').config();

mongoose.connect(
  process.env.DATABASE_URL

);

const db = mongoose.connection;

db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

const seedLocations = [
  {
    "name": "Trillium Lake",
    "address": "Trillium Lake Rd",
    "city": "Government Camp",
    "state": "Oregon",
    "location":{
      type: 'Point',
      coordinates: [-121.73836985979973, 45.26748089955289]
    } 
  },
  {
    "name": "Willamette Park",
    "address": "6500 S Macadam Ave",
    "city": "Portland",
    "state": "Oregon",
    "location":{
      type: 'Point',
      coordinates: [-122.67068955875128, 45.477267247666695]
    } 
  },
  {
    "name": "Lost Lake",
    "address": "9000 Lost Lake Rd",
    "city": "Hood River",
    "state": "Oregon",
    "location":{
      type: 'Point',
      coordinates: [-121.81837714303343, 45.496615746264915]
    } 
  },
  {
    "name": "Frog Lake",
    "address": "Frog Lake Trail #530",
    "city": "Government",
    "state": "Oregon",
    "location":{
      type: 'Point',
      coordinates: [-121.69212115243987, 45.222743932556156]
    } 
  },
  {
    "name": "Tualatin River - Browns Ferry PArk",
    "address": "5855 SW Nyberg Ln",
    "city": "Tualatin",
    "state": "Oregon",
    "location":{
      type: 'Point',
      coordinates: [-122.73798368013878, 45.38386168331337]
    } 
  },
]

const seedDB = async () => {
  await Location.deleteMany({});
  await Location.insertMany(seedLocations);
};

seedDB().then(() => {
  console.log('working')
  mongoose.connection.close;
})