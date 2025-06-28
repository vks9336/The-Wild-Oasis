import { useEffect, useRef } from 'react';

export function useModal({ close, listenCapturing = true }) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          close();
          console.log('alidfhos');
        }
      }

      document.addEventListener('click', handleClick, listenCapturing);

      return () =>
        document.removeEventListener('click', handleClick, listenCapturing);
    },
    [close, listenCapturing],
  );

  return ref;
}
