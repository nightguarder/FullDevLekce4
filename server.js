//Requirements
const express = require('express'); 
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

//Variables
const users = require('./data/users');
const verifyToken = require('./src/api/auth');
//not working const generateToken = require('./src/api/auth');
const db = { users: users };
const PORT = process.env.PORT || 3000;

//Express
const app = express()
app.use(bodyParser.json());
app.use(express.json());

app.get('/',(req, res) => {
    res.send('Public endpoint')
});

app.post('/login', (req, res) => {
    // Read username and password from request body
    const { username, password, role } = req.body;

    const users = db.users;

    // access user from db
    const user = users.find((item) => item.username === username);

    if (user) {
        const accessToken = generateToken(user.username, password, role);
        //correct credentials generate a token
        res.status(200).json({
            accessToken
        });
    }
    //invalid credentials
    else {
        res.status(404).send('Username or password incorrect');
    }
});
function generateToken(username, password, role) {
    // default payload
    const payload = {
      username: username,
      password: password,
      role: role
    };
  
    const token = jwt.sign(payload, process.env.SECRET_KEY);
  
    return token;
  }
// private route, only accessed with valid token!
app.get('/login/protected', verifyToken, (req, res) => {
    res.json({
      message: 'Nice! This is a protected endpoint',
      authData: req.authData
    });
  });


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});