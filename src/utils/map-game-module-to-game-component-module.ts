import Game from '../types/game';
import GameComponent from '../types/game-component';
import GameComponentModule from '../types/game-component-module';
import GameModule from '../types/game-module';
import mapGameModuleToGame from '../utils/map-game-module-to-game';
import mapGameToGameComponent from '../utils/map-game-to-game-component';

export default function mapGameModuleToGameComponent<State, Action>(
  gameModule: GameModule<State, Action>,
): GameComponentModule {
  const game: Game<State, Action> = mapGameModuleToGame(gameModule);
  const gameComponent: GameComponent = mapGameToGameComponent(game);
  return {
    default: gameComponent,
  };
}
