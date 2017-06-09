'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onCreateQuote = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createQuote(data)
    .then(ui.createQuoteSuccess)
    .catch(ui.createQuoteFailure)
}

const onGetQuotes = function (event) {
  api.readQuotes()
    .then(ui.getQuotesSuccess)
    .catch(ui.getQuotesFailure)
}

const onUpdateQuote = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  const id = $(this).attr('data-id')
  api.updateQuote(id, data)
    .then(ui.updateQuoteSuccess)
    .catch(ui.updateQuoteFailure)
    .done(onGetQuotes)
}

const onDeleteQuote = function (event) {
  event.preventDefault()
  const id = $(this).attr('data-id')
  api.deleteQuote(id)
    .then(ui.deleteQuoteSuccess)
    .catch(ui.deleteQuoteFailure)
    .done(onGetQuotes)
}

const onGetAllQuotes = function (event) {
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
  $('#get-all-quotes-btn').on('click', onGetAllQuotes)
}

module.exports = {
  clickHandlers
}
