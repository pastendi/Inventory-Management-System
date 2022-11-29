const express = require('express')
const router = express.Router()
const { getStat } = require('../controllers/overviewController')

router.route('/stat').get(getStat)

module.exports = router
