module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-paper/babel'], // Applies the plugin in all environments
    env: {
      production: {
        plugins: ['react-native-paper/babel'], // Also applies the plugin specifically in production
      },
    },
  };
};
