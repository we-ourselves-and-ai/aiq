import Ts from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';

export default {
  input: [
    'src/index.ts',
    'src/Typography/index.ts',
    'src/Button/index.ts',
    'src/Input/index.ts',
    'src/Card/index.ts',
    'src/Popup/index.ts',
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
    svgr(),
  ],
  preserveModules: true,
  external: ['react'],
};
