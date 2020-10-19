import React, {
  ComponentType,
  LazyExoticComponent,
  ReactElement,
  Suspense,
  useCallback,
  useMemo,
  useState,
} from 'react';
import GameComponent from '../../types/game-component';
import GameComponentFactory from '../../types/game-component-factory';
import mapComponentFactoryToLazyExoticComponent from '../../utils/map-component-factory-to-lazy-exotic-component';
import mapGameModuleToGameComponentModule from '../../utils/map-game-module-to-game-component-module';
import sortByRandom from '../../utils/sort-by-random';

interface State {
  Game: ComponentType<Record<string, void>>;
}

const GAME_COMPONENT_FACTORIES: GameComponentFactory[] = [
  () => import('../../games/lift').then(mapGameModuleToGameComponentModule),
];

const getRandomizedLazyExoticGameComponents = (): LazyExoticComponent<
  GameComponent
>[] => {
  const lazyExoticGameComponents: LazyExoticComponent<
    GameComponent
  >[] = GAME_COMPONENT_FACTORIES.map(mapComponentFactoryToLazyExoticComponent);
  return lazyExoticGameComponents.sort(sortByRandom);
};

export default function useApp(): State {
  const [gameIndex, setGameIndex] = useState(0);

  const randomizedLazyExoticGameComponents: LazyExoticComponent<
    GameComponent
  >[] = useMemo(getRandomizedLazyExoticGameComponents, []);

  const handleComplete = useCallback((): void => {
    setGameIndex((oldGameIndex: number): number => oldGameIndex + 1);
  }, []);

  const Game: ComponentType<Record<
    string,
    void
  >> = useCallback((): ReactElement => {
    const RandomLazyExoticGameComponent: LazyExoticComponent<GameComponent> =
      randomizedLazyExoticGameComponents[gameIndex];
    return (
      <Suspense fallback="Loading...">
        <RandomLazyExoticGameComponent onComplete={handleComplete} />
      </Suspense>
    );
  }, [gameIndex, handleComplete, randomizedLazyExoticGameComponents]);

  return {
    Game,
  };
}
