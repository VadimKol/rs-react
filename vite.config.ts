import { vitePlugin as remix } from '@remix-run/dev';
import react from '@vitejs/plugin-react';
import path from 'path';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';
import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    !process.env.VITEST
      ? remix({
          appDirectory: 'src/app',
          ignoredRouteFiles: ['**/*.scss'],
          buildDirectory: 'dist',
        })
      : react(),
    tsconfigPaths(),
    checker({
      typescript: true,
      stylelint: {
        lintCommand: 'stylelint ./src/**/*.{css,scss} --quiet-deprecation-warnings',
      },
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  test: {
    coverage: {
      exclude: [...coverageConfigDefaults.exclude, '**/types.ts', 'postcss.config.cjs', '**/mocks/**'],
      reporter: ['text', 'text-summary'],
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/tests/setuptests.ts'],
  },
});
