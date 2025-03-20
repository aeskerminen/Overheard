# Overheard

## Overheard is a copy of the notorious hyperlocal social media app Jodel.

## Table of contents

- [Roadmap](#roadmap)
- [Tech Stack](#techstack)
- [Installation](#installation)

## Roadmap

- [x] Primitive user system.
- [x] Posts with text content.
- [x] Customizable posts.
- [x] Voting system.
- [x] Post filtering
- [ ] Tags.
- [ ] Polls.
- [ ] Videos.
- [x] Location -based mapping of content.
- [ ] Cutomized feed based on channels that you're subscribed to.
- [x] Comment system

## Techstack

### Frontend

- React.js
- Redux Toolkit

### Backend

- Epxress.js
- Axios
- Mongoose

### Offgrid

- Postgres
- Express.js

### General

- Nginx

## Usage

1. Clone the repo

    - git clone https://github.com/aeskerminen/Overheard.git

2. Go to the root of the repo

3. Run the 'generate_certs' script

    - chmod +x generate_certs.sh
    - ./generate_certs.sh

4. Change the premade project.env file (optional)

5. Run docker in the root directory

    - sudo docker compose up --build