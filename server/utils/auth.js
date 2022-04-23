const jwt = require('json-web-token');

const secret = 'super-secret';
const expiration = '1h';

module.exports = {
    authMiddleware: function({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if(req.headers.authorization){
            token = token.split(' ').pop().trim();
        }

        if(!token) {
            return req;
        }
    }
}
