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
    },
    "cover": "https://thegorgeguide.com/wp-content/uploads/2020/07/Trillim-Lake.jpg" 
  },
  {
    "name": "Willamette Park",
    "address": "6500 S Macadam Ave",
    "city": "Portland",
    "state": "Oregon",
    "location":{
      type: 'Point',
      coordinates: [-122.67068955875128, 45.477267247666695]
    },
    "cover": "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_521,q_75,w_800/v1/clients/lanecounty/222_3_11573_jpeg_42befc27-cdab-4869-8c64-8ee6afc5b0e6.jpg" 
  },
  {
    "name": "Lost Lake",
    "address": "9000 Lost Lake Rd",
    "city": "Hood River",
    "state": "Oregon",
    "location":{
      type: 'Point',
      coordinates: [-121.81837714303343, 45.496615746264915]
    },
    "cover": "https://www.gorgeflyshop.com/store/pc/catalog/lostlakegfs1_1218_large.jpg" 
  },
  {
    "name": "Frog Lake",
    "address": "Frog Lake Trail #530",
    "city": "Government",
    "state": "Oregon",
    "location":{
      type: 'Point',
      coordinates: [-121.69212115243987, 45.222743932556156]
    },
    "cover": "https://www.oregonhikers.org/w/images/thumb/f/f2/FrogLake1.jpg/400px-FrogLake1.jpg"
  },
  {
    "name": "Tualatin River - Browns Ferry Park",
    "address": "5855 SW Nyberg Ln",
    "city": "Tualatin",
    "state": "Oregon",
    "location":{
      type: 'Point',
      coordinates: [-122.73798368013878, 45.38386168331337]
    },
    "cover": "https://havanatimes.org/wp-content/uploads/2020/09/23-9-Oregon-800x600.jpg" 
  },
  {
    "name": "Deschutes River - Harper Bridge",
    "address": "Spring River Rd",
    "city": "Bend",
    "state": "Oregon",
    "location":{
      type: 'Point',
      coordinates: [-121.45209697696338, 43.863246933466996]
    },
    "cover": "https://i.pinimg.com/736x/8e/6a/28/8e6a289c1e5b1061a43e82f8a4736c27.jpg"
  },
  {
    "name": "Lake Union",
    "address": "2301 N Northlake Way",
    "city": "Seattle",
    "state": "Washington",
    "location":{
      type: 'Point',
      coordinates: [-122.33076668335052, 47.65031834612145]
    },
    "cover": "https://www.kayakhelp.com/wp-content/uploads/2021/11/word-image-83.jpeg"
  },
  {
    "name": "Waterfront Park",
    "address": "650 Portway Ave",
    "city": "Hood River",
    "state": "Oregon",
    "location":{
      type: 'Point',
      coordinates: [-121.51802897831767, 45.71674601246148]
    },
    "cover": "https://www.hrvacations.com/wp-content/uploads/2018/06/columbia-river-1721556_1280.jpg"
  },
  {
    "name": "Lake Washington",
    "address": "5100 NE 93rd St",
    "city": "Seattle",
    "state": "Washington",
    "location":{
      type: 'Point',
      coordinates: [-122.2720627380392, 47.696092722928064]
    },
    "cover": "https://cdn.shopify.com/s/files/1/2978/5848/files/Paddle_board_seattle_-_lake_washington_north.png?v=1598325173"
  },
  {
    "name": "Lake Merwin",
    "address": "Cresap Bay Rd",
    "city": "Ariel",
    "state": "Washington",
    "location":{
      type: 'Point',
      coordinates: [-122.38426228088815, 45.96864495257864]
    },
    "cover": "https://i.pinimg.com/originals/36/66/b5/3666b5c76dadbf172db893551a8c5360.jpg"
  },
  {
    "name": "Little Crater Lake",
    "address": "Champion Way",
    "city": "Sandy",
    "state": "Oregon",
    "location":{
      type: 'Point',
      coordinates: [-121.75090506446604, 45.14833704986388]
    },
    "cover": "https://thedyrt.imgix.net/photo/725186/media/oregon-little-crater-lake-campground_428186eb-ae2e-40a1-bb96-66755369bd4c.jpg"
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