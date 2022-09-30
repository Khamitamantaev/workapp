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

[I'm an inline-style link](https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0#introduction)
