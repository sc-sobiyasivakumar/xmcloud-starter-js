'use client';
import { useCallback } from 'react';
import { useRouter as usePagesRouter } from 'next/router';
import { useDebouncedCallback } from './useDebounce';

export const useRouter = () => {
  const router = usePagesRouter();

  const setRouterQuery = useCallback(
    (value: string) => {
      const nextQuery = { ...router.query };
      if (value) {
        nextQuery.q = value;
      } else {
        delete nextQuery.q;
      }
      void router.replace({ pathname: router.pathname, query: nextQuery }, undefined, {
        shallow: true,
      });
    },
    [router]
  );

  const debouncedSetRouterQuery = useDebouncedCallback(setRouterQuery);

  const setQuery = useCallback(
    (value: string, debounced: boolean = true) => {
      if (debounced) {
        debouncedSetRouterQuery(value);
      } else {
        setRouterQuery(value);
      }
    },
    [debouncedSetRouterQuery, setRouterQuery]
  );

  return { setRouterQuery: setQuery };
};
