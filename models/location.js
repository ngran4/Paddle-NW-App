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
  photoUrl: [photoSchema],
  ratings: [ratingSchema] 
});

const MapItem = mongoose.model('MapItem', mapItemSchema);

module.exports = MapItem;


// const mapItemSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'Please add a location'],
//     unique: true,
//     maxlength: [75],
//   },
//   // address: {
//   //   type: string,
//   //   required: [true, 'Please add an address']
//   // },
//   location: {
//     type: {
//       type: String, 
//       enum: ['Point'],
//     },
//     coordinates: {
//       type: [Number], 
//       index: '2dsphere' // supports queries that calculate geometries on an earth-like sphere 
//     }, 
//     formattedAddress: String
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   },
//   photos: [photoSchema]
// });
