import jwt from 'jsonwebtoken';

export const checkToken = (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        let token = req.headers.authorization.split(' ')[1];
        try {
            jwt.verify(token, 'secretKey');
            next();
        } catch (er) {
            res.status(403).send('Invalid token');
        }
    } else {
        res.status(401).send('Unauthorized');
    } 
}