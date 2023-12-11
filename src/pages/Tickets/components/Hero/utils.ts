import * as React from 'react';

export function loadHandler(
  event: any,
  setProgressLoading: React.Dispatch<React.SetStateAction<number>>
) {
  const procent = Math.round((event.loaded / event.total) * 100);
  setProgressLoading(() => procent);
}
