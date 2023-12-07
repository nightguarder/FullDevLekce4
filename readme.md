# Lekce 4
## Ukol

- Deadline: 11.12.2023 23:59
- Počet bodů: 10

__Cílem tohoto úkolu implementovat token based autentizaci pomocí JWT tokenu.__

- Implementace JWT do aplikace z Ukolu 1.
- (Moznost pouzit Passport.js)
- Příklad jak JWT tokeny použít v Nodejs najdete ve složce [lesson4-jwt](../lesson4-jwt/)
- Aplikace by měla mít endpoint pro vygenerování tokenu na základě poskytnutých credentials (uživatelské jméno a heslo)
- Implementuj jeden endpoint který bude veřejně dostupný bez autentizace a druhý, který bude chráněn token based autentizací
- Pro kontrolu tokenu implementuj middleware
- Výsledek by měl mít 3 endpointy (public,protected,user) - register,login,profile

Jelikož nemáme databázi, tak uživatele pro jednoduchost nadefinuj přímo v aplikaci, např. takto:

```javascript
const users = [
    { username: "user1", password: "12345" },
    { username: "user2", password: "secure_password" }
]
```
## Notes

- Encode your token: https://jwt.io 
- Token that has a form `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZW1haWwuY29tIiwiaWQiOiI1Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzAxOTY5Njk0LCJleHAiOjE3MDE5NzMyOTR9.4eiLapv5uOwXovZcbdG_W_TiWQI_aSv8Uq-nVPzqL3s`
``

- is decoded to: 

{
  "email": "user@email.com",
  "id": "5",
  "role": "admin",
  "iat": 1701969694,
  "exp": 1701973294
}
``