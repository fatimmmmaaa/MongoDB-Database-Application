import express from 'express';

import Anime from './models/anime.js';
import Jutsu from './models/jutsu.js';
import Villages from './models/villages.js';

import anime from './routes/anime.js';
// import village from './routes/village.js';



import 'dotenv/config'
import mongoose from 'mongoose';


const app = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(express.json());


//Routes
// app.use('/anime', animeRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the root');
});

//404 error handler
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});



//Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


