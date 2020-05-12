// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiURL : 'https://ntry.moj.gov.om/',
    // apiURL : 'https://tstntry.moj.gov.om/',
  apiURL : 'http://192.168.0.45:7400/',
  // ROPURL : 'http://192.168.0.47:888/QueryROP.ashx',
   ROPURL : 'https://ews.moj.gov.om/QueryROP.ashx',
  asmxURL: 'http://192.168.0.47:8001/',
   PORTAL_BASE_URL: 'https://iwsstg.moj.gov.om/PortalWebService.asmx/',
 // PORTAL_BASE_URL: 'http://192.168.0.47:8001/PortalWebService.asmx/',
  paymentURLService: 'https://192.168.0.47:888/pay.ashx', // url param (amount)
  paymentURLServiceMok: 'http://192.168.0.47:888/pay.ashx', // url param (amount)
  INTG_MOSD_URL: 'http://192.168.0.47:888/QueryMOSD.ashx', // url param (civilid)
  INTG_MOCI_URL: 'http://192.168.42.30:7100/sak2/service/integration/moci/companyData/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
