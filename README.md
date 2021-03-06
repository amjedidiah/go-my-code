# go-my-code

<!--
TODO: Add project logo
<img src="#" />

TODO: Add Codacy Badge
-->

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

> **A job assessment by GoMyCode**

As part of our selection process, we send take-home project to selected candidates, and you are one of them!

The followings are the detail of the take-home project:

> **Name**: Hacker-news clone
> **Outcomes**: You will build a web application.
> **Requirements**:
>
> - [x] Create a server, and connect it to a database.
> - [x] Insert the posts in the resources into the database.
> - [x] Create routes for adding, delete, and reading posts.
> - [x] Create a home page to display all the posts.
> - [x] Create a detail page to display the details of the post.
> - [x] Create a button in each post to delete it.
>
> **Resources**: [GitHub Repo](https://github.com/gomycode-engineering/technical-tests-fake-data/blob/master/posts.json) > **Technologies**: Reactjs, Expressjs, MongoDB, Mongoose
> **Time**: 24 hours
> **Submission**: [Submit here](https://app3.greenhouse.io/tests/f1f4561cf914afa88f2b042874b3de94?utm_medium=email&utm_source=TakeHomeTest)

## Table of Content

- [Quick Start](#quick-start)
- [Authors](#authors)
- [Contributing](#contributing)
- [License](#license)
- [About Me](#about-me)

## Quick Start

### Installation

You will need a **_strong internet connection_** to complete the steps below

```bash
git clone https://github.com/amjedidiah/go-my-code.git go-my-code
cd go-my-code
yarn get-started
yarn start
# Open http://localhost:5000 in your browser  to preview app
```

### Usage

[Link to front-end react app](https://go-my-codde.netlify.app)

[API baseURL](https://go-my-code-api.herokuapp.com/api)

#### API Endpoints

- `/api/posts`
  - `delete`: deletes all posts in database
  - `get`: gets all posts from database
  - `post`: add a single post to the database

- `/api/posts/populate`
  - `post`: populates the database with dummy data

- `/api/posts/:id`
  - `delete`: deletes a single post in the database using the post's id
  - `get`: gets a single post from database using the post's id

### Code reference

The main folders are:

```bash
|---packages
    |---client: React app
|----services
    |---api: Express app
```

## Authors

- [Jedidiah Amaraegbu](https://github.com/amjedidiah) -- @amjedidiah -- FullStack Web Developer

## Contributing

Please see [CONTRIBUTING.md](CONTRIBUTING.md)

## License

This copy of myreads is Copyright ?? 2020 Jedidiah Amaraegbu. It is free, and may be redistributed under the terms specified in the [LICENSE file](LICENSE)

## About Me

I am passionate about helping businesses and individuals create more value with software and helping students learn software development.

I recently spoke at a student conference organized by Microsoft Student Partners in South Africa. Currently, I am a Barter Student Ambassador at FlutterWave and a FullStack Web Developer at eConnect NP.
My skills include: HTML5, React, Redux, React Native, Express, Node, PHP, PostgreSQL, MySQL, MongoDB.

Contact me if you need a website, web app, mobile app for your business/idea, a web tutor, or a conference speaker?
