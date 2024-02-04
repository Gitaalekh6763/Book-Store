import express, { response } from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose';
import {Book} from './models/bookModels.js';
import bookRoutes from './routes/bookRoutes.js';
import cors from 'cors';
const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS POLICY
//Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
//options 2: Alow custom origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         llowHeaders: ['Content-Type'],
//     })
// );

app.get('/', (request,response)=>{
    console.log(request)
    return response.status(234).send('welcome to book store')
});


app.use('/books', bookRoutes);


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("connected to MongoDB");
        app.listen(PORT, ()=>{
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error)=> {
        console.log(error);
    });