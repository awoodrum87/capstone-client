'use strict'
const showQuotes = require('../templates/all_quotes.handlebars')

const store = require('../store.js')
// const visible = require('../visible.js')

const createQuoteSuccess = (data) => {
  store.quote = data.quote
  console.log('data.id is', data.id)
  console.log('create quote success')
}

const createQuoteFailure = (error) => {
  console.error(error)
  console.log('create quote fail')
}

const getQuotesSuccess = (data) => {
  const showQuotesHTML = showQuotes({ quotes: data })
  $('.render-quotes').html(showQuotesHTML)
}

const getQuotesFailure = (data) => {
  console.log('get quote fail')
  console.log(data)
}

const updateQuoteSuccess = (data) => {
  console.log('update quote success')
}

const updateQuoteFailure = (error) => {
  console.log('update quote fail')
  console.error(error)
}

const deleteQuoteSuccess = (data) => {
  console.log('delete quote success')
  $('.delModal').modal('toggle')
}

const deleteQuoteFailure = (error) => {
  console.error(error)
  console.log('delete quote fail')
}

module.exports = {
  createQuoteSuccess,
  createQuoteFailure,
  getQuotesSuccess,
  getQuotesFailure,
  updateQuoteSuccess,
  updateQuoteFailure,
  deleteQuoteSuccess,
  deleteQuoteFailure
}
