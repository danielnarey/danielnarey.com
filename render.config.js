import sveltePreprocess from 'svelte-preprocess';
import markdownPlugin from '@mheedev/rollup-plugin-markdown';
import sugarss from 'sugarss';
import postcssEasyImport from 'postcss-easy-import';
import tailwindcss from 'tailwindcss';
import designSystem from '@metamodern/design-system';
import copyTypefaces from '@metamodern/copy-typefaces';


const config = {
  sveltePreprocess: sveltePreprocess({ 
    postcss: {
      parser: sugarss,
      plugins: [
        postcssEasyImport({ extensions: ['.css', '.sss'] }),
        tailwindcss(designSystem({ rotation: -15 })),
      ],
    },
  }),
  rollupInputPlugins: [
    markdownPlugin(),
  ],
  onRender: (context, options) => copyTypefaces(context, options),
};


export default config;
