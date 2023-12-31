const Event = require('../models/eventModel')
const User = require('../models/userModel')
const mongoose = require('mongoose')
const OpenAiClient = require('../clients/openAiClient')
const SerpApiClient = require('../clients/serpApiClient')

const EventController = {
  Index: async (req, res) => {
    const { id } = req.params
    // console.log(id)
    if (!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error: 'Id param is invalid'})
    }

    try {
      const event = await Event.findOne({_id: id}).populate('names')

      if (!event) {
        return res.status(400).json({ message: "Id does not exist" })
      }
      
      res.status(200).json(event)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },
  Create: async (req, res) => {
    const { eventName, names, location  } = req.body

    const users = await Promise.all(names.map( async (name) => {
      return await User.create({ name });
    }));

    const client = new SerpApiClient(location)
    const clientAi = new OpenAiClient(location)

    await client.activitySearch(async (data) => {
      const serpActivities = data.map(activity => {
        return `Go to ${activity.title} at ${activity.venue.name}`
      })
      
      await clientAi.activitySearch(async (data) => {
        const activities = [...serpActivities.slice(0, 2), ...data]
        const shuffledActivies = activities.sort(() => Math.random() - 0.5)
        try {
          const newEvent = await Event.create({ eventName: eventName, names: users, activities: shuffledActivies })
          res.status(200).json(newEvent._id)
        } catch (error) {
          res.status(400).json({ error: error.message })
        }
      })
    })

  }
}

module.exports = EventController
