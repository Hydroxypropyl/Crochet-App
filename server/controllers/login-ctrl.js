const User = require('../models/user-model')
const fs = require('fs')
const path = require('path')

// Check the credentials and return a token that is added to database.
login = (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide credentials',
        })
    }

    // TODO Check credential & generate token
    console.log(req.body)
    return res.status(200).json({
        success: true,
        token: "1234",
        message: 'Successful login!',
    });
};

register = (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide credentials',
        })
    }

    // TODO Create the user in database & generate token.
    console.log(req.body)
    return res.status(200).json({
        success: true,
        token: "1234",
        message: 'Successful registering!',
    });
};


module.exports = {
    login,
    register,
}