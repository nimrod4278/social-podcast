const express = require('express');
const router = express.Router();
const pool = require('../db');
const bcrypt = require('bcryptjs');

router.post('/login', (req, res) => {
    try {

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

        // let salt = bcrypt.genSaltSync(10);
        // let temp = await bcrypt.hash(password, salt);
        // await bcrypt.hash(password, salt, (err, hash) => {
        //     if (err) {
        //         throw err;
        //     }
        //     //savepassword to DB
        // });
        console.log({
            name, password, email
        })

        res.json("success");
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;