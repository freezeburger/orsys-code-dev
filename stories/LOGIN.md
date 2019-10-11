# FEATURE : SignUp

## DATA : 

> USER - Valid
```json
{
    "email":"orsys@orsys.fr",
    "password":"orsysorsys"
}
```

> STRANGER - Invalid
```json
{
    "email":"stranger@orsys.fr",
    "password":"stranger"
}
```

## OVERALL :
* IF: home return button 
* IF: global navigation home/signin/signup 
* IF: current navigation selected
* IF: page title
* IF: footer return button 
* IF: external links

> MESSAGE : 

## FEATURE :
* IF: page title "Sign in" 
* IF: alternate process navigation
* IF: initial state

> MESSAGE : 

### FEATURE : CASE DATA
* IF: initial state
* DATA: GENERIC EMAIL
* DATA: GENERIC PASSWORD
* IF: button activate

> MESSAGE : 

### FEATURE : CASE USER
* DATA: USER
* IF: process complete

> MESSAGE : 

### FEATURE : CASE STRANGER
* DATA: STRANGER
* IF: process fail

> MESSAGE : 