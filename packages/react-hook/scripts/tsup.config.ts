import type { Options } from 'tsup'

export default {
  target: 'esnext',
  external: ['react-router', 'react-router-dom'],
} as Options
