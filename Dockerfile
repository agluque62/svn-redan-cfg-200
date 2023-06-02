FROM node:16-alpine
# RUN apk add --no-cache python3 g++ make
WORKDIR /app
COPY ./package.json .
RUN yarn install --production

COPY ./frontend/. ./frontend/.
COPY ./lib/. ./lib/.
COPY ./routes/. ./routes/.
COPY ./app.js .
COPY ./configUlises.json .
COPY ./configUlises-dev.json .
COPY ./*.txt ./

# CMD ["node", "--expose-gc", "/app/app.js"]
