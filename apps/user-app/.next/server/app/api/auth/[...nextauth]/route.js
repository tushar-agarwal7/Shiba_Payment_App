"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Ftushar%2Fcoding%2Fprojects%2FShiba_Payment_App%2Fapps%2Fuser-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Ftushar%2Fcoding%2Fprojects%2FShiba_Payment_App%2Fapps%2Fuser-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Ftushar%2Fcoding%2Fprojects%2FShiba_Payment_App%2Fapps%2Fuser-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Ftushar%2Fcoding%2Fprojects%2FShiba_Payment_App%2Fapps%2Fuser-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/../../node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/../../node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/../../node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_tushar_coding_projects_Shiba_Payment_App_apps_user_app_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/home/tushar/coding/projects/Shiba_Payment_App/apps/user-app/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _home_tushar_coding_projects_Shiba_Payment_App_apps_user_app_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyLmpzP25hbWU9YXBwJTJGYXBpJTJGYXV0aCUyRiU1Qi4uLm5leHRhdXRoJTVEJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZS50cyZhcHBEaXI9JTJGaG9tZSUyRnR1c2hhciUyRmNvZGluZyUyRnByb2plY3RzJTJGU2hpYmFfUGF5bWVudF9BcHAlMkZhcHBzJTJGdXNlci1hcHAlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmhvbWUlMkZ0dXNoYXIlMkZjb2RpbmclMkZwcm9qZWN0cyUyRlNoaWJhX1BheW1lbnRfQXBwJTJGYXBwcyUyRnVzZXItYXBwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2dEO0FBQzdIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLz8yMGYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9ob21lL3R1c2hhci9jb2RpbmcvcHJvamVjdHMvU2hpYmFfUGF5bWVudF9BcHAvYXBwcy91c2VyLWFwcC9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS90dXNoYXIvY29kaW5nL3Byb2plY3RzL1NoaWJhX1BheW1lbnRfQXBwL2FwcHMvdXNlci1hcHAvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Ftushar%2Fcoding%2Fprojects%2FShiba_Payment_App%2Fapps%2Fuser-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Ftushar%2Fcoding%2Fprojects%2FShiba_Payment_App%2Fapps%2Fuser-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/../../node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/auth */ \"(rsc)/./app/lib/auth.ts\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnQztBQUNlO0FBRy9DLE1BQU1FLFVBQVVGLGdEQUFRQSxDQUFDQyxrREFBV0E7QUFFTSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzP2M4YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2F1dGhcIlxuXG5cbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucylcblxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9Il0sIm5hbWVzIjpbIk5leHRBdXRoIiwiYXV0aE9wdGlvbnMiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/auth.ts":
/*!*************************!*\
  !*** ./app/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _repo_db_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @repo/db/client */ \"(rsc)/../../packages/db/index.ts\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/../../node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                name: {\n                    label: \"Name\",\n                    type: \"text\",\n                    placeholder: \"name\",\n                    required: true\n                },\n                phone: {\n                    label: \"Phone Number\",\n                    type: \"text\",\n                    placeholder: \"98123****\",\n                    required: true\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\",\n                    required: true\n                }\n            },\n            async authorize (credentials) {\n                const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().hash(credentials.password, 10);\n                const existingUser = await _repo_db_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findFirst({\n                    where: {\n                        number: credentials.phone\n                    }\n                });\n                if (existingUser) {\n                    console.log(credentials.password);\n                    console.log(hashedPassword);\n                    console.log(existingUser.password);\n                    const passwordValidation = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(credentials.password, existingUser.password);\n                    if (passwordValidation) {\n                        return {\n                            id: existingUser.id.toString(),\n                            name: existingUser.name,\n                            number: existingUser.number\n                        };\n                    }\n                    return null;\n                }\n                try {\n                    const user = await _repo_db_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n                        data: {\n                            number: credentials.phone,\n                            name: credentials.name,\n                            password: hashedPassword\n                        }\n                    });\n                    const res = await _repo_db_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].balance.create({\n                        data: {\n                            amount: 0,\n                            locked: 0,\n                            userId: user.id\n                        }\n                    });\n                    console.log(user);\n                    console.log(res);\n                    return {\n                        id: user.id.toString(),\n                        name: user.name,\n                        email: user.number\n                    };\n                } catch (e) {\n                    console.error(e);\n                }\n                return null;\n            }\n        })\n    ],\n    secret: process.env.JWT_SECRET || \"secret\",\n    callbacks: {\n        async session ({ token, session }) {\n            session.user.id = token.sub;\n            return session;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFDaUM7QUFDdEM7QUFHcEIsTUFBTUcsY0FBWTtJQUNyQkMsV0FBVTtRQUNOSCwyRUFBbUJBLENBQUM7WUFDaEJJLE1BQUs7WUFDTEMsYUFBWTtnQkFFUkQsTUFBSztvQkFBQ0UsT0FBTTtvQkFBU0MsTUFBSztvQkFBUUMsYUFBWTtvQkFBT0MsVUFBUztnQkFBSTtnQkFDbEVDLE9BQU07b0JBQUNKLE9BQU07b0JBQWlCQyxNQUFLO29CQUFRQyxhQUFZO29CQUFZQyxVQUFTO2dCQUFJO2dCQUNoRkUsVUFBUztvQkFBQ0wsT0FBTTtvQkFBV0MsTUFBSztvQkFBV0UsVUFBUztnQkFBSTtZQUM1RDtZQUNBLE1BQU1HLFdBQVVQLFdBQWU7Z0JBQzNCLE1BQU1RLGlCQUFlLE1BQU1aLGtEQUFXLENBQUNJLFlBQVlNLFFBQVEsRUFBQztnQkFDNUQsTUFBTUksZUFBYSxNQUFNaEIsdURBQUVBLENBQUNpQixJQUFJLENBQUNDLFNBQVMsQ0FBQztvQkFDdkNDLE9BQU07d0JBQ0ZDLFFBQU9kLFlBQVlLLEtBQUs7b0JBQzVCO2dCQUNKO2dCQUNBLElBQUdLLGNBQWE7b0JBQ1pLLFFBQVFDLEdBQUcsQ0FBQ2hCLFlBQVlNLFFBQVE7b0JBQ2hDUyxRQUFRQyxHQUFHLENBQUNSO29CQUNaTyxRQUFRQyxHQUFHLENBQUNOLGFBQWFKLFFBQVE7b0JBQ2pDLE1BQU1XLHFCQUFtQixNQUFNckIscURBQWMsQ0FBQ0ksWUFBWU0sUUFBUSxFQUFDSSxhQUFhSixRQUFRO29CQUN4RixJQUFHVyxvQkFBbUI7d0JBQ2xCLE9BQU87NEJBQ0hFLElBQUdULGFBQWFTLEVBQUUsQ0FBQ0MsUUFBUTs0QkFDM0JyQixNQUFLVyxhQUFhWCxJQUFJOzRCQUN0QmUsUUFBT0osYUFBYUksTUFBTTt3QkFDOUI7b0JBQ0o7b0JBQ0EsT0FBTztnQkFDWDtnQkFDQSxJQUFHO29CQUNDLE1BQU1ILE9BQUssTUFBTWpCLHVEQUFFQSxDQUFDaUIsSUFBSSxDQUFDVSxNQUFNLENBQUM7d0JBQzVCQyxNQUFLOzRCQUNEUixRQUFPZCxZQUFZSyxLQUFLOzRCQUN4Qk4sTUFBTUMsWUFBWUQsSUFBSTs0QkFDdEJPLFVBQVNFO3dCQUNiO29CQUNKO29CQUVBLE1BQU1lLE1BQU0sTUFBTTdCLHVEQUFFQSxDQUFDOEIsT0FBTyxDQUFDSCxNQUFNLENBQUM7d0JBQ2hDQyxNQUFLOzRCQUNERyxRQUFROzRCQUNSQyxRQUFROzRCQUNSQyxRQUFRaEIsS0FBS1EsRUFBRTt3QkFDbkI7b0JBQ0o7b0JBRUFKLFFBQVFDLEdBQUcsQ0FBQ0w7b0JBQ1pJLFFBQVFDLEdBQUcsQ0FBQ087b0JBQ1osT0FBTTt3QkFDRkosSUFBR1IsS0FBS1EsRUFBRSxDQUFDQyxRQUFRO3dCQUNuQnJCLE1BQUtZLEtBQUtaLElBQUk7d0JBQ2Q2QixPQUFNakIsS0FBS0csTUFBTTtvQkFFckI7Z0JBQ0osRUFBQyxPQUFNZSxHQUFFO29CQUNMZCxRQUFRZSxLQUFLLENBQUNEO2dCQUNsQjtnQkFDQSxPQUFRO1lBRVo7UUFDSjtLQUNIO0lBQ0RFLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxJQUFJO0lBQ25DQyxXQUFVO1FBQ1QsTUFBTUMsU0FBUSxFQUFDQyxLQUFLLEVBQUNELE9BQU8sRUFBSztZQUM3QkEsUUFBUXpCLElBQUksQ0FBQ1EsRUFBRSxHQUFDa0IsTUFBTUMsR0FBRztZQUN6QixPQUFPRjtRQUNYO0lBQ0Q7QUFDSCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vYXBwL2xpYi9hdXRoLnRzPzZiZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiIGZyb20gXCJAcmVwby9kYi9jbGllbnRcIlxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIlxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCJcblxuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM9e1xuICAgIHByb3ZpZGVyczpbXG4gICAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgICAgICAgbmFtZTpcIkNyZWRlbnRpYWxzXCIsXG4gICAgICAgICAgICBjcmVkZW50aWFsczp7XG5cbiAgICAgICAgICAgICAgICBuYW1lOntsYWJlbDpcIk5hbWVcIiAsIHR5cGU6XCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOlwibmFtZVwiLHJlcXVpcmVkOnRydWV9LFxuICAgICAgICAgICAgICAgIHBob25lOntsYWJlbDpcIlBob25lIE51bWJlclwiICwgdHlwZTpcInRleHRcIiwgcGxhY2Vob2xkZXI6XCI5ODEyMyoqKipcIixyZXF1aXJlZDp0cnVlfSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDp7bGFiZWw6XCJQYXNzd29yZFwiLHR5cGU6XCJwYXNzd29yZFwiLHJlcXVpcmVkOnRydWV9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzOmFueSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkPWF3YWl0IGJjcnlwdC5oYXNoKGNyZWRlbnRpYWxzLnBhc3N3b3JkLDEwKTtcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1VzZXI9YXdhaXQgZGIudXNlci5maW5kRmlyc3Qoe1xuICAgICAgICAgICAgICAgICAgICB3aGVyZTp7XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI6Y3JlZGVudGlhbHMucGhvbmVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaWYoZXhpc3RpbmdVc2VyKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3JlZGVudGlhbHMucGFzc3dvcmQpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGhhc2hlZFBhc3N3b3JkKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhleGlzdGluZ1VzZXIucGFzc3dvcmQpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkVmFsaWRhdGlvbj1hd2FpdCBiY3J5cHQuY29tcGFyZShjcmVkZW50aWFscy5wYXNzd29yZCxleGlzdGluZ1VzZXIucGFzc3dvcmQpXG4gICAgICAgICAgICAgICAgICAgIGlmKHBhc3N3b3JkVmFsaWRhdGlvbil7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOmV4aXN0aW5nVXNlci5pZC50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ZXhpc3RpbmdVc2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyOmV4aXN0aW5nVXNlci5udW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VyPWF3YWl0IGRiLnVzZXIuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcjpjcmVkZW50aWFscy5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBjcmVkZW50aWFscy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOmhhc2hlZFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGIuYmFsYW5jZS5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2tlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOnVzZXIuaWQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6dXNlci5uYW1lICxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOnVzZXIubnVtYmVyLFxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9Y2F0Y2goZSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAgbnVsbDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgXSxcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgXCJzZWNyZXRcIixcbiAgIGNhbGxiYWNrczp7XG4gICAgYXN5bmMgc2Vzc2lvbih7dG9rZW4sc2Vzc2lvbn06YW55KXtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmlkPXRva2VuLnN1YlxuICAgICAgICByZXR1cm4gc2Vzc2lvblxuICAgIH1cbiAgIH1cbn0iXSwibmFtZXMiOlsiZGIiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYmNyeXB0IiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwicGhvbmUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsImhhc2hlZFBhc3N3b3JkIiwiaGFzaCIsImV4aXN0aW5nVXNlciIsInVzZXIiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsIm51bWJlciIsImNvbnNvbGUiLCJsb2ciLCJwYXNzd29yZFZhbGlkYXRpb24iLCJjb21wYXJlIiwiaWQiLCJ0b1N0cmluZyIsImNyZWF0ZSIsImRhdGEiLCJyZXMiLCJiYWxhbmNlIiwiYW1vdW50IiwibG9ja2VkIiwidXNlcklkIiwiZW1haWwiLCJlIiwiZXJyb3IiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ0b2tlbiIsInN1YiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/../../packages/db/index.ts":
/*!**********************************!*\
  !*** ../../packages/db/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n};\nconst prisma = globalThis.prismaGlobal ?? prismaClientSingleton();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\nif (true) globalThis.prismaGlobal = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vcGFja2FnZXMvZGIvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBRTdDLE1BQU1DLHdCQUF3QjtJQUM1QixPQUFPLElBQUlELHdEQUFZQTtBQUN6QjtBQU1BLE1BQU1FLFNBQW1EQyxXQUFXQyxZQUFZLElBQUlIO0FBRXBGLGlFQUFlQyxNQUFNQSxFQUFBO0FBRXJCLElBQUlHLElBQXlCLEVBQWNGLFdBQVdDLFlBQVksR0FBR0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi4vLi4vcGFja2FnZXMvZGIvaW5kZXgudHM/ZGZiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuY29uc3QgcHJpc21hQ2xpZW50U2luZ2xldG9uID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFByaXNtYUNsaWVudCgpXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIHByaXNtYUdsb2JhbDogdW5kZWZpbmVkIHwgUmV0dXJuVHlwZTx0eXBlb2YgcHJpc21hQ2xpZW50U2luZ2xldG9uPlxufVxuXG5jb25zdCBwcmlzbWE6IFJldHVyblR5cGU8dHlwZW9mIHByaXNtYUNsaWVudFNpbmdsZXRvbj4gPSBnbG9iYWxUaGlzLnByaXNtYUdsb2JhbCA/PyBwcmlzbWFDbGllbnRTaW5nbGV0b24oKVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWFcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbFRoaXMucHJpc21hR2xvYmFsID0gcHJpc21hIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYUNsaWVudFNpbmdsZXRvbiIsInByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWFHbG9iYWwiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../../packages/db/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Ftushar%2Fcoding%2Fprojects%2FShiba_Payment_App%2Fapps%2Fuser-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Ftushar%2Fcoding%2Fprojects%2FShiba_Payment_App%2Fapps%2Fuser-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();