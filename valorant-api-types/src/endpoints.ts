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
import {itemUpgradesEndpoint} from './endpoints/contracts/ItemUpgrades'
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
import {enterMatchmakingQueueEndpoint} from './endpoints/party/EnterMatchmakingQueue'
import {leaveMatchmakingQueueEndpoint} from './endpoints/party/LeaveMatchmakingQueue'
import {setPartyAccessibilityEndpoint} from './endpoints/party/SetPartyAccessibility'
import {setCustomGameSettingsEndpoint} from './endpoints/party/SetCustomGameSettings'
import {partyInviteEndpoint} from './endpoints/party/PartyInvite'
import {partyRequestEndpoint} from './endpoints/party/PartyRequest'
import {partyDeclineEndpoint} from './endpoints/party/PartyDecline'
import {customGameConfigsEndpoint} from './endpoints/party/CustomGameConfigs'
import {partyChatTokenEndpoint} from './endpoints/party/PartyChatToken'
import {partyVoiceTokenEndpoint} from './endpoints/party/PartyVoiceToken'
import {pricesEndpoint} from './endpoints/store/Prices'
import {storefrontEndpoint} from './endpoints/store/Storefront'
import {walletEndpoint} from './endpoints/store/Wallet'
import {ownedItemsEndpoint} from './endpoints/store/OwnedItems'
import {pregamePlayerEndpoint} from './endpoints/pregame/PregamePlayer'
import {pregameMatchEndpoint} from './endpoints/pregame/PregameMatch'
import {pregameLoadoutsEndpoint} from './endpoints/pregame/PregameLoadouts'
import {selectCharacterEndpoint} from './endpoints/pregame/SelectCharacter'
import {lockCharacterEndpoint} from './endpoints/pregame/LockCharacter'
import {pregameQuitEndpoint} from './endpoints/pregame/PregameQuit'
import {currentGamePlayerEndpoint} from './endpoints/currentgame/CurrentGamePlayer'
import {currentGameMatchEndpoint} from './endpoints/currentgame/CurrentGameMatch'
import {currentGameLoadoutsEndpoint} from './endpoints/currentgame/CurrentGameLoadouts'
import {currentGameQuitEndpoint} from './endpoints/currentgame/CurrentGameQuit'
import {contractsEndpoint} from './endpoints/contracts/Contracts'
import {activateContractEndpoint} from './endpoints/contracts/ActivateContract'
import {localHelpEndpoint} from './endpoints/local/LocalHelp'
import {sessionsEndpoint} from './endpoints/local/Sessions'
import {rsoUserInfoEndpoint} from './endpoints/local/RSOUserInfo'
import {clientRegionEndpoint} from './endpoints/local/ClientRegion'
import {accountAliasEndpoint} from './endpoints/local/AccountAlias'
import {entitlementsTokenEndpoint} from './endpoints/local/EntitlementsToken'
import {chatSessionEndpoint} from './endpoints/local/ChatSession'
import {friendsEndpoint} from './endpoints/local/Friends'
import {presenceEndpoint} from './endpoints/local/Presence'
import {settingsEndpoint} from './endpoints/local/Settings'
import {friendRequestsEndpoint} from './endpoints/local/FriendRequests'
import {partyChatInfoEndpoint} from './endpoints/local/chat/PartyChatInfo'
import {pregameChatInfoEndpoint} from './endpoints/local/chat/PregameChatInfo'
import {currentGameChatInfoEndpoint} from './endpoints/local/chat/CurrentGameChatInfo'
import {allChatInfoEndpoint} from './endpoints/local/chat/AllChatInfo'
import {chatParticipantsEndpoint} from './endpoints/local/chat/ChatParticipants'
import {sendChatEndpoint} from './endpoints/local/chat/SendChat'
import {chatHistoryEndpoint} from './endpoints/local/chat/ChatHistory'

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
    configEndpoint,

    partyEndpoint,
    partyPlayerEndpoint,
    partyRemovePlayerEndpoint,
    partySetMemberReadyEndpoint,
    refreshCompetitiveTierEndpoint,
    refreshPlayerIdentityEndpoint,
    refreshPingsEndpoint,
    changeQueueEndpoint,
    startCustomGameEndpoint,
    enterMatchmakingQueueEndpoint,
    leaveMatchmakingQueueEndpoint,
    setPartyAccessibilityEndpoint,
    setCustomGameSettingsEndpoint,
    partyInviteEndpoint,
    partyRequestEndpoint,
    partyDeclineEndpoint,
    customGameConfigsEndpoint,
    partyChatTokenEndpoint,
    partyVoiceTokenEndpoint,

    pricesEndpoint,
    storefrontEndpoint,
    walletEndpoint,
    ownedItemsEndpoint,

    pregamePlayerEndpoint,
    pregameMatchEndpoint,
    pregameLoadoutsEndpoint,
    selectCharacterEndpoint,
    lockCharacterEndpoint,
    pregameQuitEndpoint,

    currentGamePlayerEndpoint,
    currentGameMatchEndpoint,
    currentGameLoadoutsEndpoint,
    currentGameQuitEndpoint,

    itemUpgradesEndpoint,
    contractsEndpoint,
    activateContractEndpoint,

    localHelpEndpoint,
    sessionsEndpoint,
    rsoUserInfoEndpoint,
    clientRegionEndpoint,
    accountAliasEndpoint,
    entitlementsTokenEndpoint,
    chatSessionEndpoint,
    friendsEndpoint,
    presenceEndpoint,
    settingsEndpoint,
    friendRequestsEndpoint,

    partyChatInfoEndpoint,
    pregameChatInfoEndpoint,
    currentGameChatInfoEndpoint,
    allChatInfoEndpoint,
    chatParticipantsEndpoint,
    sendChatEndpoint,
    chatHistoryEndpoint
}