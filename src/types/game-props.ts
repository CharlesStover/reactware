export default interface GameProps<State, Action> {
  dispatch(action: Action): void;
  state: State;
}
