# Workapp

## Getting Started

### Dependencies

* NestJS, Prisma, Docker, Postgresql

### Installing

* cd server
* yarn install

### Executing program

* How to run the program
* Step-by-step bullets
```
yarn start:dev
yarn compose:up
npx prisma migrate dev --name "example name here"
npx prisma db seed
```

## Help

If need generate client 
```
yarn prisma:g
```

If change prisma.schema file withou migration need push db
```
yarn prisma:push
```
