# Endpoint Data Format

 - `name`  
    Required string representing the endpoint name
 - `description`  
    Optional string for the endpoint description. Newlines are allowed.
 - `folder`  
    Optional string for a folder name. Subfolders can be denoted with forward slashes.
 - `url`  
    Required string for the endpoint url. Variables are surrounded by curly brackets (`{variable}`)
 - `method`  
    Required string for the http method
 - `body`  
    Optional string with body data for requests
 - `extraHeaders`  
    Optional array with any additional headers needed for the request. Array is comprised of objects with "name" and "value" properties.
 - `typicalAuth`  
    Optional boolean value for whether to include the `X-Riot-Entitlements-JWT` and Bearer authorization headers.
 - `localAuth`  
    Optional boolean value for whether to include the Basic authorization headers for the local api.
 - `requiresClientVersion`  
    Optional boolean value for the inclusion of the `X-Riot-ClientVersion` header
 - `requiresClientPlatform`  
    Optional boolean value for the inclusion of the `X-Riot-ClientPlatform` header
 - `uniqueVariableDescription`  
    Optional object to describe any variables that are not on the common components list.
