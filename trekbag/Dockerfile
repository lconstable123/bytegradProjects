FROM node:slim AS build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:slim AS production
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json .
COPY --from=build /app/vite.config.js .
EXPOSE 3000
CMD ["npx","serve","dist"]
