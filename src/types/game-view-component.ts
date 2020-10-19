import { ComponentType } from 'react';
import GameViewProps from '../types/game-view-props';

type GameViewComponent<State, Action> = ComponentType<
  GameViewProps<State, Action>
>;

export default GameViewComponent;
