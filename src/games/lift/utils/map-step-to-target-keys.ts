import Step from '../types/step';

export default function mapStepToTargetKeys(step: Step): string[] {
  switch (step) {
    case 0:
      return ['ArrowLeft', 'a'];
    case 1:
    case 4:
      return ['ArrowUp', 'w'];
    case 2:
    case 5:
      return ['ArrowDown', 's'];
    case 3:
      return ['ArrowRight', 'd'];
  }
}
