#!/bin/bash

#  Add global dependencies
npm i -g lerna yarn prettier eslint cross-env netlify gh-pages

# *GLOBAL DEPENDENCIES
# Add dev dependencies
yarn install

# *DEPENDENCIES
lerna exec --parallel -- yarn install

# *START DEV SERVERS
yarn dev
