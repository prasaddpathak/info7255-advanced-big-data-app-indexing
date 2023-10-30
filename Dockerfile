FROM node:18

# Install Redis
RUN apt-get update && apt-get install -y redis-server

# Set working directory
WORKDIR /app

# Install nodemon globally
RUN npm install -g nodemon

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Expose the necessary port
EXPOSE 3000

# Start Redis and the application on startup
CMD service redis-server start && npm start