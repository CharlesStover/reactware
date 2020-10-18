import { Dispatch, useCallback, useMemo } from 'react';
import useKeyDown from '../../hooks/use-key-down';
import Action from './lift.action';
import Step from './types/step';
import mapStepToTargetKeys from './utils/map-step-to-target-keys';

interface Props {
  dispatch: Dispatch<Action>;
  step: Step;
}

export default function useLift({ dispatch, step }: Props): void {
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
}
