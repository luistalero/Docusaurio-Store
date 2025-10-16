FROM node:22.20.0-alpine@sha256:cb3143549582cc5f74f26f0992cdef4a422b22128cb517f94173a5f910fa4ee7 AS builder

WORKDIR /app

COPY --chown=node:node package*.json ./

RUN --mount=type=cache,id=npm,target=/root/.npm \
    npm install --prefer-offline --no-audit

COPY --chown=node:node . .

USER node

EXPOSE 3000

CMD ["npx", "docusaurus", "start", "--host", "0.0.0.0", "--port", "3000"]