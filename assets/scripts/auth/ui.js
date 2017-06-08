'use strict'

const store = require('../store.js')
const visible = require('../visible')
const api = require('./api')

const createAccountSuccess = (data) => {
  store.user = data.user

  const credentials = {
    email: $('#sign-up-email').val(),
    password: $('#sign-up-password').val()
  }

  api.login({credentials})
  .then(loginSuccess)
  .catch(loginFailure)
  visible.clearFormFields()
  $('#cr-acct-success-alert').alert()
  $('#cr-acct-success-alert').fadeTo(1500, 500).slideUp(500, () => {
    $('#cr-acct-success-alert').slideUp(500)
  })
}

const createAccountFailure = (error) => {
  const errTextExists = error.responseJSON
  if (errTextExists.password) {
    $('#cr-acct-fail-alert-blank').alert()
    $('#cr-acct-fail-alert-blank').fadeTo(1500, 500).slideUp(500, () => {
      $('#cr-acct-fail-alert-blank').slideUp(500)
    })
  } else {
    $('#cr-acct-fail-alert-exists').alert()
    $('#cr-acct-fail-alert-exists').fadeTo(1500, 500).slideUp(500, () => {
      $('#cr-acct-fail-alert-exists').slideUp(500)
    })
  }
}

const loginSuccess = (data) => {
  console.log('login data is:', data)
  store.user = data.user
  visible.loginView()
  visible.clearFormFields()
}

const loginFailure = (error) => {
  console.error(error)
  $('#login-fail-alert').alert()
  $('#login-fail-alert').fadeTo(1500, 500).slideUp(500, () => {
    $('#login-fail-alert').slideUp(500)
  })
}

const logoutSuccess = (data) => {
  store.user = null
  visible.logoutView()
  visible.clearFormFields()
}

const logoutFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (data) => {
  visible.changePassView()
  visible.clearFormFields()
  $('#ch-pass-success-alert').alert()
  $('#ch-pass-success-alert').fadeTo(1500, 500).slideUp(500, () => {
    $('#ch-pass-success-alert').slideUp(500)
  })
}

const changePasswordFailure = (error) => {
  console.error(error)
  $('#change-pass-fail-alert').alert()
  $('#change-pass-fail-alert').fadeTo(1500, 500).slideUp(500, () => {
    $('#change-pass-fail-alert').slideUp(500)
  })
}

module.exports = {
  createAccountSuccess,
  createAccountFailure,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
