'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
const authEvents = require('./auth/events.js')
const quoteEvents = require('./quotes/events.js')
const visible = require('./visible')

$(() => {
  authEvents.clickHandlers()
  quoteEvents.clickHandlers()
  visible.onDocLoad()
  // logic to block future dates from being selected in HTML datepicker tool
  $(function () {
    const dtToday = new Date()
    let month = dtToday.getMonth() + 1
    let day = dtToday.getDate()
    const year = dtToday.getFullYear()
    if (month < 10) {
      month = '0' + month.toString()
    }
    if (day < 10) {
      day = '0' + day.toString()
    }
    const maxDate = year + '-' + month + '-' + day
    $('#quote-date').attr('max', maxDate)
  })
})
