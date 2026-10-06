FROM node:20.19-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --global npm@11.16.0 && npm ci
COPY . .
RUN npm run build
FROM nginx:1.27-alpine
COPY --from=build /app/dist/naboo/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
