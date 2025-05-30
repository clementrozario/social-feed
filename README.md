# Post & Comment API

A Node.js, Express, and MongoDB backend for creating posts and adding comments.

## Features

- Create a post
- View all posts
- View a single post with its comments
- Add a comment to a post
- View all comments for a post

## Getting Started

1. Clone the repository
2. Install dependencies:
   ### npm install
3. setup .env file:
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string

4. Start the server:
   ### npm run dev

## API Endpoints

- `POST /posts` — Create a new post
- `GET /posts` — Get all posts
- `GET /posts/:id` — Get a single post with comments
- `POST /posts/:id/comments` — Add a comment to a post
- `GET /posts/:id/comments` — Get all comments for a post
