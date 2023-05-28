const jwt = require('jsonwebtoken');

const generateToken = userId => {
  return jwt.sign({id:userId} , 'secret', {
    expiresIn:'90d'
  });
};

module.exports=generateToken;