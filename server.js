const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const server = require('http').Server(app);

console.log(process.env);

const port = process.env.PORT || 3000;
const dbUri = process.env.DB_URI;


// Connect to db
mongoose.connect(dbUri, {
  useCreateIndex: true,
  useNewUrlParser: true
});


app.post('/', (req, res) => {
    console.log(req.body);

    res.status(200).send();
});


// Start server
server.listen(port,function(){
    console.log(`app listening on port ${port}`);
});