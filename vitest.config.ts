import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    // Тесты написаны на глобальных describe/test/expect, как их инжектил jest.
    // Без этого флага каждый файл пришлось бы начинать импортом из 'vitest'.
    // Раннер-тесты этим же и живут: у них ушёл import из 'node:test', а
    // assert из node:assert/strict остался — vitest считает провалом любое
    // брошенное исключение, поэтому библиотека проверок ему безразлична.
    globals: true,

    /**
     * Только тесты бэкенда.
     *
     * По умолчанию vitest забирает **\/*.test.ts от корня репозитория — то есть
     * и frontend/src, у которого свой конфиг (jsdom, setupFiles, svgr).
     */
    include: ['src/**/*.test.ts'],
    exclude: ['**/node_modules/**'],
  },
});
