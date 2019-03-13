const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors'); 
const path = require('path');
const route = require('./routes/route');


const app = express();

//connect to mongoDB
mongoose.connect('mongodb://localhost:27017/contactlist');

mongoose.connection.on('connected', (err)=>{

    if(err) console.log('error to connect mongo');
    else console.log("Connected to mongodb at 27017");
})

//port
const port = 3000;

//use middlewares cors
app.use(cors()); 

//use middlewares body-parser
app.use(bodyparser.json());

//use middlewares routes
app.use('/api', route);

//static files or views
app.use(express.static(path.join(__dirname, 'views')));

//testing server
// app.get('/', (req,res)=>{
//     res.send('Welcome');
// });


app.listen(port, ()=>{
  console.log('Server started at port: ' + port);  
});