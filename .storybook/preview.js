export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

import React from 'react'
import {addDecorator} from '@storybook/react'
import {ThemeProvider, CSSReset} from '@chakra-ui/core'

addDecorator((storyFn) => (
  <ThemeProvider>
    <CSSReset />
    {storyFn()}
  </ThemeProvider>
))