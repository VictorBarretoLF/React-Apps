const express = require('express')
const router = express.Router()
const { registerUser, loginrUser, getMe } = require('../controlers/userControler')

router.post('/', registerUser)
router.post('/login', loginrUser)
router.get('/me', getMe)

module.exports = router