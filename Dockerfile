FROM node:18-alpine

# /usr/src/app working directly is inherited from base image

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

RUN npm run build 

EXPOSE 3000

# appuser user/group already inherited from base image
# USER appuser

CMD ["npm", "start"]