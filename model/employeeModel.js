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
                employees.findByIdAndDelete(req).then(result => {
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
            const option = { new: true };
            return new Promise((resolve, reject) => {
                employees.findByIdAndUpdate(employeeId, req.body, option).then(data => {
                    resolve(data);
    
                }).catch((error) => {
                    reject(error);
                });
            });
        }
        catch(error) {
        next(error)
    }
}
}
module.exports = new employeeModel;