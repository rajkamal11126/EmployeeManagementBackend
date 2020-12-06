const mongoose = require('mongoose');
const Schema = mongoose.Schema
// const bcrypt = require('bcrypt');
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

let users = mongoose.model('users', userSchema);

class userModel {
    create(req, next) {
        try {
            return new Promise((resolve, reject) => {
                let userDetails = new users(req);
                userDetails.save().then(result => {
                    console.log(result);
                    resolve(result);
                }).catch(error => {
                    reject(error);
                });
            });

        } catch (error) {
            next(error);
        }
    }
    read(req, next) {
        try {
            return new Promise((resolve, reject) => {
                users.find().then(result => {
                    console.log(result);
                    resolve(result);
                }).catch(error => {
                    reject(error);
                });
            });

        } catch (error) {
            next(error);
        }
    }

    userLogin(req, next) {

        try {
            return new Promise((resolve, reject) => {
                users.findOne(req.email).then(data => {
                    console.log(req.password);
                    //bcrypt.compare(req.password, data.password).then((result) => {
                    if (req.password == data.password) {
                        resolve(data)
                    } else {
                        reject(error)
                    }
                }).catch(error => {
                    reject(error)
                });
            });
        } catch (error) {
            next(error);
        }

    }
}
module.exports = new userModel;