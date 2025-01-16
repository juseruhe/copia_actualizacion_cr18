// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  prefix: 'CABIM-',
  backendHost: 'http://localhost:3000/',
  api: 'http://localhost:3000/api/v1',
  simulation: false,
  simulation_time: 500,
  KNOWLEDGE_MONTH: 6,
  reCaptchaSiteKey: '6LcdP9AZAAAAALihtfeOLAYdzkf3vWj-VY5hi-I2'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
