const express = require("express");
const router = express.Router();
const userController = require("../controller/controller");
const employeeController = require("../controller/employeecontroller")
router.post("/user/registration", userController.userRegistrationController);
router.post("/user/login", userController.userLoginController )
router.get("/user/getAllUsers", userController.allUserController);

router.post('/employee/addEmployee',employeeController.employeeRegistrationController);
router.delete('/employee/delete/:id',employeeController.employeeDeleteController);
router.put('/employee/update/:id',employeeController.employeeUpdateController);
router.get('/employee/getAllData', employeeController.employeeGetController)
module.exports = router;