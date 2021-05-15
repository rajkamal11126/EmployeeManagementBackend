const employeeModel = require('../model/employeeModel.js');

class employeeService {
    employeeRegistrationService = (req, next) => {
        try {
            return employeeModel.create(req).then((result) => {
                return ({ message: "employee record added successfully", data: result })
            }).catch(error => {
                return ({ message: "fail to register", error: error })
            });

        } catch (e) {
            next(e);
        }
    }
    employeeDeleteService = (req, next) => {
        try {
            return employeeModel.delete(req.params.id).then((result) => {
                return ({ message: "employee record deleted ", data: result })
            }).catch(error => {
                return ({ message: "fail to delete", error: error })
            });

        } catch (e) {
            next(e);
        }
    }
    employeeUpdateService = (req, next) => {
        try {
            let _id = { _id: req.params.id }
            return employeeModel.update(req, _id).then((result) => {
                return ({ message: "Update successful", data: result });
            }).catch(error => {
                return ({ message: "No record found", eroor: error });
            })
        } catch (e) {
            next(e);
        }
    }
    employeeGetService = (req, next) => {
        try {
            return employeeModel.read(req).then((result) => {
                return ({ message: "employee get successfully", data: result })
            }).catch(error => {
                return ({ message: "fail to get data", error: error })
            });

        } catch (e) {
            next(e);
        }
    }
}
module.exports = new employeeService();