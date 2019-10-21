const User = require('../../models/').C_USER;
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function login(req, res, next) {
    User.findOne({
        where: {
            login: req.body.email
        }
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.hash_pwd)) {
                    console.log("PASSSSSWORDD MAATTCCHHEDD")
                    res.status(200).json({
                        status: 200,
                        message: 'User Sign In Successfull'
                    })
                    // let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    //     expiresIn: 1440
                    // })
                    // res.send(token)
                } else {
                    console.log("PASSSSSWORD DIDN'T MATCH")
                    res.status(400).json({error: 'Password is Incorrect', message: 'Password is Incorrect'})
                }
            } else {
                res.status(400).json({ error: 'User does not exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
}

module.exports = {
    login
}
