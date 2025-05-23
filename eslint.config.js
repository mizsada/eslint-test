import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['assets/**']),
  {
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single']
    }
  }
]);
