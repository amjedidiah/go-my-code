#!/bin/bash

#  Add global dependencies
npm i -g lerna yarn prettier eslint cross-env netlify gh-pages

# *GLOBAL DEPENDENCIES
# Add dev dependencies
yarn add -D lerna pre-commit

# *FRONTEND DEPENDENCIES
lerna exec --scope go-my-code-client -- yarn add @popperjs/core @testing-library/jest-dom @testing-library/react @testing-library/user-event axios bootstrap node-sass objectify-array react react-dom react-helmet react-icons react-redux react-redux-loading react-router-dom react-scripts react-scroll-to-top react-select react-toastify redux redux-persist redux-thunk serve web-vitals workbox-background-sync workbox-broadcast-update workbox-cacheable-response workbox-core workbox-expiration workbox-google-analytics workbox-navigation-preload workbox-precaching workbox-range-requests workbox-routing workbox-strategies workbox-streams
lerna exec --scope go-my-code-client -- yarn add -D @wojtekmaj/enzyme-adapter-react-17 babel-eslint enzyme eslint eslint-config-google eslint-plugin-babel eslint-plugin-import eslint-plugin-react pre-commit

# *BACKEND DEPENDENCIES
lerna exec --scope go-my-code-api -- yarn add cors dotenv errorhandler eslint-plugin-import express express-form-data mongoose morgan validator
lerna exec --scope go-my-code-api -- yarn add -D eslint eslint-config-google nodemon
