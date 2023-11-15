// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: true,
    api: {
        socket: 'http://localhost:3000',
        base: 'http://localhost:3000',
        app: 'http://localhost:3000/admin',
    },
    aws:{
        //s3: "https://d1z2uacqs2pc15.cloudfront.net"
        s3: "https://s3.amazonaws.com/cdn.infact.dev"
        //s3: "http://localhost:3000/files"
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
