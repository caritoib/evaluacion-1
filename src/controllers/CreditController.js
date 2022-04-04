class CreditController {
  constructor () {
    this.getSimpleRate = this.getSimpleRate.bind(this)
  }

  renderCreditForm (req, res) {
    res.render('credit-form')
  }

  getSimpleRate (req, res) {
    const ammount = parseInt(req.body.ammount)
    const rate = parseInt(req.body.rate)
    const years = parseInt(req.body.years)
    const simpleRate = ammount * (rate / 100) * years

    res.render('total-credit' ,{
      simpleRate
    })
  }
}

module.exports = CreditController
