const express = require("express");
const router = express.Router();
const userController = require("../controller/controller");
const employeeController = require("../controller/employeecontroller")
router.post("/user/registration", userController.userRegistrationController);
router.post("/user/login", userController.userLoginController )
router.get("/user/getAllUsers", userController.allUserController);
router.post('/employee/registration',employeeController.employeeRegistrationController);
router.post('/employee/delete',employeeController.employeeDeleteController);
router.post('/employee/update',employeeController.employeeUpdateController);
module.exports = router;