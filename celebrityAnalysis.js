var AWS = require('aws-sdk');
var fs= require('fs');
AWS.config.loadFromPath('./config.json');
var rekognition = new AWS.Rekognition();

var bitmap = fs.readFileSync('saurav.jpg');
var buffer = new Buffer.from(bitmap, 'base64')
var params = {
    Image: { /* required */
      Bytes: buffer 
     
    },
    Attributes: [
     "ALL" 
    ]
  };
  rekognition.detectFaces(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     {
        // console.log(data);
        console.log('========================================')
        console.log(data.FaceDetails[0].Gender);
    }           // successful response
  });