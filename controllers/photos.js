const Location = require("../models/location");

const S3 = require("aws-sdk/clients/s3");
const s3 = new S3(); // initate the S3 constructor which can talk to aws/s3 our bucket!
// import uuid to help generate random names
const { v4: uuidv4 } = require("uuid");
// since we are sharing code, when you pull you don't want to have to edit the
// the bucket name, thats why we're using an environment variable
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;

module.exports = {
  create,
};

function create(req, res){
  console.log(req.file, req.user, 'create function photos');
  const key = `paddleNW/locations/${uuidv4()}-${req.file.originalname}`;
  const params = { Bucket: BUCKET_NAME, Key: key, Body: req.file.buffer };

  s3.upload(params, async function (err, data) {
    console.log("=======================");
    console.log(err, " err from aws");
    console.log("=======================");
    if (err) return res.status(400).json({ err: "Check Terminal error with AWS" });


    try {
      // Using our model to create a document in the posts collection in mongodb
      const location = await Location.findById(req.params.id);
      location.photos.push({ userId: req.user._id, photoUrl: data.Location});
      await location.save()
      res.status(201).json({data: 'photo added'})

    } catch (err) {
      res.status(400).json({ err });
    }
  });
}

