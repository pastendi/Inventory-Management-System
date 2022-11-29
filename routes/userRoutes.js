const express = require('express')
const router = express.Router()
const { allUser, updateUser } = require('../controllers/userController')
const authenticateUser = require('../middleware/auth')

router.route('/').get(allUser)
router.route('/update/:id').patch(authenticateUser, updateUser)

module.exports = router
