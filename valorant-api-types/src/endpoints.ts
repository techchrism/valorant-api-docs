import {fetchContentEndpoint} from './endpoints/pvp/FetchContent'
import {accountXPEndpoint} from './endpoints/pvp/AccountXP'
import {playerLoadoutEndpoint} from './endpoints/pvp/PlayerLoadout'
import {setPlayerLoadoutEndpoint} from './endpoints/pvp/SetPlayerLoadout'
import {playerMMREndpoint} from './endpoints/pvp/PlayerMMR'
import {matchHistoryEndpoint} from './endpoints/pvp/MatchHistory'
import {matchDetailsEndpoint} from './endpoints/pvp/MatchDetails'
import {competitiveUpdatesEndpoint} from './endpoints/pvp/CompetitiveUpdates'
import {leaderboardEndpoint} from './endpoints/pvp/Leaderboard'
import {penaltiesEndpoint} from './endpoints/pvp/Penalties'
import {itemUpgradesEndpoint} from './endpoints/pvp/ItemUpgrades'
import {configEndpoint} from './endpoints/pvp/Config'
import {partyEndpoint} from './endpoints/party/Party'
import {partyPlayerEndpoint} from './endpoints/party/PartyPlayer'
import {partyRemovePlayerEndpoint} from './endpoints/party/PartyRemovePlayer'
import {partySetMemberReadyEndpoint} from './endpoints/party/PartySetMemberReady'
import {refreshCompetitiveTierEndpoint} from './endpoints/party/RefreshCompetitiveTier'
import {refreshPlayerIdentityEndpoint} from './endpoints/party/RefreshPlayerIdentity'
import {refreshPingsEndpoint} from './endpoints/party/RefreshPings'
import {changeQueueEndpoint} from './endpoints/party/ChangeQueue'
import {startCustomGameEndpoint} from './endpoints/party/StartCustomGame'

export const endpoints = {
    fetchContentEndpoint,
    accountXPEndpoint,
    playerLoadoutEndpoint,
    setPlayerLoadoutEndpoint,
    playerMMREndpoint,
    matchHistoryEndpoint,
    matchDetailsEndpoint,
    competitiveUpdatesEndpoint,
    leaderboardEndpoint,
    penaltiesEndpoint,
    itemUpgradesEndpoint,
    configEndpoint,

    partyEndpoint,
    partyPlayerEndpoint,
    partyRemovePlayerEndpoint,
    partySetMemberReadyEndpoint,
    refreshCompetitiveTierEndpoint,
    refreshPlayerIdentityEndpoint,
    refreshPingsEndpoint,
    changeQueueEndpoint,
    startCustomGameEndpoint
}