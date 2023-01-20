# Build image
FROM node:18 as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --silent
COPY ./apps/bff ./apps/bff
COPY ./apps/ui ./apps/ui
COPY ./libs ./libs
COPY ./nx.json ./nx.json
COPY ./tsconfig.base.json ./tsconfig.base.json
RUN npx nx run bff:build:production
RUN npx nx run ui:build:production
RUN rm -rf ./dist/apps/bff/public
RUN mv ./dist/apps/ui ./dist/apps/bff/public

# Final image
FROM node:18-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist/apps/bff ./
CMD ['node', 'main.js']
