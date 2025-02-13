/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    assetsInclude: { "**/*": { glb: true } },
  },
};

export default config;
