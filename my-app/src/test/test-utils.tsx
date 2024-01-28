import React, { ReactElement } from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, RenderOptions } from '@testing-library/react';

import '@testing-library/jest-dom';

export interface RoutingOptions {
  viewId?: string;
  path?: string;
  route?: string;
}

export interface Props {
  routing?: RoutingOptions | false;
}

const customRender: any = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'> & Props) => {
  const { path, route } = options?.routing || {};

  const wrapper = ({ children }: { children: React.ReactNode }) => { return <>{children}</> }


  const router = createMemoryRouter(
    [
      { path: path ?? route?.split('?')[0] ?? '/', element: ui },
      { path: '*', element: '' }
    ],
    { initialEntries: [route ?? '/'], initialIndex: 0 }
  );

  return {
    router, ...render(options?.routing === false ? ui : <RouterProvider router={router} />, { wrapper, ...options })
  };
};

export { customRender };
