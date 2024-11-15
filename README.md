# Demo Project

This is a basic server project built using **Express.js**, demonstrating how to set up a simple backend server with essential configurations like **CORS**, **helmet** for security, **morgan** for logging, and a basic error handling mechanism.

## Technologies Used

- **Node.js**: JavaScript runtime for the server.
- **Express.js**: Web framework to build the API.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing.
- **Helmet**: Security middleware for securing HTTP headers.
- **Morgan**: HTTP request logger middleware.
- **dotenv**: Loads environment variables from a `.env` file.

## Features

- Basic Express server setup.
- Configured CORS and security middleware (Helmet).
- Custom logging with Morgan, including a correlation ID.
- Basic error handling and 404 response.
- Environment variable configuration with **dotenv**.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/abhayrajgupta128/demo.git
2. Navigate to the project directory: cd demo-project
3. Install the dependencies: yarn install
4. Start the server: yarn dev.

The server will now be running on http://localhost:7000.
