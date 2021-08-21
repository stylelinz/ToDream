const express = require('express')
const router = express.Router()

/* GET home page. */
/**
 * @route GET /
 * @returns {string} 200 - Express in string
 */
router.get('/', function (req, res, next) {
  res.send('Express')
})

module.exports = router
