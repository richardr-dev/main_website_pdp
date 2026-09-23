import nextVitals from 'eslint-config-next/core-web-vitals'

export default [
  ...nextVitals,
  { ignores: ['src/**', 'dist/**', '.next/**', 'node_modules/**'] },
]
