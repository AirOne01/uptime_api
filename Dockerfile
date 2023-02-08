# syntax=docker/dockerfile:1.0

FROM denoland/deno:alpine

COPY ./src /app

WORKDIR /app

CMD ["deno", "run", "--allow-net", "main.ts"]