const httpStatus = require("http-status");

const service = require("./auth.service");

/**
 * Returns jwt token if registration was successful
 * @public
 */
exports.register = async (req, res, next) => {
  try {
    // res.set('Access-Control-Allow-Origin', '*');
    // res.type('application/json')
    const response = await service.register(req.body);
    console.log("response: ", response);
    return res.status(httpStatus.CREATED).json(response);
  } catch (error) {
    return next(error);
  }
};

/**
 * Returns jwt token if valid username and password is provided
 * @public
 */
exports.login = async (req, res, next) => {
  try {
    // res.header('Access-Control-Allow-Origin', 'Origin, X-Requested-With, Content-Type, Accept');
    // res.set('Access-Control-Allow-Origin', '*');
    // res.type('application/json')
    const response = await service.login(req.body);
    return res.json(response);
  } catch (error) {
    return next(error);
  }
};

/**
 * login with an existing user or creates a new one if valid accessToken token
 * Returns jwt token
 * @public
 */
exports.oAuth = async (req, res, next) => {
  try {
    const { user } = req;
    const response = await service.oAuth(user);
    return res.json(response);
  } catch (error) {
    return next(error);
  }
};

/**
 * Returns a new jwt when given a valid refresh token
 * @public
 */
exports.refresh = async (req, res, next) => {
  try {
    const response = await service.refresh(req.body);
    return res.json(response);
  } catch (error) {
    return next(error);
  }
};
