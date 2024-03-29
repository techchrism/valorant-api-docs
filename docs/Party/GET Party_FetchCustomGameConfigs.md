<!--

This file is automatically generated!
Do not edit it directly!
See https://github.com/techchrism/valorant-api-docs/blob/trunk/contributing.md for more information.

-->

# These markdown docs are deprecated and will no longer be updated. They remain here to prevent broken links.
## Visit <https://valapidocs.techchrism.me/endpoint/custom-game-configs> for the latest documentation (and update your links if possible)
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
# GET Party_FetchCustomGameConfigs

Get information about the available gamemodes  


Method: `GET`  
URL: `https://glz-{region}-1.{shard}.a.pvp.net/parties/v1/parties/customgameconfigs`  
Headers:
 - `X-Riot-ClientVersion`: `{client version}`
 - `X-Riot-ClientPlatform`: `{client platform}`

Variables:
 - `{client version}`: Read [Common Components - Client Version](../common-components.md#client-version)
 - `{client platform}`: Read [Common Components - Client Platform](../common-components.md#client-platform)
 - `{region}`: Read [Common Components - Region](../common-components.md#region)
 - `{shard}`: Read [Common Components - Shard](../common-components.md#shard)


### Response Format:
```ts
type CustomGameConfigsResponse = {
    Enabled: boolean;
    EnabledMaps: string[];
    EnabledModes: string[];
    Queues: {
        /** Queue ID */
        QueueID: string;
        Enabled: boolean;
        TeamSize: number;
        NumTeams: number;
        MaxPartySize: number;
        MinPartySize: number;
        InvalidPartySizes: number[];
        MaxPartySizeHighSkill: number;
        HighSkillTier: number;
        MaxSkillTier: number;
        AllowFullPartyBypassSkillRestrictions: boolean;
        Mode: string;
        IsRanked: boolean;
        IsTournament: boolean;
        RequireRoster: boolean;
        Priority: number;
        PartyMaxCompetitiveTierRange: number;
        PartyMaxCompetitiveTierRangePlacementBuffer: number;
        FullPartyMaxCompetitiveTierRange: number;
        PartySkillDisparityCompetitiveTiersCeilings: {
            [x: string]: number;
        };
        UseAccountLevelRequirement: boolean;
        MinimumAccountLevelRequired: number;
        GameRules: {
            [x: string]: string;
        };
        SupportedPlatformTypes: "PC"[];
        DisabledContent: unknown[];
        queueFieldA: unknown[];
        NextScheduleChangeSeconds: number;
        TimeUntilNextScheduleChangeSeconds: number;
        /** Array of strings in the format of "map:weight" */
        MapWeights: string[];
    }[];
    GamePodPingServiceInfo: {
        [x: string]: {
            SecurityHash: number;
            ObfuscatedIP: number;
            PingProxyAddress: string;
            PingProxyAddresses: string[];
        };
    };
};
```
