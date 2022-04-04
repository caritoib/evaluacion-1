const express = require('express')
const PageController = require('./controllers/PageController')
const CreditController = require('./controllers/CreditController')

const router = express.Router()

// Controllers
const pageController = new PageController()
const creditController = new CreditController()

// Routes
router.get('/', creditController.renderCreditForm)

router.post('/', creditController.getSimpleRate)

router.get('*', pageController.renderNotFound)

module.exports = router
