// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    comingSoonMode: false,
    speakers: false,
    workshops: false,
    apiBaseUrl: "https://admin-tedxunipi-2019.herokuapp.com/api/",
    startTimes: {
        session1: new Date(0, 0, 0, 11, 30),
        session2: new Date(0, 0, 0, 13, 45),
        session3: new Date(0, 0, 0, 16, 0),
        session4: new Date(0, 0, 0, 18, 15)
    }
};
