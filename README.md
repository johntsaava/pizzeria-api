# pizzeria-api
Homework Assignment #2

# Users
## Users - post

route: 
```
/users
```
body:
```
{
    "firstName": string,
    "lastName": string,
    "email": string,
    "password": string,
    "address": string,
    "tosAgreement": boolean
}
```

## Users - get
route:
```
/users?email=string
```
params:
```
email: string
```
headers:
```
token: string
```
response(example):
```
{
    "firstName": "John",
    "lastName": "Tsaava",
    "email": "johntsaava@gmail.com",
    "address": "Example Street",
    "tosAgreement": true,
    "cart": {
        "j1w4b635706whuarfn3w": 3,
        "2qi4kemd4odhkbgtlbyy": 1
    },
    "orders": [
        "yiflidj2093zwl3z8y4t",
        "kx6rxwvjhp1lfodtmcza"
    ]
}
```

## Users - put
route:
```
/users
```
headers:
```
token: string
```
body:\
*Required data*
```
{
    "email": string,
```
*Optional data (at least one must be specified)*
```
    "firstName": string,
    "lastName": string,
    "password": string,
    "address": string,
    "tosAgreement": boolean
}
```
response:
```
{
    "firstName": string,
    "lastName": string,
    "email": string,
    "address": string,
    "tosAgreement": boolean
}
```

## Users - delete
route:
```
/users?email=string
```
params:
```
email: string
```
headers:
```
token: string
```

# Tokens
## Tokens - post
route: /tokens

body:
```
{
    "email": string,
    "password": string
}
```

## Tokens - get
route:
```
/tokens?id=string
```
params:
```
id: string
```
response(example):
```
{
    "email": "johntsaava@gmail.com",
    "id": "nkzj9a73o4q25n03ohx2",
    "expires": 1545581001754
}
```

## Tokens - put
route:
```
/tokens
```
body:
```
{
    "id": string,
    "extend": boolean
}
```

## Tokens - delete
route:
```
/tokens?id=string
```
params:
```
id: string
```

# Carts
## Carts - post

route: 
```
/carts?email=string
```
params:
```
email: string
```
headers:
```
token: string
```
body(example):
```
{
    "menuItems":{
    	"j1w4b635706whuarfn3w": 2
    }
}
```

## Carts - get
route:
```
/carts?email=string
```
params:
```
email: string
```
headers:
```
token: string
```
response(example):
```
{
    "j1w4b635706whuarfn3w": 7,
    "2qi4kemd4odhkbgtlbyy": 1
}
```

## Carts - put
route:
```
/carts?email=string
```
params:
```
email: string
```
headers:
```
token: string
```
body(example):
```
{
    "menuItems":{
    	"j1w4b635706whuarfn3w": 2
    }
}
```

## Carts - delete
route:
```
/carts?email=string
```
params:
```
email: string
```
headers:
```
token: string
```

# Menus

## Menus - get
route:
```
/menus?email=string
```
params:
```
email: string
```
headers:
```
token: string
```
response(example):
```
{
  "2qi4kemd4odhkbgtlbyy": {
    "name": "The Meats",
    "price": 1699
  },
  "16rmegrsx8g8e72nmcn8": {
    "name": "Cheese",
    "price": 1150
  },
  "j1w4b635706whuarfn3w": {
    "name": "Supreme",
    "price": 1600
  }
}
```

# Orders
## Orders - post

route: 
```
/orders
```
headers:
```
token: string
```
body:
```
{
    "email": string,
    "source": string
}
```

## Orders - get
route:
```
/orders?id=string
```
params:
```
id: string
```
headers:
```
token: string
```
response(example):
```
{
    "orderId": "kx6rxwvjhp1lfodtmcza",
    "email": "johntsaava@gmail.com",
    "source": "tok_visa",
    "cart": {
        "j1w4b635706whuarfn3w": 7,
        "2qi4kemd4odhkbgtlbyy": 1
    },
    "amount": 12899,
    "cartItemsDescriptions": [
        "7 Supreme $16",
        "1 The Meats $16.99"
    ]
}
```
