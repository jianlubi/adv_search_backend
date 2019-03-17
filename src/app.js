import express from 'express';
import router from './routers/index'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();


// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const PORT = 8000;

const mongoDB = process.env.MONGODB_URI || 'mongodb+srv://bruce:q1w2e3@cluster0-vamiu.mongodb.net/test?retryWrites=true';
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

const db  = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`)
})