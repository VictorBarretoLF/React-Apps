const express = require('express')
const router = express.Router()
const { registerUser, loginrUser, getMe } = require('../controlers/userControler')
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginrUser)
router.get('/me', protect, getMe)

module.exports = router