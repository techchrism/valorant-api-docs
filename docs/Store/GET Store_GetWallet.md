<!--

This file is automatically generated!
Do not edit it directly!
See https://github.com/techchrism/valorant-api-docs/blob/trunk/contributing.md for more information.

-->

# These markdown docs are deprecated and will no longer be updated. They remain here to prevent broken links.
## Visit <https://valapidocs.techchrism.me/endpoint/wallet> for the latest documentation (and update your links if possible)
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
# GET Store_GetWallet

Get amount of Valorant points and Radianite the player has  
Valorant points have the id `85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741` and Radianite points have the id `e59aa87c-4cbf-517a-5983-6e81511be9b7`  


Method: `GET`  
URL: `https://pd.{shard}.a.pvp.net/store/v1/wallet/{puuid}`  
Headers:
 - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`
 - `Authorization`: `Bearer {Riot token}`

Variables:
 - `{Riot entitlement}`: Read [Common Components - Riot Entitlement](../common-components.md#riot-entitlement)
 - `{Riot token}`: Read [Common Components - Riot Token](../common-components.md#riot-token)
 - `{shard}`: Read [Common Components - Shard](../common-components.md#shard)
 - `{puuid}`: Read [Common Components - PUUID](../common-components.md#puuid)


### Response Format:
```ts
type WalletResponse = {
    Balances: {
        [x: string]: number;
    };
};
```
