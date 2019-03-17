import express from 'express';
import router from './routers/index'
import bodyParser from 'body-parser';


const app = express();


// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const PORT = 8000;

app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`)
})