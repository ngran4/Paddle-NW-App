const mongoose = require('mongoose');

const mapItemSchema = new mongoose.Schema({
  name: String,
  location: {
    type: {type: String, default: 'Point'},
    coordinates: {type: [Number], default: [0, 0]}
  }

});

const MapItem = mongoose.model('MapItem', mapItemSchema);

module.exports = MapItem;

// const mapItemSchema = new mongoose.Schema({
//   name: String,
//   location: {
//     type: {type: String, default: 'Point'},
//     coordinates: {type: [Number], default: [0, 0]}
//   },
//   accessibility: String,
//   photoUrl: String,
// });