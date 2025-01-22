# Use an official Node.js image
FROM node:20

ENV ROLLUP_NATIVE=0

# Set the working directory
WORKDIR /app

# Copy package.json and package-vlock.json
COPY package.json package-lock.json ./

# Clear any existing node_modules (if any)
RUN rm -rf node_modules

# Install dependencies
RUN npm install --force

# Copy application files
COPY . .

# Build the application
RUN npm run build

# Expose the port used by Vite
EXPOSE 5173

# Default command
CMD ["npm", "run", "dev"]
