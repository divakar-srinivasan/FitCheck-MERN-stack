const express = require('express');
const router = express.Router();
const multer = require('multer');
const { createUser, signinUser } = require('./controllers/userController');
const { createEvent, getAllEvents } = require('./controllers/eventController');
const { createGoal } = require('./controllers/goalController')

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/login', signinUser); 
router.post('/signup', createUser); 
router.post('/add', upload.single('image'), createEvent);
router.get('/get', getAllEvents); 
router.post('/goals', createGoal );



module.exports = router;
