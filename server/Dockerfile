# Use the official Node.js image as a base image
FROM node:20-alpine

RUN npm install -g pnpm

# Set the working directory inside the container
WORKDIR /usr/src/app
# USER app

# Install dependencies
COPY package.json ./
COPY pnpm-lock.yaml ./

# Copy the rest of the application code to the container
COPY . .

RUN pnpm install


# Install the Nest CLI globally for development use
RUN npm install -g @nestjs/cli

# Expose the port the app runs on
EXPOSE 8080

RUN pnpm prisma generate

# Set the command to run the app in development mode with hot-reloading
CMD ["pnpm", "run", "start:dev"]
