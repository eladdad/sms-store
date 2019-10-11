const express = require('express');
const mongoose = require('mongoose');

const Message = require('./models/Message');

const app = express();
app.use(express.json());

const server = require('http').Server(app);

const port = process.env.PORT || 3000;
const dbUri = process.env.DB_URI;


// Connect to db
mongoose.connect(dbUri, {
  useCreateIndex: true,
  useNewUrlParser: true
});


app.post('/', (req, res) => {
    
  if(!req.body.originator || !req.body.payload) {
    console.log('missing fields');
    res.status(400).send();
  }
  else {
    var newMessage = new Message();

    newMessage.sender = req.body.originator;
    newMessage.payload = req.body.payload;

    newMessage.save(err => {
      if(err) {
        console.log('error saving to db');
        console.log(err);
        res.status(500).send();
      }
      else {
        console.log('msg saved to db');
        res.status(200).send();
      }
    });
  }
});


// Start server
server.listen(port,function(){
    console.log(`app listening on port ${port}`);
});