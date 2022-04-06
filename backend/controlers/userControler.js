// %desc Register new user
// route POST /api/users
// @access Public
const registerUser = (request, response) => {
    response.json({message : "Register User"})
}

// %desc Authenticate a user
// route POST /api/users/login
// @access Public
const loginrUser = (request, response) => {
    response.json({message : "Login User"})
}

// %desc Get user data
// route GET /api/users/me
// @access Public
const getMe = (request, response) => {
    response.json({message : "Show user data"})
}

module.exports = {
    registerUser,
    loginrUser,
    getMe,
}