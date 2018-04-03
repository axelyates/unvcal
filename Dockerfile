FROM node

# compile the typescript code
WORKDIR /usr/src/app
COPY package*.json ./

# yarn dependiences 
RUN apt update && apt install -y apt-transport-https ca-certificates

# yarn package repo for debian
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
&& echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt update && apt install -y yarn

# pull node deps
RUN yarn 

# bundle app source
COPY . .

# build the project
RUN yarn run build

EXPOSE 3000

CMD [ "yarn", "start" ]
