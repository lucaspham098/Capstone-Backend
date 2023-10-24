const jwt = require('jsonwebtoken');
const jsonSECRETKEY = process.env.jsonSECRETKEY;

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).send('Not authenticated. Please login');
    }

    if (req.method === 'DELETE' && !req.body) {
        jwt.verify(token, jsonSECRETKEY, (err, user) => {
            if (err) {
                return res.status(403).send('Not authorized');
            }
            req.user = user;
            next();
        });
    }

    // if (req.method === 'DELETE' && !req.body) {
    jwt.verify(token, jsonSECRETKEY, (err, user) => {
        if (err) {
            return res.status(403).send('Not authorized');
        }
        req.user = user;
        next();
    });
    // } else {
    //     next()
    // }

};

module.exports = { authenticateToken };