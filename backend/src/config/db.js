const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const DB = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('Connected successfully to the database');
        })
        .catch(err => {
            console.error('Error connecting to the database:', err);
        });
}

module.exports = DB;
