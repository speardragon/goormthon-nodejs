FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
EXPOSE ${PORT:-8080}
CMD ["node", "index.js"]
