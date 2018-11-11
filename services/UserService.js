const User = require('../models/User');

function findUserById(userId) {
    User.findById(userId, (err, user) => {
        if (err) {
            return console.error(err);
        } else {
            return user;
        }
    });
}

module.exports = {
    findUserById
};