import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import AppProvider from './providers/appProvider';

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AppProvider, ...options });

export * from '@testing-library/react';
export { customRender as render };
