# Homework 2.

## Installation
1. `npm install`

## Usage

1. `npm run server`

Create user. POST `localhost:3000/user` with json body.
ex. 
```js{
    "login": "login",
    "password": "pass4432",
    "age": 5
}
```

Get user by id. GET `localhost:3000/user?id=guid`

Remove user. POST `localhost:3000/user/remove` with json body
ex.
```js{
    "id": "9d614eab-9c08-45c6-84ab-cb4c25fc815f"
}
```

Update user. POST `localhost:3000/user/update` with json body
ex.
```js{
    "id": "9d614eab-9c08-45c6-84ab-cb4c25fc815f",
    "login": "login",
    "password": "pass4432",
    "age": 5
}
```

Get users list. GET `localhost:3000/user/list?login=login&limit=1`
