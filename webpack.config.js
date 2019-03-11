export const entry = './app/assets/frontend/main.jsx';
export const output = {
  path: __dirname + '/app/assets/javascripts',
  filename: 'bundle.js'
};
export const resolve = {
  extensions: ['.tsx', '.js', '.jsx']
};
export const module = {
  rules: [
    {
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        cacheDirectory: true,
        presets: ['react', 'es2015']
      }
    }
  ]
};
