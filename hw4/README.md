# Homework 4.

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


Create group. POST `localhost:3000/group` with json body.
ex. 
```js{
    "name": "name",
    "permissions": ["read", "write"]
}
```

Get group by id. GET `localhost:3000/group?id=guid`

Remove group. POST `localhost:3000/group/remove` with json body
ex.
```js{
    "id": "9d614eab-9c08-45c6-84ab-cb4c25fc815f"
}
```

Update group. POST `localhost:3000/group/update` with json body
ex.
```js{
    "id": "9d614eab-9c08-45c6-84ab-cb4c25fc815f",
    "name": "name",
    "permissions": ["read", "write"]
}
```

Get groups list. GET `localhost:3000/group/list?login=login&limit=1`

Add users to group. POST `localhost:3000/group/add_users` with json body
ex.
```js{
    "group_id": "526a312c-49f9-11ec-81d3-0242ac130003",
    "user_ids": [
        "c107a7bd-0e95-4cc7-bf47-a0ec3b1f825a",
        "8750d99c-1554-4237-b653-a0a45b9a0d96"
    ]
}
```