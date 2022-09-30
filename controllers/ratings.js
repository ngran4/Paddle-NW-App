const Location = require('../models/location');

module.exports = {
  create, 
  deleteRating
};

async function create(req, res){
  try {
    const location = await Location.findById(req.params.id);
    location.ratings.push({username: req.user.username, userId: req.user._id})
    await location.save()
    res.status(201).json({data: 'rating added'})
  } catch (err) {
    res.status(400).json({error: err})
  }
}

async function deleteRating(req, res){
  try {
      
      const location = await Location.findOne({'ratings._id': req.params.id, 'ratings.username': req.user.username});
      location.ratings.remove(req.params.id) 
      await location.save() // after you mutate a document you must save
      res.json({data: 'rating removed'})
  } catch(err){
      res.status(400).json({error: err})
  }
}