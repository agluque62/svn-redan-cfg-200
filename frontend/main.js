(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\arturo.garcia\source\repos\nucleocc\dev-branches\redan-cfg-200\Ulises\src\main.ts */"zUnb");


/***/ }),

/***/ "0ppU":
/*!****************************************************!*\
  !*** ./src/app/components/common/common.module.ts ***!
  \****************************************************/
/*! exports provided: CommonsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonsModule", function() { return CommonsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _ul_header_ul_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ul-header/ul-header.component */ "B1TQ");
/* harmony import */ var _ul_side_menu_ul_side_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ul-side-menu/ul-side-menu.component */ "BqTz");
/* harmony import */ var _ul_footer_ul_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ul-footer/ul-footer.component */ "cBvK");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "zqYk");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _translate_translate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./translate/translate.component */ "B8nJ");
// Modules





// Components





//Translation






class CommonsModule {
}
CommonsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CommonsModule });
CommonsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CommonsModule_Factory(t) { return new (t || CommonsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                    useFactory: (http) => {
                        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http);
                    },
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]]
                }
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommonsModule, { declarations: [_ul_header_ul_header_component__WEBPACK_IMPORTED_MODULE_5__["UlHeaderComponent"],
        _ul_side_menu_ul_side_menu_component__WEBPACK_IMPORTED_MODULE_6__["UlSideMenuComponent"],
        _ul_footer_ul_footer_component__WEBPACK_IMPORTED_MODULE_7__["UlFooterComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
        _translate_translate_component__WEBPACK_IMPORTED_MODULE_13__["TranslateComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]], exports: [_ul_header_ul_header_component__WEBPACK_IMPORTED_MODULE_5__["UlHeaderComponent"],
        _ul_side_menu_ul_side_menu_component__WEBPACK_IMPORTED_MODULE_6__["UlSideMenuComponent"],
        _ul_footer_ul_footer_component__WEBPACK_IMPORTED_MODULE_7__["UlFooterComponent"],
        _translate_translate_component__WEBPACK_IMPORTED_MODULE_13__["TranslateComponent"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _ul_header_ul_header_component__WEBPACK_IMPORTED_MODULE_5__["UlHeaderComponent"],
                    _ul_side_menu_ul_side_menu_component__WEBPACK_IMPORTED_MODULE_6__["UlSideMenuComponent"],
                    _ul_footer_ul_footer_component__WEBPACK_IMPORTED_MODULE_7__["UlFooterComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                    _translate_translate_component__WEBPACK_IMPORTED_MODULE_13__["TranslateComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                            useFactory: (http) => {
                                return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http);
                            },
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]]
                        }
                    }),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                ],
                exports: [
                    _ul_header_ul_header_component__WEBPACK_IMPORTED_MODULE_5__["UlHeaderComponent"],
                    _ul_side_menu_ul_side_menu_component__WEBPACK_IMPORTED_MODULE_6__["UlSideMenuComponent"],
                    _ul_footer_ul_footer_component__WEBPACK_IMPORTED_MODULE_7__["UlFooterComponent"],
                    _translate_translate_component__WEBPACK_IMPORTED_MODULE_13__["TranslateComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "2M2R":
/*!********************************************************!*\
  !*** ./src/app/interceptors/http4debug.interceptor.ts ***!
  \********************************************************/
/*! exports provided: Http4debugInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Http4debugInterceptor", function() { return Http4debugInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ "xa+l");



// var Debugging = window.location.port == "4200";
class Http4debugInterceptor {
    constructor() { }
    intercept(request, next) {
        // if (Debugging && request.url.includes('alive')==false)
        //   console.log('http4debug. request IN  => ', request.url);
        const httpReq = request.clone({
            url: (!_globals__WEBPACK_IMPORTED_MODULE_1__["Debugging"] ? "" : "http://localhost:5050") + request.url
        });
        if (_globals__WEBPACK_IMPORTED_MODULE_1__["Debugging"] && request.url.includes('alive') == false)
            console.log('http4debug.', request.method, httpReq.url, _globals__WEBPACK_IMPORTED_MODULE_1__["Debugging"]);
        return next.handle(httpReq);
    }
}
Http4debugInterceptor.ɵfac = function Http4debugInterceptor_Factory(t) { return new (t || Http4debugInterceptor)(); };
Http4debugInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Http4debugInterceptor, factory: Http4debugInterceptor.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Http4debugInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "3nF+":
/*!*******************************************!*\
  !*** ./src/app/_services/base.service.ts ***!
  \*******************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class BaseService {
    constructor() { }
    buildOptions() {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Accept': '*/*',
                'Access-Control-Allow-Origin': '*'
            })
        };
    }
    buildGatewayOptions() {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'RedanClient': 'SERVER',
            })
        };
    }
    handleError(error) {
        const UNAUTH_STATUS_CODE = 401;
        const TIMED_OUT_STATUS_CODE = 408;
        let errorMessage = '';
        let errorCode;
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            errorCode = error.status;
        }
        if (errorCode != UNAUTH_STATUS_CODE && errorCode != TIMED_OUT_STATUS_CODE) {
            window.alert(errorMessage);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    }
}
BaseService.ɵfac = function BaseService_Factory(t) { return new (t || BaseService)(); };
BaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BaseService, factory: BaseService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8rbx":
/*!********************************************!*\
  !*** ./src/app/_services/login.service.ts ***!
  \********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "3nF+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class LoginService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] {
    constructor(http) {
        super();
        this.http = http;
    }
    login(username, password) {
        const url = `/login?username=${username}&password=${password}`;
        return this.http.post(url, {}, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    logout() {
        const url = `/logout`;
        return this.http.get(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    version() {
        const url = `/version`;
        return this.http.get(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    alive() {
        const url = `/alive`;
        return this.http.get(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    isAuthenticated() {
        const url = '/auth';
        return this.http.get(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B1TQ":
/*!********************************************************************!*\
  !*** ./src/app/components/common/ul-header/ul-header.component.ts ***!
  \********************************************************************/
/*! exports provided: UlHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UlHeaderComponent", function() { return UlHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/config.service */ "rkFe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _translate_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../translate/translate.component */ "B8nJ");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







function UlHeaderComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.localConfig.Region, " ");
} }
class UlHeaderComponent {
    constructor(configService) {
        this.configService = configService;
        this.date = new Date();
        this.weekDay = '';
        this.weekDays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        this.ready = false;
        setInterval(() => {
            this.date = new Date();
            this.weekDay = this.weekDays[this.date.getDay()];
        }, 1);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.localConfig = yield this.configService.getLocalConfig().toPromise();
            this.ready = true;
        });
    }
}
UlHeaderComponent.ɵfac = function UlHeaderComponent_Factory(t) { return new (t || UlHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"])); };
UlHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UlHeaderComponent, selectors: [["ul-header"]], decls: 15, vars: 13, consts: [[1, "logo"], [1, "header-title"], [1, "app-name"], ["class", "region", 4, "ngIf"], [1, "datetime"], [1, "section"], [1, "date"], [1, "hour"], [1, "region"]], template: function UlHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UlHeaderComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "ULISES G 5000 R", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ready);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 5, ctx.date, "dd/MM/yyyy"), " (", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 8, ctx.weekDay), ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 10, ctx.date, "HH:mm:ss"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _translate_translate_component__WEBPACK_IMPORTED_MODULE_4__["TranslateComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 20%;\n  background-image: url(\"/assets/images/corporativo.png\");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: left;\n  margin-bottom: 10px;\n  position: relative;\n  top: -5px;\n}\n@media screen and (min-width: 320px) and (max-width: 600px) {\n  [_nghost-%COMP%]   .logo[_ngcontent-%COMP%] {\n    height: 96px;\n    width: 123px;\n  }\n}\n[_nghost-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  width: 60%;\n}\n[_nghost-%COMP%]   .header-title[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2em;\n}\n[_nghost-%COMP%]   .header-title[_ngcontent-%COMP%]   .region[_ngcontent-%COMP%] {\n  font-size: 1, 5em;\n  text-align: center;\n}\n[_nghost-%COMP%]   .datetime[_ngcontent-%COMP%] {\n  display: flex;\n  width: 20%;\n  float: right;\n}\n[_nghost-%COMP%]   .datetime[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  margin-right: 15px;\n  font-size: smaller;\n}\n[_nghost-%COMP%]   .datetime[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n  margin: auto;\n}\n[_nghost-%COMP%]   .datetime[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .datetime[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%], [_nghost-%COMP%]   .datetime[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .hour[_ngcontent-%COMP%] {\n  font-size: smaller;\n  text-align: right;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdWwtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBQTtBQUFKO0FBSUk7RUFFSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHVEQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFHQSxrQkFBQTtFQUFtQixTQUFBO0FBSjNCO0FBTVE7RUFiSjtJQWNRLFlBQUE7SUFDQSxZQUFBO0VBSFY7QUFDRjtBQU1JO0VBR0ksVUFBQTtBQU5SO0FBT1E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFMWjtBQVNRO0VBRUksaUJBQUE7RUFDQSxrQkFBQTtBQVJaO0FBYUk7RUFJSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFkUjtBQWdCUTtFQUVJLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBZlo7QUFpQlk7RUFDSSxZQUFBO0FBZmhCO0FBbUJRO0VBQ0ksV0FBQTtBQWpCWjtBQWtCWTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBaEJoQiIsImZpbGUiOiJ1bC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIC5sb2dvIHtcclxuICAgICAgICBcclxuICAgICAgICBoZWlnaHQ6IC8qNTVweCovMTAwJTtcclxuICAgICAgICB3aWR0aDogLyoxNDBweCovMjAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2NvcnBvcmF0aXZvLnBuZ1wiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAvKmNlbnRlciBjZW50ZXIqL2xlZnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgICAgIC8vIG1hcmdpbjogYXV0bztcclxuICAgICAgICAvLyBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTsgdG9wOi01cHg7XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MzIwcHgpIGFuZCAobWF4LXdpZHRoOjYwMHB4KXtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5NnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTIzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXItdGl0bGUge1xyXG4gICAgICAgIC8vIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAuYXBwLW5hbWUge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLyoyMDAlKi8yZW07XHJcbiAgICAgICAgICAgIC8vIG1hcmdpbjogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yZWdpb24ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAvKjE1MCUqLzEsNWVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC8vIG1hcmdpbjogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGV0aW1lIHtcclxuXHJcbiAgICAgICAgLy8gbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIC8vIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxuICAgICAgICAuYWJvdXQge1xyXG5cclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuXHJcbiAgICAgICAgICAgIC5oZWxwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlY3Rpb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgLmRhdGUsIC5ob3VyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSAgXHJcbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UlHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ul-header',
                templateUrl: './ul-header.component.html',
                styleUrls: ['./ul-header.component.scss']
            }]
    }], function () { return [{ type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }]; }, null); })();


/***/ }),

/***/ "B8nJ":
/*!********************************************************************!*\
  !*** ./src/app/components/common/translate/translate.component.ts ***!
  \********************************************************************/
/*! exports provided: TranslateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateComponent", function() { return TranslateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "active": a0 }; };
class TranslateComponent {
    constructor(translate) {
        var _a;
        this.translate = translate;
        this.activeLang = (_a = localStorage.getItem('langSelected')) !== null && _a !== void 0 ? _a : this.translate.getBrowserLang();
        if (!localStorage.getItem('langSelected')) {
            this.translate.setDefaultLang(this.activeLang);
            localStorage.setItem('langSelected', this.activeLang);
        }
        else {
            this.translate.setDefaultLang(this.activeLang);
        }
    }
    ngOnInit() {
    }
    /**
     * This function changes the language and saves the language selected on local storage.
     * @param lang
     */
    changeLanguage(lang) {
        localStorage.setItem('langSelected', lang);
        this.translate.use(lang);
    }
}
TranslateComponent.ɵfac = function TranslateComponent_Factory(t) { return new (t || TranslateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
TranslateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TranslateComponent, selectors: [["app-translate"]], decls: 4, vars: 6, consts: [[1, "container"], [1, "container-buttons"], ["src", "./../../../../assets/images/i18n/uk32.png", "alt", "EN", 3, "ngClass", "click"], ["src", "./../../../../assets/images/i18n/spain32.png", "alt", "ES", 3, "ngClass", "click"]], template: function TranslateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TranslateComponent_Template_img_click_2_listener() { return ctx.changeLanguage("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TranslateComponent_Template_img_click_3_listener() { return ctx.changeLanguage("es"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.activeLang == "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.activeLang == "es"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".container[_ngcontent-%COMP%]   .container-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.container[_ngcontent-%COMP%]   .container-buttons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdHJhbnNsYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtFQUNBLFNBQUE7QUFBUjtBQUdZO0VBQ0ksZUFBQTtBQURoQiIsImZpbGUiOiJ0cmFuc2xhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgLmNvbnRhaW5lci1idXR0b25ze1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZ2FwOiAxcmVtO1xyXG5cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-translate',
                templateUrl: './translate.component.html',
                styleUrls: ['./translate.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "BqTz":
/*!**************************************************************************!*\
  !*** ./src/app/components/common/ul-side-menu/ul-side-menu.component.ts ***!
  \**************************************************************************/
/*! exports provided: UlSideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UlSideMenuComponent", function() { return UlSideMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../about/about.component */ "zqYk");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/login.service */ "8rbx");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/app.component */ "Sy1n");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/utils.service */ "GBWz");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_services/user.service */ "VITL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");

















const _c0 = function (a0) { return { "selected": a0 }; };
function UlSideMenuComponent_mat_tree_0_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tree-node", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UlSideMenuComponent_mat_tree_0_mat_tree_node_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const node_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.navigateTo(node_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, node_r3 == ctx_r1.selected));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, node_r3 == ctx_r1.selected))("disabled", ctx_r1.disableMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, node_r3.name), " ");
} }
function UlSideMenuComponent_mat_tree_0_mat_tree_node_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tree-node", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Toggle " + node_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.treeControl.isExpanded(node_r6) ? "expand_more" : "chevron_right", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 3, node_r6.name), " ");
} }
function UlSideMenuComponent_mat_tree_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tree", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UlSideMenuComponent_mat_tree_0_mat_tree_node_2_Template, 5, 10, "mat-tree-node", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UlSideMenuComponent_mat_tree_0_mat_tree_node_4_Template, 7, 5, "mat-tree-node", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r0.dataSource)("treeControl", ctx_r0.treeControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTreeNodeDefWhen", ctx_r0.hasChild);
} }
class UlSideMenuComponent {
    constructor(router, route, loginService, app, utilsService, userService, translate, dialog) {
        this.router = router;
        this.route = route;
        this.loginService = loginService;
        this.app = app;
        this.utilsService = utilsService;
        this.userService = userService;
        this.translate = translate;
        this.dialog = dialog;
        this.ready = false;
        this.TREE_DATA = [];
        this._transformer = (node, level) => {
            return {
                expandable: !!node.children && node.children.length > 0,
                name: node.name,
                level: level
            };
        };
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["FlatTreeControl"](node => node.level, node => node.expandable);
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlattener"](this._transformer, node => node.level, node => node.expandable, node => node.children);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.disableMenu = false;
        this.hasChild = (_, node) => node.expandable;
        this.initTreeData();
        this.dataSource.data = this.TREE_DATA;
    }
    ngOnChanges(changes) {
        this.initTreeData();
    }
    ngOnInit() {
        this.ready = false;
        this.user = JSON.parse(localStorage.getItem('user') || '{}');
        this.userProfile = this.utilsService.getProfileLabel(this.user.perfil);
    }
    checkUserPermission() {
        if (!this.userService.isRole('ADMIN') && !this.userService.isRole('USER_MANAGEMENT')) {
            this.TREE_DATA.forEach(item => {
                if (item.name === `${this.translate.instant('ul-side.configuration')}`) {
                    if (item.children) {
                        item.children.forEach((child, idx) => {
                            if (child.name === 'ul-side.users' && item.children) {
                                item.children.splice(idx, 1);
                            }
                        });
                    }
                }
            });
        }
    }
    checkConfigurationPermission() {
        if (this.userService.isRole('ADMIN')) {
            this.TREE_DATA.push({
                name: `ul-side.configuration`,
                children: [
                    { name: 'ul-side.configuration', route: 'config' },
                    { name: 'ul-side.table_audio', route: 'config/audio-bss-table' },
                    { name: 'ul-side.users', route: 'config/users' },
                    { name: 'ul-side.ext_resources', route: 'config/ext-resources' }
                ]
            });
        }
        if (!this.userService.isRole('ADMIN') && this.userService.isRole('CONFIGURATION')) {
            this.TREE_DATA.push({
                name: 'ul-side.configuration',
                children: [
                    { name: 'ul-side.configuration', route: 'config' },
                    { name: 'ul-side.table_audio', route: 'config/audio-bss-table' },
                    { name: 'ul-side.ext_resources', route: 'config/ext-resources' }
                ]
            });
        }
        if (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && !this.userService.isRole('VISUALIZATION')
            && this.userService.isRole('USER_MANAGEMENT')) {
            this.TREE_DATA.push({
                name: 'ul-side.configuration',
                children: [
                    { name: 'ul-side.users', route: 'config/users' }
                ]
            });
        }
        if (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && !this.userService.isRole('USER_MANAGEMENT')
            && this.userService.isRole('VISUALIZATION')) {
            this.TREE_DATA.push({
                name: 'ul-side.configuration',
                children: [
                    { name: 'ul-side.configuration', route: 'config' },
                    { name: 'ul-side.table_audio', route: 'config/audio-bss-table' }
                ]
            });
        }
        if (!this.userService.isRole('ADMIN') && !this.userService.isRole('CONFIGURATION') && !this.userService.isRole('USER_MANAGEMENT')
            && !this.userService.isRole('VISUALIZATION') && this.userService.isRole('SUPERVISED_CONFIGURATION')) {
            this.TREE_DATA.push({
                name: 'ul-side.configuration',
                children: [
                    { name: 'ul-side.configuration', route: 'config' },
                    { name: 'ul-side.table_audio', route: 'config/audio-bss-table' }
                ]
            });
        }
    }
    checkMaintenancePermission() {
        if (this.userService.isRole('ADMIN')) {
            this.TREE_DATA.push({
                name: 'ul-side.maintance',
                children: [
                    { name: 'ul-side.historic', route: 'maintenance/historic' },
                    { name: 'ul-side.server_conf', route: 'maintenance/server-conf' },
                    { name: 'ul-side.version', route: 'maintenance/version' }
                ]
            });
        }
        if (!this.userService.isRole('ADMIN') && this.userService.isRole('HISTORICS')) {
            this.TREE_DATA.push({
                name: 'ul-side.maintance',
                children: [
                    { name: 'ul-side.historic', route: 'maintenance/historic' },
                    { name: 'ul-side.version', route: 'maintenance/version' }
                ]
            });
        }
    }
    checkBackupPermission() {
        if (this.userService.isRole('ADMIN') || this.userService.isRole('BACKUP')) {
            this.TREE_DATA.push({
                name: 'ul-side.back_up',
                children: [
                    { name: 'ul-side.parameters', route: 'backupbd/params' },
                    { name: 'ul-side.historic_backup', route: 'backupbd/historic' },
                    { name: 'ul-side.manual_backup', route: 'backupbd/manual' },
                    { name: 'ul-side.restore', route: 'backupbd/restore' }
                ]
            });
        }
    }
    validatePermissions() {
        this.checkConfigurationPermission();
        this.checkMaintenancePermission();
        this.checkBackupPermission();
        this.dataSource.data = this.TREE_DATA;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.initTreeData();
            const sectionGroup = this.getSectionGroupByUrl(this.router.url);
            const section = this.getSectionByUrl(this.router.url);
            for (let i = 0; i < this.treeControl.dataNodes.length; i++) {
                if (this.treeControl.dataNodes[i].name === sectionGroup && this.treeControl.dataNodes[i].expandable) {
                    this.treeControl.expand(this.treeControl.dataNodes[i]);
                }
                else if (this.treeControl.dataNodes[i].name !== sectionGroup && this.treeControl.dataNodes[i].expandable) {
                    this.treeControl.collapse(this.treeControl.dataNodes[i]);
                }
                if (this.treeControl.dataNodes[i].name === section && !this.treeControl.dataNodes[i].expandable) {
                    this.selected = this.treeControl.dataNodes[i];
                }
            }
            this.ready = true;
        }, 0);
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                const url = event.url.split("/");
                this.disableMenu = (url.length == 4 && (url[2] === 'config' || url[2] === 'gateway' || url[2] === 'resource') &&
                    parseInt(url[3]).toString() !== 'NaN' || url[3] === 'new');
            }
        });
    }
    getSectionGroupByUrl(url) {
        if (url === '/home/config' || /^\/home\/config\/.*?\d+$/.test(url) || url === '/home/gateway/new' || /^\/home\/gateway\/.*?\d+$/.test(url)
            || url === '/home/resource/new' || /^\/home\/resource\/.*?\d+$/.test(url) || url === '/home/config/audio-bss-table'
            || url === '/home/config/users' || url === '/home/config/ext-resources') {
            return 'ul-side.configuration';
        }
        if (url === '/home/maintenance/historic' || url === '/home/maintenance/server-conf' || url === '/home/maintenance/version') {
            return 'ul-side.maintance';
        }
        if (url === '/home/backupbd/params' || url === '/home/backupbd/historic' || url === '/home/backupbd/manual' || url === '/home/backupbd/restore') {
            return 'ul-side.back_up';
        }
        return '';
    }
    getSectionByUrl(url) {
        if (url === '/home/config' || /^\/home\/config\/.*?\d+$/.test(url) || url === '/home/gateway/new'
            || /^\/home\/gateway\/.*?\d+$/.test(url) || url === '/home/resource/new' || /^\/home\/resource\/.*?\d+$/.test(url)) {
            return this.translate.instant('ul-side.configuration');
        }
        if (url === '/home/config/audio-bss-table') {
            return 'ul-side.table_audio';
        }
        if (url === '/home/config/users') {
            return 'ul-side.users';
        }
        if (url === '/home/config/ext-resources') {
            return 'ul-side.ext_resources';
        }
        if (url === '/home/maintenance/historic') {
            return 'ul-side.historic';
        }
        if (url === '/home/maintenance/server-conf') {
            return 'ul-side.server_conf';
        }
        if (url === '/home/maintenance/version') {
            return 'ul-side.version';
        }
        if (url === '/home/backupbd/params') {
            return 'ul-side.parameters';
        }
        if (url === '/home/backupbd/historic') {
            return 'ul-side.historic_backup';
        }
        if (url === '/home/backupbd/manual') {
            return 'ul-side.manual_backup';
        }
        if (url === '/home/backupbd/restore') {
            return 'ul-side.restore';
        }
        return '';
    }
    navigateTo(node) {
        this.selected = node;
        let route = '';
        let path = '';
        this.TREE_DATA.forEach(root => {
            if (root.children) {
                root.children.forEach(leaf => {
                    if (leaf.name == node.name) {
                        route = leaf.route || '';
                    }
                });
            }
        });
        path = 'home/' + route;
        this.router.navigate([path]);
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loginService.logout().toPromise();
            this.app.destroyAlive();
            this.router.navigate(['/access']);
        });
    }
    initTreeData() {
        this.TREE_DATA = [];
        this.validatePermissions();
    }
    aboutDialog() {
        this.dialog.open(_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], {
            autoFocus: false
        });
    }
}
UlSideMenuComponent.ɵfac = function UlSideMenuComponent_Factory(t) { return new (t || UlSideMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"])); };
UlSideMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UlSideMenuComponent, selectors: [["ul-side-menu"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 15, vars: 15, consts: [["class", "tree", 3, "dataSource", "treeControl", 4, "ngIf"], [1, "user"], [1, "about", 3, "click"], [1, "username"], [1, "profile"], [1, "logout"], ["mat-raised-button", "", 1, "custom-raised-btn", 3, "click"], [1, "tree", 3, "dataSource", "treeControl"], [1, "node-tree"], ["class", "node", "matTreeNodePadding", "", "matTreeNodePaddingIndent", "20", 3, "ngClass", 4, "matTreeNodeDef"], ["class", "node", "matTreeNodePadding", "", "matTreeNodePaddingIndent", "20", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", "", "matTreeNodePaddingIndent", "20", 1, "node", 3, "ngClass"], ["mat-icon-button", "", 1, "btn", "leaf", 3, "ngClass", "disabled", "click"], [1, "name"], ["matTreeNodePadding", "", "matTreeNodePaddingIndent", "20", 1, "node"], ["mat-icon-button", "", "matTreeNodeToggle", "", 1, "btn"], [1, "mat-icon-rtl-mirror"]], template: function UlSideMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UlSideMenuComponent_mat_tree_0_Template, 5, 3, "mat-tree", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UlSideMenuComponent_Template_div_click_2_listener() { return ctx.aboutDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UlSideMenuComponent_Template_button_click_12_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ready);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "ul-side.about"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 9, "ul-side.username"), " ", ctx.user.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 11, "ul-side.profile"), " ", ctx.userProfile, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 13, "button.logout"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeNodeDef"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeNodePadding"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeNodeToggle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .tree[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n[_nghost-%COMP%]   .tree[_ngcontent-%COMP%]   .node-tree[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n[_nghost-%COMP%]   .tree[_ngcontent-%COMP%]   .node-tree[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n[_nghost-%COMP%]   .tree[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n[_nghost-%COMP%]   .tree[_ngcontent-%COMP%]   .node.selected[_ngcontent-%COMP%] {\n  background-color: #00800052 !important;\n}\n[_nghost-%COMP%]   .tree[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n[_nghost-%COMP%]   .tree[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]:hover   .btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n[_nghost-%COMP%]   .tree[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  text-align: left;\n  background-color: transparent;\n  border: none;\n  display: flex;\n  width: 100%;\n  padding: 10px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .tree[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-left: 5px;\n}\n[_nghost-%COMP%]   .tree[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .leaf[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n[_nghost-%COMP%]   .user[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: 15px;\n}\n[_nghost-%COMP%]   .user[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%] {\n  padding: 15px;\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .user[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]:hover {\n  background-color: #00800052;\n}\n[_nghost-%COMP%]   .user[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%], [_nghost-%COMP%]   .user[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  padding: 1px;\n  text-align: center;\n}\n[_nghost-%COMP%]   .user[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 10px;\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   .user[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%]   .custom-raised-btn[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  position: relative;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  -webkit-tap-highlight-color: transparent;\n  display: inline-block;\n  white-space: nowrap;\n  text-decoration: none;\n  vertical-align: baseline;\n  text-align: center;\n  margin: 0;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n  border-radius: 4px;\n  overflow: visible;\n  transform: translate3d(0, 0, 0);\n  transition: 400ms cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: #fff;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdWwtc2lkZS1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUFKO0FBRUk7RUFFSSw2QkFBQTtBQURSO0FBR1E7RUFFSSw2QkFBQTtBQUZaO0FBSVk7RUFDSSxZQUFBO0FBRmhCO0FBUVk7RUFDSSxhQUFBO0FBTmhCO0FBU1k7RUFFSSxzQ0FBQTtBQVJoQjtBQVdZO0VBRUksWUFBQTtBQVZoQjtBQWNvQjtFQUNJLFlBQUE7QUFaeEI7QUFpQlk7RUFFSSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFoQmhCO0FBa0JnQjtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQWhCcEI7QUFvQlk7RUFDSSxhQUFBO0FBbEJoQjtBQXVCSTtFQUVJLGdCQUFBO0VBQ0EsbUJBQUE7QUF0QlI7QUF3QlE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBdEJaO0FBd0JZO0VBQ0ksMkJBQUE7QUF0QmhCO0FBMEJRO0VBRUksWUFBQTtFQUNBLGtCQUFBO0FBekJaO0FBNEJRO0VBRUksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUEzQlo7QUE2Qlk7RUFFSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUdBQUE7RUFDQSxzQkFBQTtFQUNBLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUhBQUE7QUE1QmhCIiwiZmlsZSI6InVsLXNpZGUtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAudHJlZSB7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAubm9kZS10cmVlIHtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm5vZGUge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYnV0dG9uOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc2VsZWN0ZWQge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDAwNTIhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xyXG5cclxuICAgICAgICAgICAgICAgIC5idG4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4OyAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxlYWYge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC51c2VyIHtcclxuICAgICAgICBcclxuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblxyXG4gICAgICAgIC5hYm91dCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDAwNTI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9maWxlLCAudXNlcm5hbWUge1xyXG4gXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ291dCB7XHJcblxyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgICAgICAgICAgIC5jdXN0b20tcmFpc2VkLWJ0biB7XHJcblxyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA2NHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiA0MDBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSxib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UlSideMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ul-side-menu',
                templateUrl: './ul-side-menu.component.html',
                styleUrls: ['./ul-side-menu.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] }, { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"] }, { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "EZIC":
/*!*****************************************!*\
  !*** ./src/app/core/material.module.ts ***!
  \*****************************************/
/*! exports provided: CustomMaterialModule, getPaginatorIntl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaginatorIntl", function() { return getPaginatorIntl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");


















class CustomMaterialModule {
}
CustomMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CustomMaterialModule });
CustomMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CustomMaterialModule_Factory(t) { return new (t || CustomMaterialModule)(); }, providers: [
        { provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorIntl"], useValue: getPaginatorIntl() }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"]
        ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomMaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"]
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"]
                ],
                providers: [
                    { provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorIntl"], useValue: getPaginatorIntl() }
                ]
            }]
    }], null, null); })();
function getPaginatorIntl() {
    const paginatorIntl = new _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorIntl"]();
    paginatorIntl.itemsPerPageLabel = 'Items por página:';
    paginatorIntl.nextPageLabel = 'Siguiente página';
    paginatorIntl.previousPageLabel = 'Anterior página';
    return paginatorIntl;
}


/***/ }),

/***/ "GBWz":
/*!********************************************!*\
  !*** ./src/app/_services/utils.service.ts ***!
  \********************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "3nF+");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/alert.service */ "f5O9");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/config.service */ "rkFe");
/* harmony import */ var src_app_services_gateway_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/gateway.service */ "O1oF");







class UtilsService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(alertService, configService, gatewayService) {
        super();
        this.alertService = alertService;
        this.configService = configService;
        this.gatewayService = gatewayService;
    }
    getProfileLabel(profile) {
        const VISUALIZATION_MASC = 1;
        const USER_MGMT = 16;
        const ADMIN = 64;
        const HISTORIC = 512;
        const BACKUP = 1024;
        const CONFIG = 32768;
        const SUPERVISED = 32;
        let profileText = '';
        profileText += ((profile & VISUALIZATION_MASC) ? "v" : "");
        profileText += ((profile & USER_MGMT) ? "u" : "");
        profileText += ((profile & ADMIN) ? "a" : "");
        profileText += ((profile & HISTORIC) ? "h" : "");
        profileText += ((profile & BACKUP) ? "b" : "");
        profileText += ((profile & CONFIG) ? "c" : "");
        profileText += ((profile & SUPERVISED) ? "s" : "");
        return profileText;
    }
    checkIps(ip, configId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.configurationIpResponse = yield this.configService.checkConfigIp(ip, configId).toPromise();
            return this.configurationIp = [...this.configurationIpResponse.result];
        });
    }
}
UtilsService.ɵfac = function UtilsService_Factory(t) { return new (t || UtilsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_gateway_service__WEBPACK_IMPORTED_MODULE_5__["GatewayService"])); };
UtilsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UtilsService, factory: UtilsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UtilsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }, { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }, { type: src_app_services_gateway_service__WEBPACK_IMPORTED_MODULE_5__["GatewayService"] }]; }, null); })();


/***/ }),

/***/ "MuhJ":
/*!**************************************!*\
  !*** ./src/app/core/app.settings.ts ***!
  \**************************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
class AppSettings {
}
AppSettings.UNAUTHORIZED_ERROR_CODE = 401;
AppSettings.TIMED_OUT_CODE = 408;
AppSettings.AGVN_PATTERN = /^(2[0-9]{5})|(3[0-9]{5})$/;
AppSettings.IP_PATTERN = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
AppSettings.SUBNET_MASK = /^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/;
AppSettings.NAME_PATTERN = /^[a-zA-Z0-9\-_.]{1,32}$/;
// public static URI_PATTERN = /^([^:]+)@((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))(:([\d]{1,5}))?$/;
AppSettings.URI_PATTERN = /^(([a-z]|[A-Z]|[0-9]|[-_#$+\.])+)@((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))(:([\d]{1,5}))?$/;
AppSettings.TRAP_PATTERN = /^[1-2]+,(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\/[0-9]{2,5}$/;
AppSettings.AEREAL_VHF = /^((11[8|9])|(12[0-9])|(13[0-7])).[0-9]{2}[0|5]$/; /** 118.000 - 137.995 */
AppSettings.AEREAL_UHF = /^([2-3][0-9][0-9]).[0-9]{2}[0|5]$/; /** 200.000 - 399.995 */
AppSettings.AEREAL_VHF_AND_UHF = /^((11[8|9])|(12[0-9])|(13[0-7])).[0-9]{2}[0|5]$|^([2-3][0-9][0-9]).[0-9]{2}[0|5]$/;
AppSettings.TM_TONO_BLOQ = /^((0)|((100\d|10[1-9]\d|1[1-9]\d{2}|[2-4]\d{3}|5000)))$/;
AppSettings.TM_BLOQ_LIB = /^((0)|((10\d|1[1-9]\d|[2-9]\d{2}|[1-4]\d{3}|5000)))$/;
AppSettings.REAL_NUMBER = /^-?[0-9]+(\.[0-9])?[0-9]*$/;
AppSettings.UMBRAL_VOX = /^-[0-9]{2}$/;
AppSettings.COLA_VOX = /^[0-9]{1,2}$/;
AppSettings.PORT = /^()([1-9]|[1-5]?[0-9]{2,4}|6[1-4][0-9]{3}|65[1-4][0-9]{2}|655[1-2][0-9]|6553[1-5])$/;
AppSettings.ONLY_NUMBERS = /^[0-9]+$/;
AppSettings.IP_PORT_PATTERN = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(:([\d]{1,5}))?$/;
AppSettings.IP_ENDP_PATTERN = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(:(((6553[0-5])|(655[0-2][0-9])|(65[0-4][0-9]{2})|(6[0-4][0-9]{3})|([1-5][0-9]{4})|([0-5]{0,5})|([0-9]{1,4}))))$/;
AppSettings.TCP_UDP_PORT = /^((6553[0-5])|(655[0-2][0-9])|(65[0-4][0-9]{2})|(6[0-4][0-9]{3})|([1-5][0-9]{4})|([0-5]{0,5})|([0-9]{1,4}))$/;
// Informative Messages
AppSettings.NUMBERS_FORMAT_INVALID = 'appsettings.NUMBERS_FORMAT_INVALID';
AppSettings.FIELD_REQUIRED = 'appsettings.FIELD_REQUIRED';
AppSettings.INVALID_IP = 'appsettings.INVALID_IP';
AppSettings.INVALID_EP = 'appsettings.INVALID_EP';
AppSettings.INVALID_RANGE_PORT = 'appsettings.INVALID_RANGE_PORT';
AppSettings.INVALID_RANGE_VOX_QUEUE = 'appsettings.INVALID_RANGE_VOX_QUEUE';
AppSettings.INVALID_RANGE_VAD = 'appsettings.INVALID_RANGE_VAD';
AppSettings.INVALID_RANGE_DA = 'appsettings.INVALID_RANGE_DA';
AppSettings.INVALID_RANGE_AD = 'appsettings.INVALID_RANGE_AD';
AppSettings.INVALID_RANGE_TIME = 'appsettings.INVALID_RANGE_TIME';
AppSettings.INVALID_RANGE_SIP = 'appsettings.INVALID_RANGE_SIP';
AppSettings.INVALID_RANGE_TONE = 'appsettings.INVALID_RANGE_TONE';
AppSettings.INVALID_RANGE_BLOQ = 'appsettings.INVALID_RANGE_BLOQ';
AppSettings.INVALID_RANGE_FREC = 'appsettings.INVALID_RANGE_FREC';
AppSettings.INVALID_NAME = 'appsettings.INVALID_NAME';
AppSettings.INVALID_AGV_NUMBER = 'appsettings.INVALID_AGV_NUMBER';
AppSettings.INVALID_MASK = 'appsettings.INVALID_MASK';
AppSettings.INVALID_URI = 'appsettings.INVALID_URI';
AppSettings.ERROR_FORM = 'appsettings.ERROR_FORM';
AppSettings.INVALID_FORM = 'appsettings.INVALID_FORM';
AppSettings.RES_CREATE_ERROR = 'appsettings.RES_CREATE_ERROR';
AppSettings.RES_EDIT_ERROR = 'appsettings.RES_EDIT_ERROR';
AppSettings.RES_NAME_DUP = 'appsettings.RES_NAME_DUP';
AppSettings.WRONG_RANKS = 'appsettings.WRONG_RANKS';
AppSettings.WRONG_RANGE = 'appsettings.WRONG_RANGE';
AppSettings.WRONG_LENGTH = 'appsettings.WRONG_LENGTH';
AppSettings.RANGE_0_250 = 'appsettings.RANGE_0_250';
AppSettings.AVGN_PATTERN_ERROR = 'appsettings.AVGN_PATTERN_ERROR';
AppSettings.controlRanges = {
    "ventana_bss": { min: 300, max: 2000, msg: "appsettings.controlRanges" },
    "serv_web_timeout": { min: 10000, max: 100000, msg: "appsettings.serv_web_timeout" },
    "retardo_fijo_climax": { min: 0, max: 200, msg: "appsettings.retardo_fijo_climax" }
};


/***/ }),

/***/ "O1oF":
/*!**********************************************!*\
  !*** ./src/app/_services/gateway.service.ts ***!
  \**********************************************/
/*! exports provided: GatewayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GatewayService", function() { return GatewayService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "3nF+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class GatewayService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(http) {
        super();
        this.http = http;
    }
    updateTableBss(tableBssId) {
        const url = `/gateways/updateTable/${tableBssId}`;
        return this.http.get(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getGatewayById(gatewayId) {
        const url = `/gateways/${gatewayId}`;
        return this.http.get(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getGatewayIpList(gatewayId) {
        const url = `/gateways/iplist/${gatewayId}`;
        return this.http.get(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getGatewayHardware(gatewayId) {
        const url = `/gateways/${gatewayId}/hardwareResume`;
        return this.http.get(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getGatewayCopy(gatewayId) {
        const url = `/gateways/getServiceData/${gatewayId}`;
        return this.http.get(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getGatewayAll(gatewayId) {
        const url = `/gateways/getAll/${gatewayId}`;
        return this.http.get(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getAvailableServices() {
        const url = `/gateways/availableservices`;
        return this.http.get(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    checkIpAddress(ip, idConfig, idGtw) {
        const idGtwOpt = (idGtw) ? idGtw.toString() : 'noData';
        const url = `/gateways/checkipaddr/${ip}/${idConfig}/${idGtwOpt}`;
        return this.http.get(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    checkName(name, idConfig, idGtw) {
        const idGtwOpt = (idGtw) ? idGtw.toString() : 'noData';
        const url = `/gateways/checkgtwname/${name}/${idConfig}/${idGtwOpt}`;
        return this.http.get(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    createGtw(idSite, gateway) {
        const url = `/gateways/createNewGateway/:newGateway/:idSite`;
        const data = {
            'idSite': idSite,
            'newGateway': gateway
        };
        return this.http.post(url, data, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    updateGtw(idGtw, gateway) {
        const url = `/gateways/updateGateway/:newGateway/:idGtw`;
        const data = {
            'idGtw': idGtw,
            'newGateway': gateway
        };
        return this.http.post(url, data, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    copyGtw(idGtw, newGtwName, ipv, ipCpu0, ipCpu1, ipGTW) {
        const url = `/gateways/${idGtw}/${newGtwName}/${ipCpu0}/${ipCpu1}/${ipv}/${ipGTW}`;
        return this.http.request('COPY', url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    deleteGtw(id) {
        const url = `/gateways/${id}`;
        return this.http.delete(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    importGtw(file, configId, siteId) {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        const url = `/gwimport`;
        const formData = new FormData();
        formData.append('user', user.name);
        formData.append('perfil', user.perfil);
        formData.append('config', configId.toString());
        formData.append('site', siteId.toString());
        formData.append('upl', file);
        return this.http.post(url, formData, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    exportGtw(idGtw) {
        const url = `/configurations/export/${idGtw}`;
        return this.http.get(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
}
GatewayService.ɵfac = function GatewayService_Factory(t) { return new (t || GatewayService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
GatewayService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GatewayService, factory: GatewayService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GatewayService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _core_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/app.settings */ "MuhJ");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_services/login.service */ "8rbx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_services/data.service */ "plSC");








class AppComponent {
    constructor(loginService, router, dataService) {
        this.loginService = loginService;
        this.router = router;
        this.dataService = dataService;
        this.title = 'Ulises';
    }
    startAlive() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.interval = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
            this.subscription = this.interval.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                try {
                    yield this.loginService.alive().toPromise();
                }
                catch (error) {
                    this.catchError(error);
                    this.destroyAlive();
                }
            }));
        });
    }
    destroyAlive() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.subscription.unsubscribe();
        });
    }
    catchError(error) {
        console.log("Exception Error => ", error);
        if (error.status == _core_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].UNAUTHORIZED_ERROR_CODE) {
            this.dataService.updateDataError(error.error.error);
            this.router.navigate(['/access']);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
AppComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppComponent, factory: AppComponent.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] }]; }, null); })();


/***/ }),

/***/ "T5gh":
/*!**************************************!*\
  !*** ./src/app/guards/auth-guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/login.service */ "8rbx");





class AuthGuard {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    canActivate(route, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (yield this.loginService.isAuthenticated().toPromise()) {
                return true;
            }
            this.router.navigate(['/access']);
            return false;
        });
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "VITL":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "3nF+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class UserService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(http) {
        super();
        this.http = http;
    }
    getUsers() {
        const url = `/users`;
        return this.http.get(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    createUser(name, clave, perfil) {
        const url = `/users/user`;
        const data = {
            'gateways': [],
            'user': {
                'name': name,
                'clave': clave,
                'perfil': perfil
            }
        };
        return this.http.post(url, data, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
        ;
    }
    editUser(name, clave, perfil, idOperadores) {
        const url = `/users/user`;
        const data = {
            'gateways': [],
            'user': {
                'name': name,
                'clave': clave,
                'perfil': perfil,
                'idOperadores': idOperadores
            }
        };
        return this.http.put(url, data, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    deleteUser(id) {
        const url = `/users/${id}`;
        return this.http.delete(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    isRole(role) {
        const profiles = {
            'VISUALIZATION': 1,
            'MANDO': 2,
            'ALARM_INHIBITION': 4,
            'ALARM_RECOGNITION': 8,
            'USER_MANAGEMENT': 16,
            'SUPERVISED_CONFIGURATION': 32,
            'ADMIN': 64,
            'GATEWAYS_VISUALIZATION': 128,
            'GATEWAYS_ADMIN': 256,
            'HISTORICS': 512,
            'BACKUP': 1024,
            'ACUSTIC_WARNING': 2048,
            'GATEWAYS': 4096,
            'SOFTWARE_UPDATE': 8192,
            'CONFIGURATION': 32768
        };
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        if (role === 'ADMIN') {
            return (user.perfil & profiles['ADMIN']) ? true : false;
        }
        if (role === 'USER_MANAGEMENT') {
            return (user.perfil & profiles['USER_MANAGEMENT']) ? true : false;
        }
        if (role === 'SUPERVISED_CONFIGURATION') {
            return (user.perfil & profiles['SUPERVISED_CONFIGURATION']) ? true : false;
        }
        if (role === 'CONFIGURATION') {
            return (user.perfil & profiles['CONFIGURATION']) ? true : false;
        }
        if (role === 'BACKUP') {
            return (user.perfil & profiles['BACKUP']) ? true : false;
        }
        if (role === 'SOFTWARE_UPDATE') {
            return (user.perfil & profiles['SOFTWARE_UPDATE']) ? true : false;
        }
        if (role === 'VISUALIZATION') {
            return (user.perfil & profiles['VISUALIZATION']) ? true : false;
        }
        if (role === 'GATEWAYS_VISUALIZATION') {
            return (user.perfil & profiles['GATEWAYS_VISUALIZATION']) ? true : false;
        }
        if (role === 'MANDO') {
            return (user.perfil & profiles['MANDO']) ? true : false;
        }
        if (role === 'HISTORICS') {
            return (user.perfil & profiles['HISTORICS']) ? true : false;
        }
        if (role === 'ALARM_INHIBITION') {
            return (user.perfil & profiles['HISTORICS']) ? true : false;
        }
        if (role === 'ALARM_RECOGNITION') {
            return (user.perfil & profiles['HISTORICS']) ? true : false;
        }
        if (role === 'GATEWAYS') {
            return (user.perfil & profiles['GATEWAYS']) ? true : false;
        }
        if (role === 'GATEWAYS_ADMIN') {
            return (user.perfil & profiles['GATEWAYS_ADMIN']) ? true : false;
        }
        return false;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/login.service */ "8rbx");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.component */ "Sy1n");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/data.service */ "plSC");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/user.service */ "VITL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _common_translate_translate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/translate/translate.component */ "B8nJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");















function LoginComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "em", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.showErrorLogin());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, ctx_r0.errorMessage));
} }
const _c0 = function () { return { standalone: true }; };
class LoginComponent {
    constructor(router, loginService, app, route, dataService, userService) {
        this.router = router;
        this.loginService = loginService;
        this.app = app;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.credentials = {
            username: "",
            password: ""
        };
        this.dangerAlert = false;
    }
    ngOnInit() {
        const error = this.dataService.getDataError();
        if (error != null) {
            this.app.destroyAlive();
            this.errorMessage = error;
            this.dangerAlert = true;
        }
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const loginUser = yield this.loginService.login(this.credentials.username, this.credentials.password).toPromise();
                localStorage.setItem('user', JSON.stringify(loginUser));
                this.navigate();
            }
            catch (error) {
                if (error.error) {
                    this.errorMessage = error.error.message;
                }
                else {
                    this.errorMessage = 'err.ERROR_HAS_OCURRED';
                }
                this.dangerAlert = true;
            }
        });
    }
    navigate() {
        if (this.userService.isRole('ADMIN') || this.userService.isRole('CONFIGURATION') || this.userService.isRole('VISUALIZATION')
            || this.userService.isRole('SUPERVISED_CONFIGURATION')) {
            this.router.navigate(['home/config']);
            return;
        }
        if (this.userService.isRole('USER_MANAGEMENT')) {
            this.router.navigate(['home/config/users']);
            return;
        }
        if (this.userService.isRole('HISTORICS')) {
            this.router.navigate(['/home/maintenance/historic']);
            return;
        }
        if (this.userService.isRole('BACKUP')) {
            this.router.navigate(['/home/backupbd/params']);
            return;
        }
    }
    showErrorLogin() {
        return this.dangerAlert ? 'show-alert' : 'hide-alert';
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["login"]], decls: 21, vars: 16, consts: [[1, "login-container"], [1, "login-form"], [1, "translate"], [1, "logo"], ["class", "error alert-danger", 3, "ngClass", 4, "ngIf"], [1, "example-form"], [1, "example-full-width"], ["matInput", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["matInput", "", "type", "password", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "submmit-btn"], ["mat-raised-button", "", 1, "btn", 3, "click"], [1, "error", "alert-danger", 3, "ngClass"], [1, "fa", "fa-times-circle"], [1, "message"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LoginComponent_div_5_Template, 5, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.credentials.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) { return ctx.credentials.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showErrorLogin());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 8, "login.user"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.credentials.username)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 10, "login.password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.credentials.password)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 12, "login.login"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _common_translate_translate_component__WEBPACK_IMPORTED_MODULE_8__["TranslateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  background: linear-gradient(#a4c542, #48803e);\n  \n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  background: #ffffff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 2px solid black;\n  padding: 25px 80px;\n  padding-top: 0;\n}\n@media screen and (min-width: 320px) and (max-width: 600px) {\n  [_nghost-%COMP%]   .login-container[_ngcontent-%COMP%] {\n    padding: 12px 40px;\n  }\n}\n[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .translate[_ngcontent-%COMP%] {\n  margin: 1rem;\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 160px;\n  width: 215px;\n  background-image: url(\"/assets/images/corporativo.png\");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n  margin: auto;\n  margin-top: 10px;\n}\n@media screen and (min-width: 320px) and (max-width: 600px) {\n  [_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    height: 96px;\n    width: 123px;\n  }\n}\n[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  color: #d8000c;\n  background-color: #ffd2d2;\n  margin-bottom: 10px;\n  padding: 5px 15px;\n  display: flex;\n  border-radius: 5px;\n}\n[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  margin: auto 0;\n}\n[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  margin: auto;\n}\n[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .error.show-alert[_ngcontent-%COMP%] {\n  visibility: visible !important;\n  opacity: 1 !important;\n}\n[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .error.alert-danger[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s, opacity 0.2s linear;\n}\n@media screen and (max-width: 575px) {\n  [_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .error.alert-danger[_ngcontent-%COMP%] {\n    max-height: 50px;\n    padding: 0;\n  }\n}\n[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .submmit-btn[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .login-container[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .submmit-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #48803e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZDQUFBO0VBQStDLHFEQUFBO0VBQy9DLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQUVKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBRVI7QUFBUTtFQVpKO0lBYVEsa0JBQUE7RUFHVjtBQUNGO0FBRFE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUdaO0FBRFk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBR2hCO0FBQVk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVEQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRWhCO0FBQWdCO0VBVko7SUFXUSxZQUFBO0lBQ0EsWUFBQTtFQUdsQjtBQUNGO0FBQVk7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBRWhCO0FBQWdCO0VBQ0ksY0FBQTtBQUVwQjtBQUNnQjtFQUNJLFlBQUE7QUFDcEI7QUFFZ0I7RUFDSSw4QkFBQTtFQUNBLHFCQUFBO0FBQXBCO0FBR2dCO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsOENBQUE7QUFEcEI7QUFHb0I7RUFMSjtJQU1RLGdCQUFBO0lBQ0EsVUFBQTtFQUF0QjtBQUNGO0FBSVk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUZoQjtBQUtZO0VBQ0ksV0FBQTtBQUhoQjtBQU1ZO0VBQ0ksV0FBQTtBQUpoQjtBQU9ZO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFMaEI7QUFPZ0I7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUFMcEIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2E0YzU0MiwgIzQ4ODAzZSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG5cclxuICAgIC5sb2dpbi1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIHBhZGRpbmc6IDI1cHggODBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDQwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9naW4tZm9ybSB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgLnRyYW5zbGF0ZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjE1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9jb3Jwb3JhdGl2by5wbmdcIik7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTZweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTIzcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5lcnJvciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2Q4MDAwYztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQyZDI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICYuc2hvdy1hbGVydCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmLmFsZXJ0LWRhbmdlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjJzIGxpbmVhcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5leGFtcGxlLWZvcm0ge1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxvZ2luLWZ1bGwtd2lkdGgge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zdWJtbWl0LWJ0biB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg4MDNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }, { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/auth-guard */ "T5gh");
/* harmony import */ var _core_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/material.module */ "EZIC");
/* harmony import */ var _interceptors_http4debug_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interceptors/http4debug.interceptor */ "2M2R");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _components_common_common_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/common/common.module */ "0ppU");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _services_mat_paginator_i18n_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_services/mat-paginator-i18n.service */ "cDMb");











//Translation








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _interceptors_http4debug_interceptor__WEBPACK_IMPORTED_MODULE_10__["Http4debugInterceptor"], multi: true },
        {
            provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorIntl"],
            useClass: _services_mat_paginator_i18n_service__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorI18nService"],
        }
    ], imports: [[
            _components_common_common_module__WEBPACK_IMPORTED_MODULE_13__["CommonsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _core_material_module__WEBPACK_IMPORTED_MODULE_9__["CustomMaterialModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                    useFactory: (http) => {
                        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http);
                    },
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
                }
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]], imports: [_components_common_common_module__WEBPACK_IMPORTED_MODULE_13__["CommonsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _core_material_module__WEBPACK_IMPORTED_MODULE_9__["CustomMaterialModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                ],
                imports: [
                    _components_common_common_module__WEBPACK_IMPORTED_MODULE_13__["CommonsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _core_material_module__WEBPACK_IMPORTED_MODULE_9__["CustomMaterialModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                            useFactory: (http) => {
                                return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http);
                            },
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
                        }
                    }),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                ],
                providers: [
                    _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _interceptors_http4debug_interceptor__WEBPACK_IMPORTED_MODULE_10__["Http4debugInterceptor"], multi: true },
                    {
                        provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorIntl"],
                        useClass: _services_mat_paginator_i18n_service__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorI18nService"],
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth-guard */ "T5gh");






const routes = [
    { path: 'access', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], pathMatch: 'full' },
    { path: 'home', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], loadChildren: () => __webpack_require__.e(/*! import() | components-home-home-module */ "components-home-home-module").then(__webpack_require__.bind(null, /*! ./components/home/home.module */ "7vJP")).then(m => m.HomeModule) },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cBvK":
/*!********************************************************************!*\
  !*** ./src/app/components/common/ul-footer/ul-footer.component.ts ***!
  \********************************************************************/
/*! exports provided: UlFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UlFooterComponent", function() { return UlFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/login.service */ "8rbx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






function UlFooterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "footer.version"), " ", ctx_r0.version.version, ".", ctx_r0.version.subversion, " ");
} }
function UlFooterComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "R16", " ");
} }
class UlFooterComponent {
    constructor(loginService) {
        this.loginService = loginService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.version = yield this.loginService.version().toPromise();
        });
    }
}
UlFooterComponent.ɵfac = function UlFooterComponent_Factory(t) { return new (t || UlFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"])); };
UlFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UlFooterComponent, selectors: [["ul-footer"]], decls: 7, vars: 5, consts: [[1, "footer"], [1, "version"], ["class", "number", 4, "ngIf"], ["class", "r16", 4, "ngIf"], [1, "copy"], [1, "number"], [1, "r16"]], template: function UlFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UlFooterComponent_div_2_Template, 3, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UlFooterComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.version && ctx.version.version && ctx.version.subversion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.version && ctx.version.R16Mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 3, "footer.copyright"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: [".footer[_ngcontent-%COMP%] {\n  font-size: small;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n.footer[_ngcontent-%COMP%]   .version[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.footer[_ngcontent-%COMP%]   .version[_ngcontent-%COMP%]   .r16[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdWwtZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFBSjtBQUVJO0VBRUksYUFBQTtFQUNBLHVCQUFBO0FBRFI7QUFHUTtFQUNJLGdCQUFBO0FBRFoiLCJmaWxlIjoidWwtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcblxyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgIC52ZXJzaW9uIHtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLnIxNiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UlFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ul-footer',
                templateUrl: './ul-footer.component.html',
                styleUrls: ['./ul-footer.component.scss']
            }]
    }], function () { return [{ type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "cDMb":
/*!*********************************************************!*\
  !*** ./src/app/_services/mat-paginator-i18n.service.ts ***!
  \*********************************************************/
/*! exports provided: MatPaginatorI18nService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorI18nService", function() { return MatPaginatorI18nService; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




const ITEMS_PER_PAGE = 'paginator.items_per_page';
const NEXT_PAGE = 'paginator.next_page';
const PREV_PAGE = 'paginator.previous_page';
const FIRST_PAGE = 'paginator.first_page';
const LAST_PAGE = 'paginator.last_page';
class MatPaginatorI18nService extends _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginatorIntl"] {
    constructor(translate) {
        super();
        /**
         * This function gets the label of range in the mat-table
         */
        this.getRangeLabel = (page, pageSize, length) => {
            if (length === 0 || pageSize === 0) {
                return `0 / ${length}`;
            }
            length = Math.max(length, 0);
            const startIndex = page * pageSize;
            const endIndex = startIndex < length
                ? Math.min(startIndex + pageSize, length)
                : startIndex + pageSize;
            return `${startIndex + 1} - ${endIndex} / ${length}`;
        };
        this.translate = translate;
        this.translate.onLangChange.subscribe((e) => {
            this.getAndInitTranslations();
        });
        this.getAndInitTranslations();
    }
    /**
     * This function gets labels translations and check if the language changes to get the translations again
     */
    getAndInitTranslations() {
        this.translate.get([
            ITEMS_PER_PAGE,
            NEXT_PAGE,
            PREV_PAGE,
            FIRST_PAGE,
            LAST_PAGE,
        ])
            .subscribe((translation) => {
            this.itemsPerPageLabel = translation[ITEMS_PER_PAGE];
            this.nextPageLabel = translation[NEXT_PAGE];
            this.previousPageLabel = translation[PREV_PAGE];
            this.firstPageLabel = translation[FIRST_PAGE];
            this.lastPageLabel = translation[LAST_PAGE];
            this.changes.next();
        });
    }
}
MatPaginatorI18nService.ɵfac = function MatPaginatorI18nService_Factory(t) { return new (t || MatPaginatorI18nService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
MatPaginatorI18nService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MatPaginatorI18nService, factory: MatPaginatorI18nService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatPaginatorI18nService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "f5O9":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "3nF+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





class AlertService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] {
    constructor(translate) {
        super();
        this.translate = translate;
    }
    confirmationMessage(title, message, accept, cancel) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: title,
            text: message,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: accept,
            cancelButtonText: cancel,
            heightAuto: false
        });
    }
    errorMessage(title, message, accept) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: title,
            text: message,
            icon: 'error',
            confirmButtonText: accept,
            heightAuto: false
        });
    }
    successMessage(title, message, accept) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: title,
            text: message,
            icon: 'success',
            confirmButtonText: accept,
            heightAuto: false
        });
    }
    fieldMessage(title, message, accept) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: title,
            html: message,
            icon: 'info',
            heightAuto: true,
            confirmButtonText: accept
        });
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "plSC":
/*!*******************************************!*\
  !*** ./src/app/_services/data.service.ts ***!
  \*******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DataService {
    getDataConfigId() {
        return Number(JSON.parse(localStorage.getItem('configId') || '-1'));
    }
    getDataSiteId() {
        return Number(JSON.parse(localStorage.getItem('siteId') || '-1'));
    }
    getDataGatewayTitle() {
        return localStorage.getItem('gatewayTitle') || 'Not Found';
    }
    getDataError() {
        return this.error;
    }
    getDataSlot() {
        return JSON.parse(localStorage.getItem('slot') || '-1');
    }
    getDataGatewayPreviousUrl() {
        return this.gatewayPreviousUrl;
    }
    updateDataConfigId(data) {
        localStorage.setItem('configId', JSON.stringify(data));
    }
    updateDataSiteId(data) {
        localStorage.setItem('siteId', JSON.stringify(data));
    }
    updateDataGatewayTitle(data) {
        localStorage.setItem('gatewayTitle', data);
    }
    updateDataError(error) {
        this.error = error;
    }
    updateDataSlot(slot) {
        localStorage.setItem('slot', JSON.stringify(slot));
    }
    updateDataGatewayPreviousUrl(url) {
        this.gatewayPreviousUrl = url;
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "rkFe":
/*!*********************************************!*\
  !*** ./src/app/_services/config.service.ts ***!
  \*********************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "3nF+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ConfigService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(http) {
        super();
        this.http = http;
    }
    getAbout() {
        const url = `/about`;
        return this.http.get(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getConfigurations() {
        const url = `/configurations`;
        return this.http.get(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getConfigurationById(id) {
        const url = `/configurations/${id}`;
        return this.http.get(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    createConfiguration(name, description, activa) {
        const url = `/configurations/cfg`;
        const data = {
            'name': name,
            'description': description,
            'activa': activa ? 1 : 0
        };
        return this.http.post(url, data, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    checkConfigurationName(id, name) {
        const url = `/configurations/checkConfigName/${name}/${id}`;
        return this.http.get(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    checkConfigIp(ip, idCFG) {
        const url = `/configurations/checkConfigIp/${ip}/${idCFG}`;
        return this.http.get(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getConfigurationByGtw(idGTW) {
        const url = `/configurations/checkConf/${idGTW}`;
        return this.http.get(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    updateConfiguration(configuration) {
        const url = `/configurations/${configuration.idCFG}`;
        const data = {
            'activa': configuration.activa ? 1 : 0,
            'description': configuration.description,
            'idCFG': configuration.idCFG,
            'name': configuration.name
        };
        return this.http.put(url, data, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    deleteConfiguration(id) {
        const url = `/configurations/${id}`;
        return this.http.delete(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    copyConfiguration(id, name, description) {
        const url = `/configurations/${id}/copy`;
        const data = {
            name: name,
            description: description
        };
        return this.http.post(url, data, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getConfigGateways(id) {
        const url = `/configurations/${id}/gateways`;
        return this.http.get(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getLocalConfig() {
        const url = `/localconfig`;
        return this.http.get(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    updateLocalConfig(localConfig) {
        const url = `/localconfig`;
        return this.http.post(url, localConfig, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getConfig(id) {
        const url = `/configurations/SP_cfg/${id}`;
        return this.http.get(url, this.buildOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "xa+l":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: Debugging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Debugging", function() { return Debugging; });
var Debugging = window.location.port == "4200";


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zqYk":
/*!************************************************************!*\
  !*** ./src/app/components/common/about/about.component.ts ***!
  \************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/config.service */ "rkFe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







function AboutComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutComponent_div_0_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.dialogRef.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 9, "about.title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 11, "about.redan_title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", ctx_r0.localConfig.Version, ".", ctx_r0.localConfig.SubVersion, ", ", ctx_r0.localConfig.Date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 13, "about.copyright"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r0.licenseEndpoint, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 15, "about.licence"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 17, "button.accept"));
} }
class AboutComponent {
    constructor(dialogRef, configService) {
        this.dialogRef = dialogRef;
        this.configService = configService;
        this.ready = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.ready = false;
            this.localConfig = yield this.configService.getLocalConfig().toPromise();
            this.licenseEndpoint = `/about`;
            this.ready = true;
        });
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 1, vars: 1, consts: [["class", "about", 4, "ngIf"], [1, "about"], [1, "title"], [1, "body"], [1, "redan-title"], [1, "version"], [1, "copyright"], [1, "licence"], [2, "text-align", "right"], ["target", "_blank", 3, "href"], [1, "btn"], ["mat-raised-button", "", "cdkFocusInitial", "", 1, "custom-raised-btn", 3, "click"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AboutComponent_div_0_Template, 22, 19, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ready);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".about[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .redan-title[_ngcontent-%COMP%] {\n  color: green;\n  text-align: center;\n  margin-top: 0px;\n  margin-bottom: 8px;\n}\n.about[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .version[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n}\n.about[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  color: green;\n  font: 14px;\n}\n.about[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.about[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .custom-raised-btn[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  position: relative;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  -webkit-tap-highlight-color: transparent;\n  display: inline-block;\n  white-space: nowrap;\n  text-decoration: none;\n  vertical-align: baseline;\n  text-align: center;\n  margin: 0;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n  border-radius: 4px;\n  overflow: visible;\n  transform: translate3d(0, 0, 0);\n  transition: 400ms cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVE7RUFFSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFKWjtBQU9RO0VBRUksa0JBQUE7RUFDQSxZQUFBO0FBTlo7QUFTUTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FBUFo7QUFXSTtFQUVJLGFBQUE7RUFDQSx1QkFBQTtBQVZSO0FBWVE7RUFFSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUdBQUE7RUFDQSxpREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlIQUFBO0FBWFoiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQge1xyXG5cclxuICAgIC5ib2R5IHtcclxuXHJcbiAgICAgICAgLnJlZGFuLXRpdGxlIHtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC52ZXJzaW9uIHtcclxuXHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvcHlyaWdodCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgICAgICAgZm9udDogMTRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5jdXN0b20tcmFpc2VkLWJ0biB7XHJcblxyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNjRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSksYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }]; }, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map