require('dotenv').config();
const express = require('express');
const healthRouter = require('./routes/healthRouter');
const imageRouter = require("./routes/imageRouter");
const pool = require('./config/db');
const app = express();

app.use(express.json());
app.use('/api/health', healthRouter);
app.use('/api/images', imageRouter);

pool.connect()
.then(() => {
    console.log('Connected to the database successfully.');
})
.catch((err) => {
    console.error('Database connection error:', err);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})