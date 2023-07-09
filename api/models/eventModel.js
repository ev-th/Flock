const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({
  eventName: String,
  names: Array,
  activities: Array
}, { timestamps: true })

module.exports = mongoose.model('Event', eventSchema)
