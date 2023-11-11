import { babel } from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json' assert { type: 'json' };

export default {
  input:'src/index.ts',
  output:[
    {
      file:pkg.main,
      sourcemap:true,
      format:'esm',
    },
    {
      file:pkg.module,
      sourcemap:true,
      format:'cjs',
    }
  ],
  external: ['react', 'react-dom'],
  plugins:[
    commonjs(),
    nodeResolve(),
    typescript({useTsconfigDeclarationDir:true,tsconfig:'./tsconfig.json'}),
    babel({
      babelHelpers:'bundled',
      exclude: 'node_modules/**/*.(ts|tsx|js|jsx)',
      include: 'src/**/*.(ts|tsx|js|jsx)',
      extensions:['.ts','.tsx','.js','.jsx','.mjs']
    })
  ]
}