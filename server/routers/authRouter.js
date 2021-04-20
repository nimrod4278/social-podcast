const express = require('express');
const router = express.Router();
const pool = require('../db');
const bcrypt = require('bcryptjs');

router.post('/signin', async (req, res) => {
    try {
        let { email, password } = req.body;
        pool.query(
            "SELECT * FROM users WHERE email = $1 AND password = $2;",
            [email, password],
            (err, result) => {
                if (err) {
                    throw err;
                } else {
                    res.json("login succeded");
                }
            }
        );
    } catch (error) {
        console.log(error.message);
    }
});

router.post('/signup', async (req, res) => {
    try {
        // SHOULD RECIEVE HASED PASSWORD
        // VALIDATION SHOULD BE MINIMAL - FRONT END VALIDATION
        let { name, email, password } = req.body;
        if (!name || !email || !password) {
            console.log("IMPLIMENT VALIDATION");
        }
        pool.query(
            "INSERT INTO users(name, email, password) VALUES ($1, $2, $3);",
            [name, email, password],
            (err, res) => {
                if (err) {
                    throw err;
                } else {
                    res.json("success signup");
                }
            }
        );
    } catch (error) {
        throw error;
    }
});

module.exports = router;