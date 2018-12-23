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
firstName: string  
lastName: string
email: string
password: string
address: string
tosAgreement: boolean
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
response:
```
firstName: string  
lastName: string
email: string
address: string
tosAgreement: boolean
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
email: string
```
*Optional data (at least one must be specified)*
```
firstName: string  
lastName: string
password: string
address: string
tosAgreement: boolean
```
response:
```
firstName: string  
lastName: string
email: string
address: string
tosAgreement: boolean
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
email: string
password: string
```
response:
```
email: string,
id: string,
expires: number
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

## put
route:
```
/tokens
```
body:
```
id: string
extend: boolean
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
body:
```
menuItems: {string: number, string: number}
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
response:
```
{
  string: number,
  string: number
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
body:
```
menuItems: {string: number, string: number}
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
