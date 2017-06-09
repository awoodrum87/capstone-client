'use strict'

const config = require('../config')
const store = require('../store')

const createQuote = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/quotes/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateQuote = (id, data) => {
  return $.ajax({
    url: config.apiOrigin + '/quotes/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const readQuotes = () => {
  return $.ajax({
    url: config.apiOrigin + '/my-quotes/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const readAllQuotes = () => {
  return $.ajax({
    url: config.apiOrigin + '/quotes/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteQuote = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/quotes/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createQuote,
  updateQuote,
  readQuotes,
  deleteQuote,
  readAllQuotes
}
