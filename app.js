const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');


app.use(bodyParser.json());

const postsRoute = require('./routes/posts.js');
const moviesRoute = require('./routes/movies.js');
const usersRoute = require('./routes/users.js');

app.use('/posts', postsRoute);
app.use('/movies', moviesRoute);
app.use('/users', usersRoute);


app.get('/', (req,res) => {
    res.send('We are home');
});





//Łączymy się z bazą danych
mongoose.connect(process.env.uri, ()=>{
    console.log('connected to DB');
});

app.listen(3000, () => console.log('Server started on port: http://localhost:3000/'));


