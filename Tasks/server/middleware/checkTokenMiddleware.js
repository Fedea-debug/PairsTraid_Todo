const axios = require("axios");
const config = require("./config");

const auth = async (req, res, next) => {
  try {
    const auth_res = await axios.post(config.checkToken_url, {
      token: (req.header("Authorization") || "").replace("Bearer ", ""),
    });
    if (auth_res.data.success === false) {
      return res.status(401).json({
        success: false,
        result: {
          message: "Unauthorized",
          status: 401,
        },
      });
    }
    req.uuid = auth_res.data.result.uuid;

    return next();
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      success: false,
      result: {
        message: "Something went wrong",
        status: 500,
      },
    });
  }
};
module.exports = auth;
