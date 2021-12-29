const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 3000;
const DB = 'mongodb+srv://suraj:suraj@cluster0.trmkt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(DB,{
  useCreateIndex:true,
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useFindAndModify:false
}).then(()=>{
  console.log("database connection established");
})
.catch((e)=>{
  console.log(e);
})

const middleware = (req,res,next) => {
  console.log("Hello from middleware");
  next();
}

app.get('/', (req, res) => {
  res.send("home page");
});

app.get('/about',middleware, (req, res) => {
  res.send("about page");
});

app.get('/service', (req, res) => {
  res.send("home page");
});

app.get('/contact', (req, res) => {
  res.send("home page");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
