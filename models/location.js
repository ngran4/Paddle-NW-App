const mongoose = require('mongoose');


const photoSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  photoUrl: String,
})

const mapItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a location'],
    unique: true,
    maxlength: [75],
  },
  address: {
    type: string,
    required: [true, 'Please add an address']
  },
  location: {
    type: {
      type: String, 
      enum: ['Point'],
    },
    coordinates: {
      type: [Number], 
      index: '2dsphere' // supports queries that calculate geometries on an earth-like sphere 
    }, 
    formattedAddress: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  photos: [photoSchema]
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

