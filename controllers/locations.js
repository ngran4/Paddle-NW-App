const Location = require("../models/location");


module.exports = {
  getLocations,
}

async function getLocations(req, res, next) {
  try {
    const locations = await Location.find();


    return res.status(200).json({
      success: true,
      count: locations.length,
      data: locations
    })
  } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Server Error'})
  }
}