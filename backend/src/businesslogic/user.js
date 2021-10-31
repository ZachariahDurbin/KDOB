const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Setting up Environment Variables...
const dotenv = require('dotenv');
dotenv.config();
const { JWT_SECRET } = process.env;

const createNewUser = (args) =>{
    const hashedPassword = bcrypt.hashSync(args.password); //Hash Password
    console.log('Was the password made correctly? ' + (bcrypt.compareSync(args.password, hashedPassword) ? 'Yes' : 'No')); //Proving hash is correct
    return{
        name: args.name,
        email: args.email,
        password: hashedPassword,
        jwtToken: null,
    }
}


const getToken = (id) => jwt.sign({ id }, JWT_SECRET, { expiresIn: '30 days' });

const getUserFromToken = async (token) => {
  if(!token) return null;

  const tokenData = jwt.verify(token, JWT_SECRET); 
  if(!tokenData?.id) return null;
  else return tokenData.id;
}
module.exports= {
    createNewUser,
    getToken,
    getUserFromToken
}