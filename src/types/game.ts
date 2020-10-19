import GameViewComponent from '../types/game-view-component';

export default interface Game<State, Action> {
  initialState: State;
  reducer(state: State, action: Action): State;
  title: string;
  View: GameViewComponent<State, Action>;
}
