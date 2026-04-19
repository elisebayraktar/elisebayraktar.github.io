import { defineConfig } from 'vite-plus'

export default defineConfig({
  staged: { '*': 'vp check --fix' },
  lint: {
    options: { typeAware: true, typeCheck: true },
    plugins: ['typescript', 'react', 'unicorn'],
    categories: {
      correctness: 'error',
      suspicious: 'error',
      perf: 'error',
      style: 'error',
    },
    env: {
      builtin: true,
      browser: true,
      commonjs: true,
      node: true,
      'shared-node-browser': true,
    },
    ignorePatterns: ['**/*.js', '**/*.astro', '**/dist/**', '**/build/**', '**/.astro/**', '**/*.d.ts'],
    rules: {
      // Restriction
      'default-case': 'error',
      'no-empty': 'error',
      'no-empty-function': 'error',
      'no-console': 'error',
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'no-explicit-any': 'error',
      'no-non-null-assertion': 'error',
      'no-array-for-each': 'error',
      'prefer-modern-math-apis': 'error',
      'prefer-number-properties': 'error',

      // Suspicious
      'react-in-jsx-scope': 'off',
      'no-unneeded-ternary': 'off',
      'style-prop-object': 'off',
      'no-unsafe-type-assertion': 'off',
      'react/jsx-no-constructed-context-values': 'off',

      // Pedantic
      'no-deprecated': 'error',

      // Style
      'prefer-template': 'error',
      'jsx-curly-brace-presence': 'error',
      'filename-case': [
        'error',
        {
          cases: { kebabCase: true, pascalCase: true },
          ignore: '\\[.+\\]\\.tsx',
        },
      ],
      'prefer-default-export': 'off',
      'no-magic-numbers': 'off',
      'sort-imports': 'off',
      'sort-keys': 'off',
      'id-length': ['error', { exceptions: ['v', 'T'] }],
      'no-ternary': 'off',
      'no-duplicate-imports': 'off',
      'max-params': 'off',
      'jsx-max-depth': 'off',
      'jsx-props-no-spreading': 'off',
      'max-statements': 'off',
      'no-null': 'off',
    },
  },
  fmt: {
    trailingComma: 'es5',
    semi: false,
    singleQuote: true,
    printWidth: 150,
    experimentalSortImports: {},
    experimentalTailwindcss: {
      stylesheet: 'src/index.css',
    },
  },
  resolve: {
    tsconfigPaths: true,
  },
})
