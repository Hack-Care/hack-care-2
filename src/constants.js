const CONSTANTS = {};

CONSTANTS.ERROR_MESSAGE = {};

CONSTANTS.ERROR_MESSAGE.LIST_DELETE = "Request to delete list item failed:";
CONSTANTS.ERROR_MESSAGE.LIST_ADD = "Request to add list item failed:";
CONSTANTS.ERROR_MESSAGE.LIST_GET = "Request to get list items failed:";
CONSTANTS.ERROR_MESSAGE.LIST_EMPTY_MESSAGE = "Please enter a valid message";

CONSTANTS.ERROR_MESSAGE.MASTERDETAIL_GET =
  "Request to get master detail text failed:";

CONSTANTS.ERROR_MESSAGE.GRID_GET = "Request to get grid text failed:";

CONSTANTS.ENDPOINT = {};

CONSTANTS.ENDPOINT.LIST = "/api/list";

CONSTANTS.ENDPOINT.MASTERDETAIL = "/api/masterdetail";

CONSTANTS.ENDPOINT.GRID = "/api/grid";

CONSTANTS.ENDPOINT.SIGN_UP = "/auth/sign-up";
CONSTANTS.ENDPOINT.LOGIN = "/auth/login";
CONSTANTS.ENDPOINT.LOGOUT = "/auth/logout";
CONSTANTS.ENDPOINT.USER_EMAIL = "/auth/user-email";

export default CONSTANTS;
