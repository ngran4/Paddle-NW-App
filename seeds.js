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
    "cover": "https://www.flickr.com/photos/davidgn/4710700117/in/photolist-8bgz2x-8RMWrv-7isi23-6CX694-rbAAJ2-cz6gxS-2mKwKTe-oTDiFG-M7Nc7s-oDbw6J-8b63DY-J8jyeN-nDesJU-s88yhS-Y9SVw5-7w1kPP-28yPNth-8ayNbW-HKQMyY-MvR8Qf-aecTgv-7XyyG9-GwUJNz-6DjS7W-8PXV1V-5VoyEc-7ZEZM2-Ng1Vws-P82DwB-8psnpg-5vV1PY-peR3Q1-2h7bk7B-2h3XB18-7bLgoh-5RMULB-HnPtBY-MKnuZe-CnuCX5-2miCAjv-2m83RVf-2hP9Q3V-22e8VAU-ejmqKP-8SsvAV-dDPCDR-2j3Ynu7-2dBDeDa-Y7ddi1-pHvRgY" 
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
    "cover": "https://www.flickr.com/photos/victorvonsalza/19129749980/in/photolist-v9qYcw-t9JEhU-EJn1fi-oqB4N8-gYGErC-sk6a8R-dhUUdB-puMkLQ-73NU56-NXpsXo-BC43Ry-dQHPoE-usVqPE-N3xC1T-G61p5v-BEjahU-fAYPA7-v1DGKf-tbdUHw-2hq3UL3-5a6CKg-nEWyiS-fWstLi-vbWZ5S-Snk1Tu-2n2KBXq-USBApC-uLwDFr-ZRWDh8-gafCyU-wmb36e-nMxx86-fUVYk9-29YmePU-dSsNWr-2iEjrNs-opRJJn-2kFvjwi-WHmKmr-eUxzew-ovxRUE-oyEBEW-wiiAST-D1SR7T-2kEUYmf-81ztwJ-6waxvd-p8hzDs-v7aBVM-7DSYER" 
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
    "cover": "https://www.flickr.com/photos/svetim55/28039090554/in/photolist-JHHEKL-2nf3yPj-wPVPK3-2gKV66q-o8hvKy-GXwjZJ-JEPQZb-2kgHPC8-2goGZqM-21cpssC-2mL51AG-2igr93G-Vvjfpk-VfPtTX-2mYFu4P-2bUjfow-2h6naVk-wWMrP2-QnAtiA-HSwATy-CrSZxf-YfqRCY-2ncCaDV-L2Nsyr-25eVuh4-2jKeP8J-wybt2n-2jHxEza-KgSDpa-LGKrsG-rWuNiG-2kpHEcr-yBbofw-ejQYxE-fUgg9D-28gY2BY-ZGYE7N-2j1JPeL-8Lz824-HRRayu-VdNWx5-2nLwCPh-2nPhtEV-2cGUKPb-VMBZiX-MoYaXg-YfqRay-2kfXmEu-fpDS1C-XreV16/" 
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
    "cover": "https://www.flickr.com/photos/icetsarina/50763616421/in/photolist-2kkNNzT-9RYVAi-wSBCe7-96BCrA-6Qq5wL-78eDma-6LJDZ5-HBk4pj-HBk4oN-7w2xsD-ESY6EB-sevvwS-85DGqu-2n1y8CX-6LYJn3-H71u2a-2n1DsXV-8bT9zx-8uDjXL-sJnjLX-8fBsbm-8xtk1Y-85AxgZ-f1Yxzq-kJBpW-2gTQ5nD-uBNFgQ"
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
    "cover": "https://www.flickr.com/photos/brianrockwell/22860095275/in/photolist-AQ4XTH-2jnf2HF-2npQpMZ-2jF6eoC-2nLBo3X-2gtoXrt-2iUK4P8-2kLEaVh-2ntSU8t-2n74Jun-2mYXygB-2nMcscn-2k9aacB-2nLQyrj-2aHGczM-2igT9DZ-2kpctBu-26EEi3E-2kZyZ1K-2jDJcp7-zicgt6-2kyVKrJ-2kA1xUy-2itAWNv-2jvqKJr-VSUydb-2jWgKnT-2iAk29T-2ndheBJ-2jDmgVi-2m1hDex-Ryikt6-QPKfQX-2kQcwno-2g35M56-wwuz2-2mS1nmR-CzNoxW-At9faD-2gnWUcZ-2nuGPmj-2i3zPLp-25SdDE9-2nDfSSA-Vag2RQ-2kDfBQ7-2jx8KmP-2bngQrK-2kS3Rcf-2nLuhzP" 
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
    "cover": "https://www.flickr.com/photos/icetsarina/49994535822/in/photolist-2jaR4Hy-2g8p1BG-2jeKDfL-e6AcKp-21hEczS-2mBJCPC-2kJ1Bi2-2jwm69w-289x3S5-MsR1ev-2jbu1q8-2jymkzZ-2hgBq4s-2jmSjnK-2iGMZPt-2nA96MW-VdMfBS-NNm3hu-2jp6NQ9-2mAB6jQ-2jZWz88-2jLbcno-2jmxLE7-Mxmaoa-2bseoL9-2gM9zcn-2ixZbYX-EhbiZ-DR9KtC-2iFhFXS-24UxCbk-2kK1j4z-2nkwzWd-2nCDhif-2iNzNap-2ndn5iD-2m4L2ks-2hBqbzt-7zsVMK-U3ipSR-2mJDBJa-A4rLjS-2nhyw4x-21WU1gG-2k9sTZ2-KgGNMJ-2jsTkzC-2n1hfwC-2mKhkyJ-2mZP9VH"
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
    "cover": "https://www.flickr.com/photos/mikereidphotography/50754691788/in/photolist-2kk24AU-2h77HWg-ocxg3C-22EpjqU-vidPiD-2g7srcE-nu1htH-28VLZK5-23aFdBx-98wbPd-eWEnG6-2kbTwTU-vqwLJU-5ZPVc7-t2bYqH-2ew9De7-2mHuYPS-KSJivp-qu2WZr-2kuCiy3-2mV1oRP-2iY29o3-24o7SPq-stp5Hx-ewMUz7-e6KZcg-EShyq2-242seze-bp9wwx-2cjv7MK-cAKUJw-FZALYr-PJGHXJ-aR5FMZ-XQ1sTC-2e5bHSR-QD6KSN-2mkFwWD-2gQsWpe-NmxWdu-bp9x8K-Yq6QtY-2iNgG9Z-Qtw4rd-QWQgH-Kg7nqm-oqZ6Fb-22bw7o3-24ZPSy2-kmJNiD"
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
    "cover": "https://www.flickr.com/photos/bigbuckaroo/8793298332/in/photolist-ep2XeW-EDVTzK-bVg7Qa-XFMfAp-Wsg1Rp-6YTTY5-z38gGj-3oe8bj-F9BGfQ-6pyQbS-53w5Fh-bvRLkX-U6ZdJi-WJeFxu-THCFYw-fNTzAY-eLDuZF-fNTzsN-cQRnx3-54kT1G-6YPT6a-9BqPaU-bBaFpR-6YPSL6-he7C3g-daKUo-29EgCem-KRX4bb-NNb9YL-ayNjVw-2nosQkS-5wihrE-ayKDMT-hSEfwB-85QKQG-6qibKx-ju22T-XYpEjq-jMXhh-Hx1Uje-2MCGDF-2qoPKg-27wqMuC-2ahdnc4-27wqGNU-6YPSmF-cPTRkm-yFjvJZ-6AdanP-bPwVhi"
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