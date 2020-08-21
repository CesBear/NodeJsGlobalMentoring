import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './api/user/userRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', userRoutes);
app.listen(PORT, () => 
    console.log(`Server running on port: ${PORT}`)
);
