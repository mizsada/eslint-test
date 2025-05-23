import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';

export default defineConfig([
  js.configs.recommended,
  globalIgnores(['eslint-ignore/**']),
  {
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single']
    }
  }
]);
