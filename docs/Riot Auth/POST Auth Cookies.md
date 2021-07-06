# POST Auth Cookies

Prepare cookies for auth request  


Method: `POST`  
URL: `https://auth.riotgames.com/api/v1/authorization`  
Headers:
 - `Content-Type`: `application/json`

Body:  
```
{"client_id":"play-valorant-web-prod","nonce":"1","redirect_uri":"https://playvalorant.com/opt_in","response_type":"token id_token"}
```
