const express = require('express')
const router = express.Router()
const { addStock } = require('../controllers/inventoryController')

router.route('/').post(addStock)

module.exports = router
