# GET Store_GetOrder

Method: `GET`  
URL: `https://pd.{region}.a.pvp.net/store/v1/order/{order id}`  
Headers:
 - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`
 - `Authorization`: `Bearer {base64 encoded Riot token}`

Variables:
 - `{Riot entitlement}`: Read [Common Components - Riot Entitlement](../common-components.md#riot-entitlement)
 - `{base64 encoded Riot token}`: Read [Common Components - Riot Token](../common-components.md#riot-token)
 - `{region}`: Read [Common Components - Region](../common-components.md#region)
 - `{order id}`: The ID of the order. Can be obtained when creating an order.

