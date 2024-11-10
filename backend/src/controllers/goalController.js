const Goal = require('../models/goalModel');

exports.createGoal = async (req, res) => {
    const { firstName, lastName , goals , baselineActivity , sex , dob , height, currentWeight,goalWeight } = req.body;
    try {
        const goal = new Goal({ firstName, lastName, goals, baselineActivity , sex, dob, height, currentWeight , goalWeight });
        
        await goal.save(); 
        res.status(201).json({ message: 'Goal created successfully', goal });  
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};
