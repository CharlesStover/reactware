import Step from '../types/step';

const DOWN_KEYS: string[] = ['2', 'ArrowDown', 's'];
const LEFT_KEYS: string[] = ['4', 'ArrowLeft', 'a'];
const RIGHT_KEYS: string[] = ['6', 'ArrowRight', 'd'];
const UP_KEYS: string[] = ['8', 'ArrowUp', 'w'];

export default function mapStepToTargetKeys(step: Step): string[] {
  switch (step) {
    case 0:
      return LEFT_KEYS;
    case 1:
    case 4:
      return UP_KEYS;
    case 2:
    case 5:
      return DOWN_KEYS;
    case 3:
      return RIGHT_KEYS;
  }
}
