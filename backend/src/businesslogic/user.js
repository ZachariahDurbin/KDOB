const bcrypt = require('bcryptjs');

const createNewUser = (args) =>{
    const hashedPassword = bcrypt.hashSync(args.password); //Hash Password
    console.log('Was the password made correctly? ' + (bcrypt.compareSync(args.password, hashedPassword) ? 'Yes' : 'No')); //Proving hash is correct
    return{
        name: args.name,
        email: args.email,
        password: hashedPassword,
        jwtToken: jwt.sign(),
    }
}

module.exports= {
    createNewUser
}