# Stage 1
FROM node:lts-alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --omit=dev

# Stage 2
FROM nginx:alpine
COPY --from=node /app/dist/front-ui-app /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf 