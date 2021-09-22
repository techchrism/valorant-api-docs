# GET Cookie Reauth

Get a new token using the cookies from a previous authorization request  
Use the saved cookies from [Auth Request](PUT%20Auth%20Request.md). The token can be found from the url this request redirects to.  
Recommended to use this endpoint instead of storing the password and sending it again.  


Method: `GET`  
URL: `https://auth.riotgames.com/authorize?redirect_uri=https%3A%2F%2Fplayvalorant.com%2Fopt_in&client_id=play-valorant-web-prod&response_type=token%20id_token&nonce=1`  
