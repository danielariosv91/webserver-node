# Simple Web Server with Node.js, Express, and HBS

This is a simple web server built with Node.js, Express, and HBS (Handlebars) template engine. The application serves as a starting point for creating web applications and can be easily deployed on Railway.app. You can access the deployed app at [webserver-node.railway.internal](https://webserver-node.railway.internal).

## Features

- Set up a basic web server using Express.
- Use the HBS (Handlebars) template engine for rendering dynamic content.
- Easily deployable on Railway.app.

## Prerequisites

Before you get started, make sure you have the following:

- Node.js: Ensure you have Node.js installed on your local machine. You can download it from the official website: [Node.js](https://nodejs.org/).

## Installation

1. Clone or download the Simple Web Server repository from GitHub:

   ```bash
   git clone git@github.com:danielariosv91/webserver-node.git
   ```

2. Navigate to the project directory:

   ```bash
   cd webserver-node
   ```

3. Install the required npm packages:

   ```bash
   npm install
   ```

## Usage

1. Start the application:

   ```bash
   npm start
   ```

2. Open your web browser and navigate to [http://localhost:8080](http://localhost:8080) to access the locally running web server.

3. Customize the application by editing the Handlebars templates and adding your routes as needed. The main template files are located in the `views` folder.

## Deployment on Railway.app

To deploy the Simple Web Server on Railway.app 

1. Sign up or log in to [Railway.app](https://railway.app/).

2. Create a new project.

3. Link your GitHub repository to the Railway.app project.

4. Configure the environment variables:

   - Set `PORT` to `8080`.

5. Deploy your project on Railway.app.



