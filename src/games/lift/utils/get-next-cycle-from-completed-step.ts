import Step from '../types/step';

export default function getNextCycleFromCompletedStep(
  cycle: number,
  step: Step,
): number {
  if (step === 5) {
    return cycle + 1;
  }
  return cycle;
}
