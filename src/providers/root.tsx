import React from 'react';

import type { PropsWithChildren } from 'react';

import ThemeProvider from './theme';
import { TRPCProvider } from './trpc';

type TRootProvider = PropsWithChildren;

export default function RootProvider({ children }: TRootProvider) {
  return (
    <ThemeProvider>
      <TRPCProvider>{children}</TRPCProvider>
    </ThemeProvider>
  );
}
