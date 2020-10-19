import { CSSProperties, Dispatch, useCallback, useMemo } from 'react';
import useKeyDown from '../../hooks/use-key-down';
import spritesheet from './images/spritesheet.gif';
import Action from './lift.action';
import Step from './types/step';
import mapStepToTargetKeys from './utils/map-step-to-target-keys';

interface Props {
  cycle: number;
  dispatch: Dispatch<Action>;
  step: Step;
}

const SPRITE_SHEET_HEIGHT = 49;
const SPRITE_SHEET_WIDTH = 145;

function mapCycleToScale(cycle: number): number {
  return 1 + Math.log(cycle + 1);
}

function mapStepToBackgroundPosition(step: Step): number[] {
  switch (step) {
    case 0:
    case 1:
    case 3:
    case 4:
      return [-1, -1];
    case 2:
      return [-49, -1];
    case 5:
      return [-97, -1];
  }
}

export default function useLift({
  cycle,
  dispatch,
  step,
}: Props): CSSProperties {
  const targetKeys: string[] = useMemo(
    (): string[] => mapStepToTargetKeys(step),
    [step],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent): void => {
      if (targetKeys.includes(e.key)) {
        dispatch(Action.CompleteStep);
      }
    },
    [dispatch, targetKeys],
  );

  useKeyDown(handleKeyDown);

  return useMemo((): CSSProperties => {
    const [x, y] = mapStepToBackgroundPosition(step);
    const scale: number = mapCycleToScale(cycle);
    const scaledPositionX: number = Math.round(x * scale);
    const scaledPositionY: number = Math.round(y * scale);
    const scaledSizeHeight: number = Math.round(SPRITE_SHEET_HEIGHT * scale);
    const scaledSizeWidth: number = Math.round(SPRITE_SHEET_WIDTH * scale);
    return {
      backgroundImage: `url("${spritesheet}")`,
      backgroundPosition: `${scaledPositionX}px ${scaledPositionY}px`,
      backgroundSize: `${scaledSizeWidth}px ${scaledSizeHeight}px`,
      height: Math.floor(47 * scale),
      width: Math.floor(47 * scale),
    };
  }, [cycle, step]);
}
