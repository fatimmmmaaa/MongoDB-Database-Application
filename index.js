import express from 'express';



import 'dotenv/config'
import mongoose from 'mongoose';


const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the root');
});

//404 error handler
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});