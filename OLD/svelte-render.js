const fs = require('fs');

const designSystem = require('@metamodern/design-system');
const markdown = require('@jackfranklin/rollup-plugin-markdown');
const rollup = require('rollup');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const sugarss = require('sugarss');
const svelte = require('rollup-plugin-svelte');
const sveltePreprocess = require('svelte-preprocess');
const tailwindcss = require('tailwindcss');


const designSystemConfig = {
  rotation: -15,
};


const plugins = [
  nodeResolve(),
  commonjs(),
  markdown(),
  svelte({
  	generate: 'ssr',
    preprocess: sveltePreprocess({ 
      postcss: {
        parser: sugarss,
        plugins: [tailwindcss(designSystem(designSystemConfig))],
      },
    }),
  }),
];


const svelteRender = async (input) => {
  const bundle = await rollup.rollup({
    input,
    plugins,
  });
  
  await bundle.write({
    format: 'cjs',
    file: './temp/bundle.js',
  });

  const component = require('./temp/bundle.js');
  console.log(Object.keys(component));
  const { head, html, css } = component.render();
  
  fs.writeFileSync('./temp/head.html', head);
  fs.writeFileSync('./temp/app.html', html);
  fs.writeFileSync('./temp/app.css', css.code);
  
  console.log('done');
};


module.exports = svelteRender;