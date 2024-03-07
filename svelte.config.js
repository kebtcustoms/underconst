import adapter from '@sveltejs/adapter-node';
// import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

const config = {
	extensions: ['.svelte', '.svx'],
	
	kit: {
	  // By default, `adapter-node` generates a server for Node.js environments
	  adapter: adapter({
		// options are optional
		out: 'build', // A string specifying the directory to build the server files to
		precompress: false, // A boolean indicating whether to precompress (with gzip and brotli) the assets in the `static` directory
		envPrefix: 'PUBLIC_' // A string specifying the environment variable prefix used to replace environment variables in the `env` option during build
	  }),
  
	  // Define other kit options here, if necessary
	},
  
	preprocess: [
	  mdsvex({
		extension: '.svx'
	  })
	],
  };
export default config;
