const User = require('../models/user-model')
const fs = require('fs')
const path = require('path')
const bcrypt = require ('bcrypt');

const saltRounds = 10; //Complexity of the hashing

// Check the credentials and return a token that is added to database.
login = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide credentials',
        })
    }

    //TODO: Check existence of username & retrieve the hashed passeword stored in database
    const db_hashedPassword = "1234";

    // Check if hashed password match each other
    let login_sucess = false;
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.data.password, salt, function(err, hash) {
            bcrypt.compare(db_hashedPassword, hash, function(err, result) {
                login_sucess = result;
            });
              
         });
      });
      
      if (login_sucess) {
        //TODO Generate token
        const token = "1234"
        return res.status(200).json({
            success: true,
            token: token,
            message: 'Successful login!',
        });
      } else {
        return res.status(401).json({
            success: false,
            message: 'Invalid password!',
        });
      }


};

register = (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide credentials',
        })
    }

    const username = req.body.data.username;
    //TODO: Check if the user already exist.

    // Hash the provided password
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.data.password, salt, function(err, hash) {
            const newUser = new User({
                username: username,
                passwordHash: hash,
            });

            console.log(newUser);
            //TODO: Push the new User to database
        });
    });

    //TODO: Generate token and push the token to database
    const token = "1234";

    return res.status(200).json({
        success: true,
        token: token,
        message: 'Successful registering!',
    });
};


module.exports = {
    login,
    register,
}