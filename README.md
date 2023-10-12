# Flock App
![Logo](./sheep-and-bird-cropped.png)

![Alt Text](./Flock-gif.gif)

## Introduction

Flock is a mobile app used to help groups of people work out what to do together. Users create an event with a number of friends which generates possible activities based on location. Friends are invited to choose activities with a link that opens the app directly onto the event page. No sign up is required. Each friend makes choices in their own time by using a swiping feature. Once all friends added to the event have made their choices, all of their matching activity choices are displayed on the results page. Check out our demonstration of the app [here](https://www.youtube.com/watch?v=poiWhBTU_ys&t=285s)

## Setup

Clone the repository and install the dependencies.

```bash
git clone https://github.com/ev-th/Flock.git

cd Flock/api
npm install

cd ../frontend
npm install
```

Put your IP address in a .env file in the main directory

```bash
# Flock/.env

IP=YOUR_IP_HERE
```

You'll need an API key for [OpenAI](https://platform.openai.com/), which is used for generating the location-based activities. Put the api key in a .env file in the api directory.

```bash
# Flock/api/.env

OPENAI_API_KEY=YOUR_API_KEY_HERE
```

Run the back end in one terminal.

```bash
cd Flock/api
npm start
```

Start the front end in another terminal.

```bash
cd Flock/frontend
expo start -c
```

Expo will generate a QR that can be used to open the app on your phone. To do this, you'll need [Expo Go](https://expo.dev/client), which will run the app.

## Demonstration

We developed Flock as our team's final project for [Makers Academy](https://makers.tech/). To see the app in action, check out our presentation at Makers demo day [here](https://www.youtube.com/watch?v=poiWhBTU_ys&t=285s). In the video, you can also hear us talk about our strategy and development process.

## Team

👩‍🔧🧑‍🔧👨‍🔧 **[Marco Belahouane](https://github.com/mkb93), [Sarah Clements](https://github.com/sarahc-dev), [Matt Hammond](https://github.com/MattHammond94), [Evan Thomas](https://github.com/ev-th), [Verity Wong](https://github.com/veritywong)** 👨‍🔧🧑‍🔧👩‍🔧