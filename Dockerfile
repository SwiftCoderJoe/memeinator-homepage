# First, we need to build our site using yarn and vite.

# We can do this by starting with a Node image. We'll use Node 19 here because it's the latest when I wrote it, but it shouldn't really matter.
FROM node:19-alpine AS build

# Next let's copy in our package and yarn lock to isntall deps. We do this first do it doesn't happen if it doesn't change.
WORKDIR /usr/src

COPY package.json ./
COPY yarn.lock ./

RUN yarn

# Now we can copy everything else in and build the app.
# This also copies a few unneccessary things like the README and Caddyfile, but that's not a huge issue.
COPY . .
RUN yarn build

# Now we can host this site using Caddy.
# We're getting the latest version 2 release, which should be fine.
FROM caddy:2-alpine

# Copy in the built website and Caddyfile
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /usr/src/dist /srv
