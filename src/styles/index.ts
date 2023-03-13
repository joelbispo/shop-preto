import { createStitches } from '@stitches/react'

export const { styled, css, globalCss, keyframes, getCssText, theme, config } =
  createStitches({
    theme: {
      colors: {
        white: '#ffffff',
        red500: '#AB222E',
        red700: '#7A1921',

        gray100: '#E1E1E6',
        gray300: '#C4C4CC',
        gray400: '#8D8D99',
        gray500: '#7C7C8A',
        gray600: '#323238',
        gray700: '#29292E',
        gray800: '#202024',
        gray900: '#121214',

        green300: '#5AECC1',
        green500: '#00B38B',
        green700: '#007D59',

        yellow500: '#FBA94C',

        midnightblue100: '#CDCAF9',
        midnightblue300: '#9D9BC8',
        midnightblue400: '#CDCAF9',
        midnightblue600: '#716F99',
        midnightblue700: '#46466D',
        midnightblue800: '#1E2144',
        midnightblue900: '#000025',

        sandybrown: '#FFB55D',
        tomato: '#E57A66',
        yellow: '#F9F871',
      },
      fontSizes: {
        md: '1.125rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },
    },
  })
