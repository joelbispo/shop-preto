import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$midnightblue100',
  },

  p: {
    fontSize: '$xl',
    color: '$midnightblue300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
  },
  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$midnightblue600',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$midnightblue300',
    },
  },
})

export const ImageContainer = styled('div', {
  with: '100%',
  minWidht: 130,
  height: 145,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 0,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  jistifyContent: 'center',
  marginTop: '4rem',

  img: {
    objectFit: 'cover',
  },
})
