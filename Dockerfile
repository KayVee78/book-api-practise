FROM alpine:3.20

# /usr/src/app working directly is inherited from base image

COPY package.json .
COPY yarn.lock .
COPY .npmrc .

RUN yarn install --production=false 

COPY . .

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN yarn build 

EXPOSE 3000

# appuser user/group already inherited from base image
USER appuser

ENTRYPOINT ["node", "dist/main"]