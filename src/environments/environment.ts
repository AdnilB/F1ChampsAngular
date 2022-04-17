// See EnvironmentNotes.txt for info on servers
// See proxy.conf.json for all proxied servers
const mainApi = 'http://ergast.com'; 


// this is the api prefix, it depends on which wso2 server
// we are accessing the API via and how they name the API
const apiPrefix = '/api/f1';

//this UI base url, for use with systems outside this app
const uiBaseUrl = 'http://localhost:4200';
export const environment = {
    production          : false,
    API_HOST            : mainApi,
    UI_BASE_URL         : uiBaseUrl,
    API_PATH            : `${apiPrefix}`,
    ENVIRON             : 'dev',
};

