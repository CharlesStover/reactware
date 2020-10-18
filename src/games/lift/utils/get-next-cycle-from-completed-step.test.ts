import getNextCycleFromCompletedStep from './get-next-cycle-from-completed-step';

describe('getNextCycleFromCompletedStep', (): void => {
  it('should increment on step 5', (): void => {
    expect(getNextCycleFromCompletedStep(0, 5)).toBe(1);
    expect(getNextCycleFromCompletedStep(1, 5)).toBe(2);
  });

  it('should not increment on steps 0-4', (): void => {
    expect(getNextCycleFromCompletedStep(0, 0)).toBe(0);
    expect(getNextCycleFromCompletedStep(2, 1)).toBe(2);
    expect(getNextCycleFromCompletedStep(4, 2)).toBe(4);
    expect(getNextCycleFromCompletedStep(8, 3)).toBe(8);
    expect(getNextCycleFromCompletedStep(9, 4)).toBe(9);
  });
});
