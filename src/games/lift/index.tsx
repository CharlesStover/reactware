import createGame from '../../utils/create-game';
import initialState from './lift.initial-state';
import reducer from './lift.reducer';
import View from './lift.view';

export default createGame({
  initialState,
  reducer,
  View,
});
