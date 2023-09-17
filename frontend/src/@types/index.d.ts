import 'styled-components';

import { ThemeDefault } from '../assets/themes/themeDefault';

type TypeThemeDefault = typeof ThemeDefault;

declare module 'styled-components' {
  export interface DefaultTheme extends TypeThemeDefault {}
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
}

declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.svg';
