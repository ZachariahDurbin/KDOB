const bcrypt = require('bcryptjs');

const createNewUser = (args) =>{
    console.log(args.password);
    const hashedPassword = bcrypt.hashSync(args.password); //Hash Password
    console.log(hashedPassword);
    console.log("Was the password made correctly? " + bcrypt.compareSync(args.password, hashedPassword) ? 'Yes' : 'No'); //Proving hash is correct
    return{
        name: args.name,
        email: args.email,
        password: hashedPassword,
    }
}

module.exports= {
    createNewUser
}