const express = require('express');
const router = express.Router();
const pool = require('../db');

// TODO - ADD Logging to all endpoints

// create a record
router.post('/', async (req, res) => {
    const { user_id, name, description, record } = req.body;
    try {
        const newRecord = await pool.query(
            "INSRET INTO records (user_id, name, description) VALUES($1, $2, $3) RETURNING *",
            [user_id, name, description]
        );

        //TODO - SAVE RECORD TO S3

        res.json(newRecord.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
});

// get all records
router.get('/', async (req, res) => {
    try {
        const allRecords = await pool.query(
            "SELECT * FROM records",
        );
        console.log(`[SUCCESS] - DATABASE - get all records`);
        
        //TODO - get records from s3

        res.json(allRecords);
    } catch (error) {
        console.log(`[FAILURE] - DATABASE - get all records`);
        console.log(error.message);
    }
});

// get a category
router.get('/category/:categoryName/value/:value', async (req, res) => {
    try {
        const {categoryName, value} = req.params;
        const categoryRecords = await pool.query(
            'SELECT * FROM records WHERE $1 = $2',
            [categoryName, value]
        );
    } catch (error) {
        console.log(`[FAILURE] - DATABASE - get record category ${categoryName}`);
        console.log(error.message);
    }
});

// get a record
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const record = await pool.query(
            "SELECT * FROM records WHERE record_id = $1",
            [id]
        );
        console.log(`[SUCCESS] - DATABASE - get record ${id}`);
        res.json(record);
    } catch (error) {
        console.log(`[FAILURE] - DATABASE - get record ${id}`);
        console.log(error.message);
    }
});

// update a record
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { column, col_value } = req.body;
        const updatedRecord = await pool.query(
            "UPDATE records SET $1 = $2 WHERE record_id = $3",
            [column, col_value, id]
        );
        console.log(`[SUCCESS] - DATABASE - update record ${id}`);
        res.json(updatedRecord);
    } catch (error) {
        console.log(`[FAILURE] - DATABASE - update record ${id}`);
        console.log(error.message);
    }
});

module.exports = router;