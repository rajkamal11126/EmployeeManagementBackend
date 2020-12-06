const userService = require("../services/service.js")
// const response = {};
const { response, request } = require('express');
// const service = require("../services/service.js");
class UserController {
  userRegistrationController = (req, res, next) => {
    try {
      userService.userRegistrationService(req.body).then(result => {
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

  allUserController = (req, res) => {
    try {
      console.log("hello");
      let request = {}
      userService.allUserService().then(result => {
        request.success = true;
        request.message = result.message;
        request.data = result.data;
        return res.status(200).send(request);
      }).catch(err => {
        request.success = false;
        request.message = err.message;
        request.error = err.error;
        return res.status(400).send(request);
      });
    } catch (e) {
      next(e);
    }
  }

  userLoginController = (req, res, next) => {
    try {
      service.userLoginService(req.body).then(result => {
        response.success = true;
        response.message = result.message;
        response.data = result.data;
        return res.status(200).send(response);
      }).catch(err => {
        response.success = false;
        response.message = err.message;
        response.data = err.error;
        return res.status(400).send(response);
      });
    } catch(e){
      next(e);
    }
  }
}
module.exports = new UserController();

