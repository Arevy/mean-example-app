const express = require('express');
const router = express.Router();
const UserService = require('../services/UserService');

// route to show a message (GET http://localhost:8080/api/users)
router.get('/', function (req, res) {
    res.json({
        message: 'User API Works'
    });
});

router.post('/register', function (req, res) {
    try {
        UserService.saveUser(req.body.user);
        res.json({
            message: "User has been saved"
        });
    } catch (error) {
        res.status(400);
        res.json({
            error: error.message
        });
    }
});

module.exports = router;