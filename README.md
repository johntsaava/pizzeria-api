# pizzeria-api
Homework Assignment #2

# Users
## post

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

## get
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

## put
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

## delete
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
## post
route: /tokens

body:
```
{
    "email": string,
    "password": string
}
```

## get
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

## put
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

## delete
route:
```
/tokens?id=string
```
params:
```
id: string
```

# Carts
## post

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

## get
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

## put
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

## delete
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

## get
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
## post

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

## get
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
