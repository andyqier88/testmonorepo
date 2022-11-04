import { defineConfig } from 'vite';

import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({

  build: {
    //minify: false,
    lib: {
      entry: resolve('index.js'),
      name: 'index',
      fileName: (format) => `index.${format}.js`,
    }
  },
});
