import Game from '../types/game';
import GameModule from '../types/game-module';

export default function mapGameModuleToGame<State, Action>({
  default: game,
}: GameModule<State, Action>): Game<State, Action> {
  return game;
}
