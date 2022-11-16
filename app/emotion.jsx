'use client';

import { CacheProvider } from '@emotion/react';
import { useEmotionCache, MantineProvider, createEmotionCache } from '@mantine/core';
import { useServerInsertedHTML } from 'next/navigation';

export default function RootStyleRegistry({ children }) {
  // const cache = useEmotionCache()
  const cache = createEmotionCache({key:'mantine', prepend: false })
  
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {children}
      </MantineProvider>
    </CacheProvider>
  );
}