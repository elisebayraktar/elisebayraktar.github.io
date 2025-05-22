// @ts-check

import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import perfectionist from 'eslint-plugin-perfectionist'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import unicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const sortRules = {
  customGroups: {
    bottom: ['^createdAt$', '^orderBy$'],
    top: ['^.*[Ii]d$', '.*[Ee]mail$', '^.*[Nn]ame$'],
  },
  groups: ['top', ['method', 'unknown', 'multiline'], 'bottom'],
}

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  react.configs.flat?.recommended,
  react.configs.flat?.['jsx-runtime'],
  perfectionist.configs['recommended-natural'],
  {
    languageOptions: {
      ...react.configs.flat?.recommended.languageOptions,
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.mjs', 'apps/intranet/*.cjs', 'apps/admin/*.cjs'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@unicorn': unicorn,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/only-throw-error': 'off',
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/unbound-method': 'off',

      '@unicorn/filename-case': [
        'error',
        {
          cases: {
            kebabCase: true,
          },
        },
      ],
      'no-console': 'error',

      'perfectionist/sort-interfaces': ['error', sortRules],
      'perfectionist/sort-objects': ['error', { ...sortRules, partitionByNewLine: true }],

      'prefer-template': 'error',

      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',

      'react-refresh/only-export-components': ['error', { allowConstantExport: true }],
      'react/jsx-curly-brace-presence': ['error', 'never'],

      'react/prop-types': 'off',

      'tailwindcss/no-custom-classname': 'off',
    },
    settings: { react: { version: 'detect' } },
  },
  {
    ignores: ['**/*.js', '**/dist/**'],
  },
  prettierConfig
)
