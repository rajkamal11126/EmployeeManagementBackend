const userModel = require('../model/model');

class userService {
    userRegistrationService = (req, next) => {
        try {
            return userModel.create(req).then((result) => {
                return ({ message: "user register successfully", data: result })
            }).catch(error => {
                return ({ message: "fail to register", error: error })
            });

        } catch (e) {
            next(e);
        }
    }
    allUserService = (req, next) => {
        try {
            return userModel.read().then((result) => {
                return ({ message: "user register successfully", data: result })
            }).catch(error => {
                return ({ message: "fail to register", error: error })
            });

        } catch (e) {
            next(e);
        }
    }

    userLoginService = (req, next) => {
        try {
            let loginData = {
                email: { "email": req.email },
                password: req.password
            };
            return userModel.userLogin(loginData).then((result) => {
                return ({ message: "User login successfully", data: result });
            }).catch(error => {
                return ({ message: "fail to Login", error: error });
            })
        } catch (e) {
            next(e);
        }
    }
}
module.exports = new userService();