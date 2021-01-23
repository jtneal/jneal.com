# Build image
FROM node:14 as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --silent
COPY . .
RUN npm run build -- --prod

# Final image
FROM nginx:stable-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist ./
COPY nginx.conf /etc/nginx/conf.d/default.conf
