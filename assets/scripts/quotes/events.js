'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onCreateQuote = function (event) {
  event.preventDefault()
  console.log('create quote click is heard')
  const data = getFormFields(this)
  console.log('form data is', data)
  api.createQuote(data)
    .then(ui.createQuoteSuccess)
    .catch(ui.createQuoteFailure)
}

const onGetQuotes = function (event) {
  console.log('get quotes click events')
  api.readQuotes()
    .then(ui.getQuotesSuccess)
    .catch(ui.getQuotesFailure)
}

const onUpdateQuote = function (event) {
  console.log('update quote click heard')
  event.preventDefault()
  const data = getFormFields(this)
  const id = $(this).attr('data-id')
  api.updateQuote(id, data)
    .then(ui.updateQuoteSuccess)
    .catch(ui.updateQuoteFailure)
}

const onDeleteQuote = function (event) {
  console.log('delete click heard')
  event.preventDefault()
  const id = $(this).attr('data-id')
  console.log('id is', id)
  api.deleteQuote(id)
    .then(ui.deleteQuoteSuccess)
    .catch(ui.deleteQuoteFailure)
    .done(onGetQuotes)
}

const onGetAllQuotes = function (event) {
  console.log('get all quotes click is heard')
  event.preventDefault()
  api.readAllQuotes()
    .then(ui.getAllQuotesSuccess)
    .catch(ui.getQuotesFailure)
}

const clickHandlers = () => {
  $('#create-quote-form').on('submit', onCreateQuote)
  $('#get-quotes-btn').on('click', onGetQuotes)
  $('.render-quotes').on('submit', '#update-quote-form', onUpdateQuote)
  $('.render-quotes').on('click', '.del-btn', onDeleteQuote)
  // $('#delete-quote-btn').on('click', onDeleteQuote)
  $('#get-all-quotes-btn').on('click', onGetAllQuotes)
}

module.exports = {
  clickHandlers
}
