import {defineConfig} from 'vitest/config';

export default defineConfig({
                              test: {
                                globals: true,
                                environment: 'jsdom',
                                setupFiles: './setup.ts', // Ensure TestBed is initialized
                              }
                            });
