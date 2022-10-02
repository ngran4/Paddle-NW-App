const mongoose = require('mongoose');


const photoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  photoUrl: String,
})

const ratingSchema = new mongoose.Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId }
})

const mapItemSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  address: {
    type: String,
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  location: {
    type: {type: String, default: 'Point'},
    // Default value is needed. Mongoose pass an empty array to
    // array type by default, but it will fail MongoDB's pre-save
    // validation.
    coordinates: {type: [Number], default: [0, 0]}
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  cover: String,
  photoUrl: [photoSchema],
  ratings: [ratingSchema] 
});

const MapItem = mongoose.model('MapItem', mapItemSchema);

module.exports = MapItem;