'use strict'

const store = require('../store.js')
// const visible = require('../visible.js')

const createAccountSuccess = (data) => {
  console.log('create account success')
}

const createAccountFailure = (error) => {
  console.error(error)
  console.log('create account fail')
}

const loginSuccess = (data) => {
  store.user = data.user
  console.log('login success')
}

const loginFailure = (error) => {
  console.error(error)
  console.log('login fail')
}

const logoutSuccess = (data) => {
  store.user = null
  console.log('logout heard')
}

const logoutFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (data) => {
  console.log('change pass heard')
}

const changePasswordFailure = (error) => {
  console.error(error)
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
