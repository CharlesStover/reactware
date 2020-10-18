import React, { ComponentType, ReactElement, Reducer, useReducer } from 'react';
import GameProps from '../types/game-props';

interface Game<State, Action> {
  initialState: State;
  reducer(state: State, action: Action): State;
  View: ComponentType<GameProps<State, Action>>;
}

export default function createGame<State, Action>({
  initialState,
  reducer,
  View,
}: Game<State, Action>): ComponentType<Record<string, void>> {
  return function Game(): ReactElement {
    const [state, dispatch] = useReducer<Reducer<State, Action>>(
      reducer,
      initialState,
    );

    return <View dispatch={dispatch} state={state} />;
  };
}
