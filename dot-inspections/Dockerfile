FROM denoland/deno:2.1.4

WORKDIR /app

COPY . .

EXPOSE 8000

RUN deno task build

RUN deno compile --include static --include _fresh --include deno.json --allow-net --allow-env --allow-read main.ts

CMD ./app