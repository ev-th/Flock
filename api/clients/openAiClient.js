require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

class OpenAiClient {
  constructor(location) {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openai = new OpenAIApi(configuration);
    this.prompt = `What are 5 activities I can do with friends in ${location}? Only give me the list. Make each suggestion less than 10 words. Make output new line seperated without numbers.`;
  }

  activitySearch(callback) {
    this.openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          {
            role: "user",
            content: this.prompt,
          },
        ],
        temperature: 0.0,
      })
      .then((data) => {
        const result = data.data.choices[0].message.content;
        const activities = result.split("\n").map((activity) => {
          return activity.replace(/^\d+\.\s/, "");
        });
        callback(activities);
      });
  }
}

module.exports = OpenAiClient;

// USAGE
// const callback = (data) => {
//   console.log(data);
// };
//
// const client = new OpenAiClient("London");
// client.activitySearch(callback);
