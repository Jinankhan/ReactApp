FROM node:alpine3.10 AS build
WORKDIR /app
COPY . .
RUN npm i -f
RUN npm run build


FROM nginx
WORKDIR /app
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]