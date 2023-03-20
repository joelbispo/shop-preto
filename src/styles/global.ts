import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    backgroundColor: '$midnightblue900',
    color: '$midnightblue100',
    '-webkit-font-smoothing': 'antialiased',
  },
  'body, input, textarea button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
})
