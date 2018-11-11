const express = require('express');
const router = express.Router();
const UserService = require('../services/UserService');

// route to show a message (GET http://localhost:8080/api/users)
router.get('/', function(req, res) {
    res.json({ message: 'User API Works' });
});