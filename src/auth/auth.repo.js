require('dotenv').config();
const {User} = require('../database/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userLogin = async ({ email, password}) => {
    const userFind = await User.findOne({
        where: {email}, raw:true
    })
    if (!userFind) {return res.status(404).send('User not Found')}
    const hashedPassword = await bcrypt.compare(password,userFind.password);
    if(hashedPassword){
        //generate token
        const token = await jwt.sign(
            {
                id: userFind.id,
                fullname: userFind.fullname,
                email: userFind.email
            },
            process.env.JWT_SECRET_TOKEN);
        return ({ accessToken: token })
    } else {
        return res.status(400).send('Login Failed')
    }
    
}

const authRepo = {
    userLogin,
}

module.exports = authRepo;