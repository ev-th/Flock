// The app does not currently use this API due to restrictive rate limits.
// It was previously used when we presented the app at Makers Demo Day.

const SerpApi = require("google-search-results-nodejs");

require("dotenv").config();
const apiKey = process.env.SERPAPI_KEY;

class SerpApiClient {
  constructor(location, date = "week") {
    this.location = location;
    this.date = date;
  }

  activitySearch(callback) {
    const params = {
      engine: "google_events",
      q: `Events in ${this.location}`,
      location: this.location,
      htichips: `date:${this.date}`,
      hl: "en",
    };

    const search = new SerpApi.GoogleSearch(apiKey);
    search.json(params, (data) => {
      const events = data.events_results;
      callback(events);
    });
  }
}

module.exports = SerpApiClient;

// USAGE
// const callback = (data) => {
//   console.log(data);
// };
//
// client = new SerpApiClient("Manchester", "next_week");
// client.activitySearch(callback);

// REFERENCE: different date options you can use:-
// date:today - Today's Events
// date:tomorrow - Tomorrow's Events
// date:week - This Week's Events
// date:today - Today's Weekend's Events
// date:next_week - Next Week's Events
// date:month - This Month's Events
// date:next_month - Next Month's Events
