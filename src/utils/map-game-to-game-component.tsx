import React, { ReactElement, Reducer, useReducer } from 'react';
import Game from '../types/game';
import GameComponent from '../types/game-component';
import GameProps from '../types/game-props';

export default function mapGameToGameComponent<State, Action>({
  initialState,
  reducer,
  View,
}: Game<State, Action>): GameComponent {
  return function Game({ onComplete }: GameProps): ReactElement {
    const [state, dispatch] = useReducer<Reducer<State, Action>>(
      reducer,
      initialState,
    );

    return <View dispatch={dispatch} onComplete={onComplete} state={state} />;
  };
}
