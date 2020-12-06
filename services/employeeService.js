const employeeModel = require('../model/employeeModel.js');

class employeeService {
    employeeRegistrationService = (req, next) => {
        try {
            // console.log("hello");
            return employeeModel.create(req).then((result) => {
                return ({ message: "employee register successfully", data: result })
            }).catch(error => {
                return ({ message: "fail to register", error: error })
            });

        } catch (e) {
            next(e);
        }
    }
    employeeDeleteService = (req, next) => {
        try {
            return employeeModel.delete(req).then((result) => {
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
            return employeeModel.update(req).then((result) => {
                return ({ message: "employee record updated ", data: result })
            }).catch(error => {
                return ({ message: "fail to update", error: error })
            });

        } catch (e) {
            next(e);
        }
    }
 }
module.exports = new employeeService();