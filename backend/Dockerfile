FROM denoland/deno:2.1.4 as base

WORKDIR /backend

COPY . .

EXPOSE 3000

ARG DB_PORT
ARG DB_HOST
ARG DB_USER
ARG DB_PASS
ARG DB_NAME

ENV DB_PORT=${DB_PORT}
ENV DB_HOST=${DB_HOST}
ENV DB_USER=${DB_USER}
ENV DB_PASS=${DB_PASS}
ENV DB_NAME=${DB_NAME}

RUN deno task load

RUN deno compile --allow-net --allow-env --allow-read main.ts

CMD ./backend