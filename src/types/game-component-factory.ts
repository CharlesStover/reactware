import GameComponent from '../types/game-component';

type GameComponentFactory = () => Promise<{ default: GameComponent }>;

export default GameComponentFactory;
