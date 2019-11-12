// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  // THIS ARE TESTING CONFIG! DONT USE THAT IN PROD! CHANGE THAT!
  apiUrl: 'http://localhost:59681',
  googleMapsApiKey: 'AIzaSyCFHGZc24jeislm2PLS8AJZNxFgVo569TM',
  i18n: {
    defaultLanguage: 'fi',
    languagesAvailable: ['fi', 'en'],
  },
  mapZoom: 16,
  production: false,
  silent: false,
  hmr: true,
  showMiniProfilerResults: true
};
