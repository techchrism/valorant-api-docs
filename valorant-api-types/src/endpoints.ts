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

    partyEndpoint
}