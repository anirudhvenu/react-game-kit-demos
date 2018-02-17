import {combineReducers} from 'redux';
import CommonGamesData from './common-games-data';
import BotGamesData from './bot-games-data';
import PlayerGamesData from './player-games-data';
import BotCollectivesData from './bot-collectives-data';
import PlayerCollectivesData from './player-collectives-data';

const allReducers = combineReducers({
	gamesData: CommonGamesData,
	botGames: BotGamesData,
	playerGames: PlayerGamesData,
	botCollectives: BotCollectivesData,
	playerCollectives: PlayerCollectivesData
});
export default allReducers;