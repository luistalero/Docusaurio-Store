FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npx", "docusaurus", "start", "--host", "0.0.0.0", "--port", "3000"]
