const esbuild = require('esbuild');
const fs = require('fs');

esbuild.buildSync({
  entryPoints: ['src/code.ts'],
  bundle: true,
  outfile: 'dist/code.js',
  format: 'cjs',
  platform: 'browser',
  target: ['chrome58']
});

fs.copyFileSync('src/ui.html', 'dist/ui.html');
console.log('Built plugin');
