const employeeService = require("../services/employeeService.js")
const { response, request } = require('express');
class EmployeeController {
    employeeRegistrationController = (req, res, next) => {
        try {
            employeeService.employeeRegistrationService(req.body).then(result => {
                response.success = true;
                response.message = result.message;
                response.data = result.data;
                return res.status(200).send(response);
            }).catch(err => {
                response.success = false;
                response.message = err.message;
                response.error = err.error;
                return res.status(400).send(response);
            });
        } catch (e) {
            next(e);
        }
    }
    employeeDeleteController = (req, res, next) => {
        try {
            employeeService.employeeDeleteService(req).then(result => {
                response.success = true;
                response.message = result.message;
                response.data = result.data;
                return res.status(200).send(response);
            }).catch(err => {
                response.success = false;
                response.message = err.message;
                response.error = err.error;
                return res.status(400).send(response);
            });
        } catch (e) {
            next(e);
        }
    }
    employeeUpdateController = (req, res, next) => {
        try {
            employeeService.employeeUpdateService(req).then(result => {
                response.success = true;
                response.message = result.message;
                response.data = result.data;
                return res.status(200).send(response);
            }).catch(err => {
                response.success = false;
                response.message = err.message;
                response.error = err.error;
                return res.status(400).send(response);
            });
        } catch (e) {
            next(e);
        }
    }
    employeeGetController = (req, res, next) => {
        try {
            employeeService.employeeGetService(req.body).then(result => {
                response.success = true;
                response.message = result.message;
                response.data = result.data;
                return res.status(200).send(response);
            }).catch(err => {
                response.success = false;
                response.message = err.message;
                response.error = err.error;
                return res.status(400).send(response);
            });
        } catch (e) {
            next(e);
        }
    }
}
module.exports = new EmployeeController();