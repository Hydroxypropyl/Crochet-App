const User = require('../models/user-model')
const fs = require('fs')
const path = require('path')
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const saltRounds = 10; //Complexity of the hashing.
const secretKey = crypto.randomBytes(64).toString('hex'); // Generate a secret key

async function comparePasswords(plainPassword, hashedPassword) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(plainPassword, hashedPassword, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
  

// Check the credentials and return a token that is added to database.
login = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide credentials',
        })
    }

    //Check existence of username & retrieve the hashed passeword stored in database with his salt
    const user = await User.findOne({ username: req.body.data.username });

    let dbHash = "";
    if (!user) {
        return res.status(404).json({
            success: false,
            message: 'No user match the provided username!',
        }); 
    } else {
        dbHash = user.passwordHash;
    }

    // Compare the hashed password
    let loginSuccess;
    try {
        loginSuccess = await comparePasswords(req.body.data.password, dbHash);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Error when trying to compare the password! ${error}`,
        });
    }

    if (loginSuccess) {
        // Generate JWT token using the secret key
        const payload = {
            userId: user._id,
        };
        const token = jwt.sign(payload, secretKey, {});

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

register = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide credentials',
        })
    }

    const username = req.body.data.username;

    //Check if the user already exist.
    const user = await User.findOne({ username: username });
    if (user) {
        return res.status(409).json({
            success: false,
            message: 'A user with the same username already exists!',
        }); 
    }

    // Hash the provided password
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(req.body.data.password, salt);

    const newUser = new User({
        username: username,
        passwordHash: hash,
    });

    // Save the user to database
    try {
        await newUser.save();
        } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
        
    
    // Generate JWT token using the secret key
    const payload = {
        userId: newUser._id,
      };
    const token = jwt.sign(payload, secretKey, {});

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