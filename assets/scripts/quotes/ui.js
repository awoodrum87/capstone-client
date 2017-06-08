'use strict'
const showQuotes = require('../templates/all_quotes.handlebars')
const showAllQuotes = require('../templates/my_quotes.handlebars')

const store = require('../store.js')
const visible = require('../visible.js')

const createQuoteSuccess = (data) => {
  store.quote = data.quote
  visible.clearFormFields()
  $('#cr-quote-success-alert').alert()
  $('#cr-quote-success-alert').fadeTo(1500, 500).slideUp(500, () => {
    $('#cr-quote-success-alert').slideUp(500)
  })
}

const createQuoteFailure = (error) => {
  console.error(error)
  $('#cr-quote-fails-alert').alert()
  $('#cr-quote-fails-alert').fadeTo(1500, 500).slideUp(500, () => {
    $('#cr-quote-fails-alert').slideUp(500)
  })
}

const getQuotesSuccess = (data) => {
  visible.clearFormFields()
  const showQuotesHTML = showQuotes({ quotes: data.quotes })
  $('.render-quotes').html(showQuotesHTML)
}

const getQuotesFailure = (data) => {
  console.log('get quote fail')
  console.log(data)
}

const updateQuoteSuccess = (data) => {
  visible.clearFormFields()
  console.log('update quote success')
}

const updateQuoteFailure = (error) => {
  console.log('update quote fail')
  console.error(error)
}

const deleteQuoteSuccess = (data) => {
  visible.clearFormFields()
  console.log('delete quote success')
  $('.delModal').modal('toggle')
}

const deleteQuoteFailure = (error) => {
  console.error('error is', error)
  console.log('delete quote fail ui')
}

const getAllQuotesSuccess = (data) => {
  console.log('get all quotes passes api into ui')
  console.log(data)
  const showQuotesHTML = showAllQuotes({ quotes: data.quotes })
  $('.render-quotes').html(showQuotesHTML)
}

module.exports = {
  createQuoteSuccess,
  createQuoteFailure,
  getQuotesSuccess,
  getQuotesFailure,
  updateQuoteSuccess,
  updateQuoteFailure,
  deleteQuoteSuccess,
  deleteQuoteFailure,
  getAllQuotesSuccess
}
