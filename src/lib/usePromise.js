import { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps) {
  // Req state management
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    })();
    // eslint-disable-next-line
  }, deps);
  return [loading, resolved, error];
}
