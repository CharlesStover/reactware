import Action from './lift.action';
import State from './lift.state';
import getNextCycleFromCompletedStep from './utils/get-next-cycle-from-completed-step';
import mapStepToNextStep from './utils/map-step-to-next-step';

export default function reducer(state: State, action: Action): State {
  switch (action) {
    case Action.CompleteStep:
      return {
        cycle: getNextCycleFromCompletedStep(state.cycle, state.step),
        step: mapStepToNextStep(state.step),
      };
  }
}
