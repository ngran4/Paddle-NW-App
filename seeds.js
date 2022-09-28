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
    "location": "Trillium Lake Rd",
    "city": "Government Camp",
    "state": "Oregon",
    "coordinates": [45.26748089955289, -121.73836985979973]
  },
  {
    "name": "Willamette Park",
    "location": "6500 S Macadam Ave",
    "city": "Portland",
    "state": "Oregon",
    "coordinates": [45.477267247666695, -122.67068955875128]
  },
  {
    "name": "Lost Lake",
    "location": "9000 Lost Lake Rd",
    "city": "Hood River",
    "state": "Oregon",
    "coordinates": [45.496615746264915, -121.81837714303343]
  },
  {
    "name": "Frog Lake",
    "location": "Frog Lake Trail #530",
    "city": "Government",
    "state": "Oregon",
    "coordinates": [45.222743932556156, -121.69212115243987]
  },
  {
    "name": "Tualatin River - Browns Ferry PArk",
    "location": "5855 SW Nyberg Ln",
    "city": "Tualatin",
    "state": "Oregon",
    "coordinates": [45.38386168331337, -122.73798368013878]
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