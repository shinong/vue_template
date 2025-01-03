# Build step 1(installing node modules and preparing compiled build)
FROM node:latest as build
WORKDIR /VUE_TEMPLATE
ENV PATH /VUE_TEMPLATE/node_modules/.bin:$PATH
COPY package.json ./
RUN npm i --silent
RUN npm install
COPY . ./
# ENV REACT_APP_HOST_IP_ADDRESS $API_URL
# Define a build argument for the mode
ARG ENV_MODE=test
RUN npm run build -- --mode=$ENV_MODE

# Build step 2(Deploying build on NGINX)
FROM nginx:latest
RUN  apt-get update \
  && apt-get install -y wget \
  && rm -rf /var/lib/apt/lists/*
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /VUE_TEMPLATE/nginx/nginx.conf /etc/nginx/conf.d/default.conf:ro
COPY --from=build /VUE_TEMPLATE/dist /usr/share/nginx/html