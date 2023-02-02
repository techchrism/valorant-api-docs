import {fetchContentEndpoint} from './endpoints/pvp/FetchContent'
import {accountXPEndpoint} from './endpoints/pvp/AccountXP'
import {playerLoadoutEndpoint} from './endpoints/pvp/PlayerLoadout'
import {setPlayerLoadoutEndpoint} from './endpoints/pvp/SetPlayerLoadout'
import {playerMMREndpoint} from './endpoints/pvp/PlayerMMR'
import {matchHistoryEndpoint} from './endpoints/pvp/MatchHistory'

export const endpoints = {
    fetchContentEndpoint,
    accountXPEndpoint,
    playerLoadoutEndpoint,
    setPlayerLoadoutEndpoint,
    playerMMREndpoint,
    matchHistoryEndpoint
}