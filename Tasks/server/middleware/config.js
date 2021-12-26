var config = {};

config.debug = true;

config.url = "https://auth.pairstrade.pro";
config.login_url = config.url + "/auth/login";
config.profile_url = config.url + "/profile";
config.checkToken_url = config.url + "/auth/check-token";
config.signout_url = config.url + "/auth/signout";

module.exports = config;
