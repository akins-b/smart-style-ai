require('dotenv').config();
const express = require('express');
const healthRouter = require('./routes/healthRouter');
const app = express();

app.use(express.json());
app.use('/api/health', healthRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})