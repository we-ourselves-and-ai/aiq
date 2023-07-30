import Ts from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';

export default {
  input: [
    'src/index.ts',
    'src/Typography/index.ts',
    'src/Button/index.ts',
    // other component from src TODO: later make function,
  ],
  output: {
    dir: 'lib',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    Ts(),
    postcss({
      extensions: ['.css'],
    }),
  ],
  preserveModules: true,
  external: ['react'],
};
