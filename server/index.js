const express = require("express");
const cors = require('cors');

require('dotenv').config();

const recordsRouter = require('./routers/recordsRouter');
const authRouter = require('./routers/authRouter');

// ENV VARS
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// INIT
const app = express();
const port = process.env.PORT || 5000;
const HOST = process.env.HOST || "http://localhost";

// MIDDLEWARE
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// ROUTES
app.use('/records', recordsRouter);
app.use('/auth', authRouter);



// ON LISTEN
app.listen(port, () => {
  console.log(`app listening at ${HOST}:${port}`)
});