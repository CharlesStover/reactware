import React, { ReactElement } from 'react';
import GameProps from '../../types/game-props';
import Action from './lift.action';
import useLift from './lift.hook';
import State from './lift.state';

export default function Lift({
  dispatch,
  state: { cycle, step },
}: GameProps<State, Action>): ReactElement {
  useLift({ dispatch, step });

  return (
    <div>
      Lift {cycle} {step}
    </div>
  );
}
