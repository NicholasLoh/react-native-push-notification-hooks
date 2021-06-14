module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: './',
        root: ['./'],
        alias: {},
        extensions: ['.ts', '.tsx'],
      },
    ],
  ],
};
