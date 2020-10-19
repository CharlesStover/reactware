import React, { CSSProperties, ReactElement } from 'react';
import GameViewProps from '../../types/game-view-props';
import Action from './lift.action';
import useLift from './lift.hook';
import State from './lift.state';

export default function Lift({
  dispatch,
  state: { cycle, step },
}: GameViewProps<State, Action>): ReactElement {
  const style: CSSProperties = useLift({ cycle, dispatch, step });

  return <div style={style} />;
}
