const express = require('express');
const cors = require('cors'); 
const DB = require('./src/config/db');
const userRoutes = require('./src/routes');
require('dotenv').config();

const app = express();
DB();

app.use(cors()); 
app.use(express.json());

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
