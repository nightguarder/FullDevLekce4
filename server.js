const express = require('express'); 
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express()
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});