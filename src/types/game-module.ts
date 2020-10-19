import Game from '../types/game';

export default interface GameModule<State, Action> {
  default: Game<State, Action>;
}
