﻿const CONSTANTS = {};
CONSTANTS.ENDPOINT = {};

CONSTANTS.PORT = process.env.PORT || "3001";
CONSTANTS.ENDPOINT.GRID = "/grid";

CONSTANTS.ENDPOINT.LIST = "/list";

CONSTANTS.ENDPOINT.MASTERDETAIL = "/masterdetail";

CONSTANTS.MONGODB = {};
CONSTANTS.MONGODB.URL = "localhost:27017";
CONSTANTS.MONGODB.DATABASE = "hackcare";

CONSTANTS.SENDGRID = {};
CONSTANTS.SENDGRID.APIKEY = "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";


module.exports = CONSTANTS;
