const jwt = require('jsonwebtoken')
const SECRET = "admin_password"

//Data která jsou public, nesmí obsahovat secret
const payload = {
    email: "user@email.com", id: "5", role: "admin"
}

//Token s expiraci, prilozen ke zprave
const token = jwt.sign(payload,SECRET,{expiresIn:"1h"})
console.log("Generated token:",token)

const decoded = jwt.verify(token,SECRET)

console.log(decoded)