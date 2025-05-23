import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';

export default defineConfig([
  js.configs.recommended,
  globalIgnores(['assets/**']),
  {
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-unused-vars': 'warn'
    }
  }
]);
