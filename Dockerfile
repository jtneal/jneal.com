# Build image
FROM node:14 as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --silent
COPY ./src ./src
COPY ./.browserslistrc ./.browserslistrc
COPY ./angular.json ./angular.json
COPY ./tsconfig.app.json ./tsconfig.app.json
COPY ./tsconfig.json ./tsconfig.json
RUN pwd
RUN whoami
RUN ls -al
RUN npm run build -- --prod

# Final image
FROM nginx:stable-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist ./
COPY nginx.conf /etc/nginx/conf.d/default.conf
