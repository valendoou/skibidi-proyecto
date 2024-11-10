const path = require('path');

module.exports = {
  entry: 'App.js', // Punto de entrada de tu aplicación
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  mode: 'development', // o 'production' dependiendo del entorno
};
