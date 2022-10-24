// imports
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import dbConfig from './config/db.js';
import todoRoute from './routes/todos.js';

// app config
const app = express();
const port = process.env.PORT || 5000;
dotenv.config();

// middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// db config
dbConfig();

// app endpoints
app.use('/todos', todoRoute);

// app listener

app.listen(port, () => console.log(`Listening on port ${port}`));
