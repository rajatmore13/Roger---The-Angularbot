// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
     firebaseConfig : {
    apiKey: "AIzaSyBVQJO6esx-7CtXejnr4weP6aJUJ-OczaI",
    authDomain: "angularbot-mtrodt.firebaseapp.com",
    databaseURL: "https://angularbot-mtrodt.firebaseio.com",
    projectId: "angularbot-mtrodt",
    storageBucket: "angularbot-mtrodt.appspot.com",
    messagingSenderId: "906957605000",
    appId: "1:906957605000:web:6405a713df030625"
  },

  dialogflow: {
    angularBot:'b099bee939b042ef942a96776d4d3c67'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
