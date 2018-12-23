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
