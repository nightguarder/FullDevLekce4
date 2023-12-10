// Middleware for JWT token verification
const jwt = require('jsonwebtoken');
//Fake db
//Use secret from .env
const dotenv = require('dotenv');
dotenv.config();

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    jwt.verify(req.token, process.env.SECRET_KEY, (err, authData) => {
      if(err) {
        res.sendStatus(403);
      } else {
        req.authData = authData;
        next();
      }
    });
  } else {
    res.sendStatus(403);
  }
};
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
module.exports = verifyToken;