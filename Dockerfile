FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN --mount=type=cache,id=npm,target=/root/.npm \
    npm ci --prefer-offline --no-audit

COPY --chown=node:node . .

USER node

EXPOSE 3000

CMD ["npx", "docusaurus", "start", "--host", "0.0.0.0", "--port", "3000"]