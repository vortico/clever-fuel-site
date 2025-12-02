import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    ignores: ['*.config.[mc]js', 'node_modules/**', '.next/**', 'public/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
]

export default eslintConfig
