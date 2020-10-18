import { useEffect } from 'react';

export default function useKeyDown(
  callback: (event: KeyboardEvent) => void,
): void {
  useEffect((): (() => void) => {
    window.addEventListener('keydown', callback);
    return (): void => {
      window.removeEventListener('keydown', callback);
    };
  }, [callback]);
}
