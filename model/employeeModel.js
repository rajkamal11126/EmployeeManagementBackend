const mongoose = require('mongoose');
const Schema = mongoose.Schema
const employeeSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    }
});

let employees = mongoose.model('employees', employeeSchema);

class employeeModel {

    create = (req, next) => {
        try {
            return new Promise((resolve, reject) => {
                let employeeDetails = new employees(req);
                employeeDetails.save().then(result => {
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
    read = (req, next) => {
        try {
            return new Promise((resolve, reject) => {
                employees.find().then(result => {
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

    delete = (req, next) => {
        try {
            return new Promise((resolve, reject) => {
                employees.findOneAndDelete(req).then(result => {
                    resolve(result);
                }).catch(error => {
                    reject(error);
                });
            });
        } catch (error) {
            next(error)
        }
    }
    update = (req, employeeId) => {
        try {
            console.log(employeeId);
            const option = { new: true };
            return new Promise((resolve, reject) => {
                employees.findOneAndUpdate({ email: 'rajkamal1126@gmail.com' }, { email: 'rajkamal@gmail.com' }, option).then(data => {
                    resolve(data);
                    console.log(data);

                }).catch((error) => {
                    reject(error);
                });
            });
        } catch (error) {
            return { message: "Error in Model", error: error };
        }
    }
}
module.exports = new employeeModel;