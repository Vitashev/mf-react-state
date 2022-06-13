// Core libraries such as react, angular, redux, ngrx, etc. must be
// singletons. Otherwise the applications will not work together.
const coreLibraries = new Set([
  'react',
  'react-dom',
  'react-router-dom',
  '@mf-react-state/shared/data-context',
]);

module.exports = {
  name: 'shell',
  remotes: ['remote'],
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
      return defaultConfig;
    }

    // Returning false means the library is not shared.
    return false;
  },
};
