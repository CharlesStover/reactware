import Game from '../../types/game';
import Action from './lift.action';
import initialState from './lift.initial-state';
import reducer from './lift.reducer';
import State from './lift.state';
import View from './lift.view';

const lift: Game<State, Action> = {
  initialState,
  reducer,
  title: 'Lift',
  View,
};

export default lift;
