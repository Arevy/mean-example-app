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

function saveUser(newUser) {
    if (newUser == undefined) {
        throw new Error("No user object given");
    }

    let missingProp = [];
    if (newUser.firstname == null || newUser.firstname == undefined) {
        missingProp.push('firstname');
    }
    if (newUser.lastname == null || newUser.lastname == undefined) {
        missingProp.push('lastname');
    }
    if (newUser.username == null || newUser.username == undefined) {
        missingProp.push('username');
    }
    if (newUser.password == null || newUser.password == undefined) {
        missingProp.push('password');
    }
    if (missingProp.length > 0) {
        var message = "No ";
        for (var i = 0; i < missingProp.length; i++) {
            message += missingProp[i] + ',';
        }
        message += " found in user object";
        throw message;
    }

    const user = new User(newUser);
    user.save(function (err, savedUser) {
        if (err) {
            throw err;
        } else {
            console.log(savedUser + ' has been saved');
        }
    })
};

module.exports = {
    findUserById,
    saveUser
};