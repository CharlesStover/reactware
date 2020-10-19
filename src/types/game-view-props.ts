export default interface GameViewProps<State, Action> {
  dispatch(action: Action): void;
  onComplete(): void;
  state: State;
}
