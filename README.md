# node-api-pusher
Simple REST API server that publishes events using Pusher. This is meant to be used as the back-end for the project https://github.com/eh3rrera/feed-pusher-android.

You can follow the [tutorial](https://blog.pusher.com) to build this application or jump straight to the code.

# Requirements

- [A free Pusher account](https://pusher.com)
- [Node.js](https://nodejs.org/en/download/) version 5 or greater

# Installation
1. Create an app on Pusher and copy your app's id, key, and secret.
2. Clone this repository and `cd` into it.
4. Execute `npm install` or `yarn` to download the dependencies.
5. Execute `PUSHER_APP_ID=XXXXXX PUSHER_APP_KEY=XXXXXX PUSHER_APP_SECRET=XXXXXX node server.js` to start the server.
6. Start sending JSON request to `http://localhost:3000/api` using [Postman](https://www.getpostman.com/). 
