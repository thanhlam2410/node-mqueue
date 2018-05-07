let config = require("./config");
require("./src/server").main(config.port, config.cache);