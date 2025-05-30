import express from 'express';
import dotenv from 'dotenv';

import { connectDB } from './lib/db.js'
import postRoutes from './routes/postRoutes.js';
import commentRoutes from './routes/commentRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/posts',postRoutes);
app.use('/posts/:id/comments',commentRoutes);

app.listen(PORT,()=>{
    console.log(`server is running on port:${PORT}`);
    connectDB();
})
