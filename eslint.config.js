import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';

export default defineConfig([
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ClipboardJS: 'readonly',
        GLightbox: 'readonly',
        Theme: 'readonly',
        dayjs: 'readonly',
        mermaid: 'readonly',
        tocbot: 'readonly',
        importScripts: 'readonly',
        swconf: 'readonly'
      }
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single']
    }
  }
]);
