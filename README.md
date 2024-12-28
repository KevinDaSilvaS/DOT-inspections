# DOT Inspections

Fullstack system to list and get details from DOT Inspections

## Running the app

To run the app first we need to have a mongodb set up and then run the builds for backend and front end

- Podman(recommended) <br>
`podman compose up -d mongo mongo-express` <br>
`podman compose up -d --build backend frontend`

- Docker <br>
`docker compose up -d mongo mongo-express` <br>
`docker compose up -d --build backend frontend`

- Local <br>
In a terminal window run: `cd backend` and run `deno task load` to populate the db and then run `deno task start` <br>
In another terminal window run: `cd dot-inspections` and run `deno task start`

## About the architecture

I was learning Deno at the moment and I was very beginner at it, and I got a short time to do this assesment so I thought: "Hey you know what would be a great idea? Writing the whole system in the deno ecosystem" so I used this as an opportunity to learn a new tech stack in a short time hehe.
If you eventually notice something that you thought why the hell did this guy wrote stuff like this? Well probably because I didnt know much my way around deno.
The tech stack was very Deno like:
### Front-end
 - Fresh as framework
 - Tailwind as css lib
 - Typescript
### Back-end
 - Oak as framework
 - Mongodb as data storage
 - Typescript

Overral it was a real nice experience coding my first full stack project in Deno, coding felt exciting again