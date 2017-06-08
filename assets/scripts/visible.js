'use strict'

const loginView = () => {
  $('#cr-acct-form').hide()
  $('#sign-in-form').hide()
  $('#change-pass-form').show()
  $('#logout-btn').show()
  $('#create-quote-form').show()
  $('#get-quotes-btn').show()
  $('#get-all-quotes-btn').show()
}

const logoutView = () => {
  $('#cr-acct-form').show()
  $('#sign-in-form').show()
  $('.render-quotes').empty()
  $('#change-pass-form').hide()
  $('#logout-btn').hide()
  $('#create-quote-form').hide()
  $('#get-quotes-btn').hide()
  $('#get-all-quotes-btn').hide()
}

const changePassView = () => {
  $('#change-pass-form').hide()
}

const clearFormFields = () => {
  $('#cr-acct-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-pass-form').trigger('reset')
  $('#create-quote-form').trigger('reset')
}

const onDocLoad = () => {
  $('.alert').hide()
  $('#change-pass-form').hide()
  $('#logout-btn').hide()
  $('#create-quote-form').hide()
  $('#get-quotes-btn').hide()
  $('.trigWarning').modal('show')
  $('#safe-space-gif').hide()
  $('#get-all-quotes-btn').hide()
}

const onSafeSpace = () => {
  $('#safe-space-gif').show()
  $('.trigWarning').modal('hide')
  $('#cr-acct-form').hide()
  $('#sign-in-form').hide()
}
const clickHandlers = () => {
  $('#safe-space-btn').on('click', onSafeSpace)
}

module.exports = {
  loginView,
  logoutView,
  changePassView,
  clearFormFields,
  onDocLoad,
  onSafeSpace,
  clickHandlers
}
