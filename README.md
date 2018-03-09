# node-api-pusher
Simple REST API server that publishes events using Pusher. This is meant to be used as the back-end for the project https://github.com/eh3rrera/feed-pusher-android.

You can follow the [tutorial](https://pusher.com/tutorials/activity-feed-android/) to build this application or jump straight to the code.


## Getting Started
1. Create an app on Pusher and copy your app's id, key, and secret.
2. Clone this repository and `cd` into it.
4. Execute `npm install` or `yarn` to download the dependencies.
5. Execute `PUSHER_APP_ID=XXXXXX PUSHER_APP_KEY=XXXXXX PUSHER_APP_SECRET=XXXXXX node server.js` to start the server.
6. Start sending JSON request to `http://localhost:3000/api` using [Postman](https://www.getpostman.com/). 

### Prerequisites

- [A free Pusher account](https://pusher.com)
- [Node.js](https://nodejs.org/en/download/) version 5 or greater

## Built With

* [Pusher](https://pusher.com/) - APIs to enable devs building realtime features
* [Node.js](https://nodejs.org) - A JavaScript runtime

## Acknowledgments

* Thanks to [Pusher](https://pusher.com/) for sponsoring this tutorial.
