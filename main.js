(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _pubs_pubs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pubs/pubs.component */ "./src/app/pubs/pubs.component.ts");
/* harmony import */ var _research_research_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./research/research.component */ "./src/app/research/research.component.ts");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bio/bio.component */ "./src/app/bio/bio.component.ts");
/* harmony import */ var _elib_elib_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elib/elib.component */ "./src/app/elib/elib.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    { path: 'publications', component: _pubs_pubs_component__WEBPACK_IMPORTED_MODULE_3__["PubsComponent"] },
    { path: 'biography', component: _bio_bio_component__WEBPACK_IMPORTED_MODULE_5__["BioComponent"] },
    { path: 'collection', component: _elib_elib_component__WEBPACK_IMPORTED_MODULE_6__["ElibComponent"] },
    { path: 'research', component: _research_research_component__WEBPACK_IMPORTED_MODULE_4__["ResearchComponent"] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                    useHash: true,
                    anchorScrolling: 'disabled',
                    scrollPositionRestoration: 'disabled'
                })
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-light bg-light shadow-sm\">\n  <div class=\"container-fluid mx-auto\">\n\n    <a class=\"navbar-brand p-0\" routerLink=\"\">\n      Dong Liu\n    </a>\n\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" aria-controls=\"collapseToggler\" [attr.aria-expanded]=\"!isCollapsed\" aria-label=\"Toggle navigation\" (click)=\"toggleMenu()\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"collapseToggler\" [ngbCollapse]=\"isCollapsed\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item mx-1\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a class=\"nav-link\" routerLink=\"\">\n            <fa-icon [icon]=\"faHome\" size=\"lg\"></fa-icon> Home\n          </a>\n        </li>\n        <!-- <li class=\"nav-item mx-1\" routerLinkActive=\"active\"> -->\n        <!--   <a class=\"nav-link\" routerLink=\"cv\"> -->\n        <!--     <fa-icon [icon]=\"faUser\" size=\"lg\"></fa-icon> Curriculum Vitae -->\n        <!--   </a> -->\n        <!-- </li> -->\n        <!-- <li class=\"nav-item mx-1\" routerLinkActive=\"active\"> -->\n        <!--   <a class=\"nav-link\" routerLink=\"biography\"> -->\n        <!--     <fa-icon [icon]=\"faUser\" size=\"lg\"></fa-icon> Bio -->\n        <!--   </a> -->\n        <!-- </li> -->\n        <li class=\"nav-item mx-1\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"collection\">\n            <fa-icon [icon]=\"faFile\" size=\"lg\"></fa-icon> E-Library\n          </a>\n        </li>\n\n        <!-- <li class=\"nav-item mx-1\" routerLinkActive=\"active\"> -->\n        <!--   <a class=\"nav-link\" routerLink=\"research\"> -->\n        <!--     <fa-icon [icon]=\"faPuzzlePiece\" size=\"lg\"></fa-icon> Research -->\n        <!--   </a> -->\n        <!-- </li> -->\n        <li class=\"nav-item mx-1\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"publications\">\n            <fa-icon [icon]=\"faFile\" size=\"lg\"></fa-icon> Publications\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n</nav>\n\n<div class=\"container-fluid mx-auto pt-3\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppComponent, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _pubs_pubs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pubs/pubs.component */ "./src/app/pubs/pubs.component.ts");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bio/bio.component */ "./src/app/bio/bio.component.ts");
/* harmony import */ var _research_research_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./research/research.component */ "./src/app/research/research.component.ts");
/* harmony import */ var _elib_elib_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./elib/elib.component */ "./src/app/elib/elib.component.ts");
/* harmony import */ var _citation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./citation.service */ "./src/app/citation.service.ts");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./news.service */ "./src/app/news.service.ts");
/* harmony import */ var _publication_publication_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./publication/publication.component */ "./src/app/publication/publication.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isCollapsed = true;
        // icons
        this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faHome"];
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"];
        this.faPuzzlePiece = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPuzzlePiece"];
        this.faFile = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faFile"];
        this.faGamepad = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGamepad"];
    }
    AppComponent.prototype.toggleMenu = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                AppComponent,
                _main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
                _pubs_pubs_component__WEBPACK_IMPORTED_MODULE_9__["PubsComponent"],
                _bio_bio_component__WEBPACK_IMPORTED_MODULE_10__["BioComponent"],
                _research_research_component__WEBPACK_IMPORTED_MODULE_11__["ResearchComponent"],
                _pubs_pubs_component__WEBPACK_IMPORTED_MODULE_9__["FilteredPipe"],
                _publication_publication_component__WEBPACK_IMPORTED_MODULE_15__["PublicationComponent"],
                _publication_publication_component__WEBPACK_IMPORTED_MODULE_15__["BibtexmodalComponent"],
                _elib_elib_component__WEBPACK_IMPORTED_MODULE_12__["ElibComponent"],
            ],
            entryComponents: [
                _publication_publication_component__WEBPACK_IMPORTED_MODULE_15__["BibtexmodalComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]
            ],
            providers: [
                _citation_service__WEBPACK_IMPORTED_MODULE_13__["CitationService"],
                _news_service__WEBPACK_IMPORTED_MODULE_14__["NewsService"]
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bio/bio.component.html":
/*!****************************************!*\
  !*** ./src/app/bio/bio.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\nquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\nconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\ncillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\nproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\nquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\nconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\ncillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\nproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"

/***/ }),

/***/ "./src/app/bio/bio.component.ts":
/*!**************************************!*\
  !*** ./src/app/bio/bio.component.ts ***!
  \**************************************/
/*! exports provided: BioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioComponent", function() { return BioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BioComponent = /** @class */ (function () {
    function BioComponent() {
    }
    BioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bio',
            template: __webpack_require__(/*! ./bio.component.html */ "./src/app/bio/bio.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], BioComponent);
    return BioComponent;
}());



/***/ }),

/***/ "./src/app/citation.service.ts":
/*!*************************************!*\
  !*** ./src/app/citation.service.ts ***!
  \*************************************/
/*! exports provided: CitationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitationService", function() { return CitationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// get data of publiction
function getDate(pub) {
    if (pub.Fields.Month) {
        return new Date(Date.parse(pub.Fields.Month + " 1, " + pub.Fields.Year));
    }
    else {
        return new Date(Date.parse("Jan 1, " + pub.Fields.Year));
    }
}
// replace all but last occurrence of token
function replaceAllButLast(str, token) {
    if (str.indexOf(token) == -1) {
        return str;
    }
    var parts = str.split(token);
    return parts.slice(0, -1) + token + parts.slice(-1);
}
// handle list of references
function handleData(rawdata) {
    var rawjson = BibtexParser(rawdata).entries;
    // Remove `and' between authors
    for (var index in rawjson) {
        rawjson[index].Fields.Author_noand =
            replaceAllButLast(rawjson[index].Fields.Author, ' and');
    }
    return rawjson.sort(function (e1, e2) { return -getDate(e1).getTime() + getDate(e2).getTime(); });
}
// filter complete list by cite keys
function subset(publist, keys) {
    return publist.filter(function (entry) { return keys.findIndex(function (key) { return key == entry.EntryKey; }) >= 0; });
}
var CitationService = /** @class */ (function () {
    function CitationService(http) {
        this.http = http;
    }
    // return publications matching citekey
    CitationService.prototype.citeSubset = function (keys) {
        return this.citeAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (publist) { return subset(publist, keys); }));
    };
    // return all publications sorted by date (descending)
    CitationService.prototype.citeAll = function () {
        return this.http.get('assets/bibfile.bib', { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (rawdata) { return handleData(rawdata); }));
    };
    CitationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CitationService);
    return CitationService;
}());



/***/ }),

/***/ "./src/app/elib/elib.component.html":
/*!******************************************!*\
  !*** ./src/app/elib/elib.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\"\n\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\" lang=\"en\" xml:lang=\"en\">\n<head>\n<!-- 2020-05-22 Fri 15:02 -->\n<meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\" />\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n<title>A Collection of Literature on Probabilistic Graphical Models</title>\n<meta name=\"generator\" content=\"Org mode\" />\n<meta name=\"author\" content=\"Dong\" />\n<style type=\"text/css\">\n <!--/*--><![CDATA[/*><!--*/\n  .title  { text-align: center;\n             margin-bottom: .2em; }\n  .subtitle { text-align: center;\n              font-size: medium;\n              font-weight: bold;\n              margin-top:0; }\n  .todo   { font-family: monospace; color: red; }\n  .done   { font-family: monospace; color: green; }\n  .priority { font-family: monospace; color: orange; }\n  .tag    { background-color: #eee; font-family: monospace;\n            padding: 2px; font-size: 80%; font-weight: normal; }\n  .timestamp { color: #bebebe; }\n  .timestamp-kwd { color: #5f9ea0; }\n  .org-right  { margin-left: auto; margin-right: 0px;  text-align: right; }\n  .org-left   { margin-left: 0px;  margin-right: auto; text-align: left; }\n  .org-center { margin-left: auto; margin-right: auto; text-align: center; }\n  .underline { text-decoration: underline; }\n  #postamble p, #preamble p { font-size: 90%; margin: .2em; }\n  p.verse { margin-left: 3%; }\n  pre {\n    border: 1px solid #ccc;\n    box-shadow: 3px 3px 3px #eee;\n    padding: 8pt;\n    font-family: monospace;\n    overflow: auto;\n    margin: 1.2em;\n  }\n  pre.src {\n    position: relative;\n    overflow: visible;\n    padding-top: 1.2em;\n  }\n  pre.src:before {\n    display: none;\n    position: absolute;\n    background-color: white;\n    top: -10px;\n    right: 10px;\n    padding: 3px;\n    border: 1px solid black;\n  }\n  pre.src:hover:before { display: inline;}\n  /* Languages per Org manual */\n  pre.src-asymptote:before { content: 'Asymptote'; }\n  pre.src-awk:before { content: 'Awk'; }\n  pre.src-C:before { content: 'C'; }\n  /* pre.src-C++ doesn't work in CSS */\n  pre.src-clojure:before { content: 'Clojure'; }\n  pre.src-css:before { content: 'CSS'; }\n  pre.src-D:before { content: 'D'; }\n  pre.src-ditaa:before { content: 'ditaa'; }\n  pre.src-dot:before { content: 'Graphviz'; }\n  pre.src-calc:before { content: 'Emacs Calc'; }\n  pre.src-emacs-lisp:before { content: 'Emacs Lisp'; }\n  pre.src-fortran:before { content: 'Fortran'; }\n  pre.src-gnuplot:before { content: 'gnuplot'; }\n  pre.src-haskell:before { content: 'Haskell'; }\n  pre.src-hledger:before { content: 'hledger'; }\n  pre.src-java:before { content: 'Java'; }\n  pre.src-js:before { content: 'Javascript'; }\n  pre.src-latex:before { content: 'LaTeX'; }\n  pre.src-ledger:before { content: 'Ledger'; }\n  pre.src-lisp:before { content: 'Lisp'; }\n  pre.src-lilypond:before { content: 'Lilypond'; }\n  pre.src-lua:before { content: 'Lua'; }\n  pre.src-matlab:before { content: 'MATLAB'; }\n  pre.src-mscgen:before { content: 'Mscgen'; }\n  pre.src-ocaml:before { content: 'Objective Caml'; }\n  pre.src-octave:before { content: 'Octave'; }\n  pre.src-org:before { content: 'Org mode'; }\n  pre.src-oz:before { content: 'OZ'; }\n  pre.src-plantuml:before { content: 'Plantuml'; }\n  pre.src-processing:before { content: 'Processing.js'; }\n  pre.src-python:before { content: 'Python'; }\n  pre.src-R:before { content: 'R'; }\n  pre.src-ruby:before { content: 'Ruby'; }\n  pre.src-sass:before { content: 'Sass'; }\n  pre.src-scheme:before { content: 'Scheme'; }\n  pre.src-screen:before { content: 'Gnu Screen'; }\n  pre.src-sed:before { content: 'Sed'; }\n  pre.src-sh:before { content: 'shell'; }\n  pre.src-sql:before { content: 'SQL'; }\n  pre.src-sqlite:before { content: 'SQLite'; }\n  /* additional languages in org.el's org-babel-load-languages alist */\n  pre.src-forth:before { content: 'Forth'; }\n  pre.src-io:before { content: 'IO'; }\n  pre.src-J:before { content: 'J'; }\n  pre.src-makefile:before { content: 'Makefile'; }\n  pre.src-maxima:before { content: 'Maxima'; }\n  pre.src-perl:before { content: 'Perl'; }\n  pre.src-picolisp:before { content: 'Pico Lisp'; }\n  pre.src-scala:before { content: 'Scala'; }\n  pre.src-shell:before { content: 'Shell Script'; }\n  pre.src-ebnf2ps:before { content: 'ebfn2ps'; }\n  /* additional language identifiers per \"defun org-babel-execute\"\n       in ob-*.el */\n  pre.src-cpp:before  { content: 'C++'; }\n  pre.src-abc:before  { content: 'ABC'; }\n  pre.src-coq:before  { content: 'Coq'; }\n  pre.src-groovy:before  { content: 'Groovy'; }\n  /* additional language identifiers from org-babel-shell-names in\n     ob-shell.el: ob-shell is the only babel language using a lambda to put\n     the execution function name together. */\n  pre.src-bash:before  { content: 'bash'; }\n  pre.src-csh:before  { content: 'csh'; }\n  pre.src-ash:before  { content: 'ash'; }\n  pre.src-dash:before  { content: 'dash'; }\n  pre.src-ksh:before  { content: 'ksh'; }\n  pre.src-mksh:before  { content: 'mksh'; }\n  pre.src-posh:before  { content: 'posh'; }\n  /* Additional Emacs modes also supported by the LaTeX listings package */\n  pre.src-ada:before { content: 'Ada'; }\n  pre.src-asm:before { content: 'Assembler'; }\n  pre.src-caml:before { content: 'Caml'; }\n  pre.src-delphi:before { content: 'Delphi'; }\n  pre.src-html:before { content: 'HTML'; }\n  pre.src-idl:before { content: 'IDL'; }\n  pre.src-mercury:before { content: 'Mercury'; }\n  pre.src-metapost:before { content: 'MetaPost'; }\n  pre.src-modula-2:before { content: 'Modula-2'; }\n  pre.src-pascal:before { content: 'Pascal'; }\n  pre.src-ps:before { content: 'PostScript'; }\n  pre.src-prolog:before { content: 'Prolog'; }\n  pre.src-simula:before { content: 'Simula'; }\n  pre.src-tcl:before { content: 'tcl'; }\n  pre.src-tex:before { content: 'TeX'; }\n  pre.src-plain-tex:before { content: 'Plain TeX'; }\n  pre.src-verilog:before { content: 'Verilog'; }\n  pre.src-vhdl:before { content: 'VHDL'; }\n  pre.src-xml:before { content: 'XML'; }\n  pre.src-nxml:before { content: 'XML'; }\n  /* add a generic configuration mode; LaTeX export needs an additional\n     (add-to-list 'org-latex-listings-langs '(conf \" \")) in .emacs */\n  pre.src-conf:before { content: 'Configuration File'; }\n\n  table { border-collapse:collapse; }\n  caption.t-above { caption-side: top; }\n  caption.t-bottom { caption-side: bottom; }\n  td, th { vertical-align:top;  }\n  th.org-right  { text-align: center;  }\n  th.org-left   { text-align: center;   }\n  th.org-center { text-align: center; }\n  td.org-right  { text-align: right;  }\n  td.org-left   { text-align: left;   }\n  td.org-center { text-align: center; }\n  dt { font-weight: bold; }\n  .footpara { display: inline; }\n  .footdef  { margin-bottom: 1em; }\n  .figure { padding: 1em; }\n  .figure p { text-align: center; }\n  .inlinetask {\n    padding: 10px;\n    border: 2px solid gray;\n    margin: 10px;\n    background: #ffffcc;\n  }\n  #org-div-home-and-up\n   { text-align: right; font-size: 70%; white-space: nowrap; }\n  textarea { overflow-x: auto; }\n  .linenr { font-size: smaller }\n  .code-highlighted { background-color: #ffff00; }\n  .org-info-js_info-navigation { border-style: none; }\n  #org-info-js_console-label\n    { font-size: 10px; font-weight: bold; white-space: nowrap; }\n  .org-info-js_search-highlight\n    { background-color: #ffff00; color: #000000; font-weight: bold; }\n  .org-svg { width: 90%; }\n  /*]]>*/-->\n</style>\n<script type=\"text/javascript\">\n/*\n@licstart  The following is the entire license notice for the\nJavaScript code in this tag.\n\nCopyright (C) 2012-2019 Free Software Foundation, Inc.\n\nThe JavaScript code in this tag is free software: you can\nredistribute it and/or modify it under the terms of the GNU\nGeneral Public License (GNU GPL) as published by the Free Software\nFoundation, either version 3 of the License, or (at your option)\nany later version.  The code is distributed WITHOUT ANY WARRANTY;\nwithout even the implied warranty of MERCHANTABILITY or FITNESS\nFOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.\n\nAs additional permission under GNU GPL version 3 section 7, you\nmay distribute non-source (e.g., minimized or compacted) forms of\nthat code without the copy of the GNU GPL normally required by\nsection 4, provided you include this license notice and a URL\nthrough which recipients can access the Corresponding Source.\n\n\n@licend  The above is the entire license notice\nfor the JavaScript code in this tag.\n*/\n<!--/*--><![CDATA[/*><!--*/\n function CodeHighlightOn(elem, id)\n {\n   var target = document.getElementById(id);\n   if(null != target) {\n     elem.cacheClassElem = elem.className;\n     elem.cacheClassTarget = target.className;\n     target.className = \"code-highlighted\";\n     elem.className   = \"code-highlighted\";\n   }\n }\n function CodeHighlightOff(elem, id)\n {\n   var target = document.getElementById(id);\n   if(elem.cacheClassElem)\n     elem.className = elem.cacheClassElem;\n   if(elem.cacheClassTarget)\n     target.className = elem.cacheClassTarget;\n }\n/*]]>*///-->\n</script>\n</head>\n<body>\n<div id=\"content\">\n<h1 class=\"title\">A Collection of Literature on Probabilistic Graphical Models</h1>\n<div id=\"table-of-contents\">\n<h2>Table of Contents</h2>\n<div id=\"text-table-of-contents\">\n<ul>\n<li><a href=\"#orgb1d3383\">1. Book and Monograph on PGMs</a>\n<ul>\n<li><a href=\"#org02c2b3f\">1.1. Books / Monograph:</a></li>\n<li><a href=\"#org899f6e6\">1.2. Cached Region</a></li>\n</ul>\n</li>\n<li><a href=\"#orgb3e4d10\">2. Inference and Learning of PGMs Papers</a>\n<ul>\n<li><a href=\"#org283786e\">2.1. Inference methods and techniques</a>\n<ul>\n<li><a href=\"#orgf6a7919\">2.1.1. Classical Inference Methods</a></li>\n<li><a href=\"#orgdaac951\">2.1.2. Improvements</a></li>\n<li><a href=\"#org9334d3e\">2.1.3. Application</a></li>\n</ul>\n</li>\n<li><a href=\"#org8b07190\">2.2. Neural network based methods</a>\n<ul>\n<li><a href=\"#org5e62646\">2.2.1. Deep learning based methods</a></li>\n<li><a href=\"#orgf56e690\">2.2.2. Variational methods</a></li>\n<li><a href=\"#org5b07d99\">2.2.3. Neural density function estimation</a></li>\n</ul>\n</li>\n<li><a href=\"#orga73c9d7\">2.3. Learning of Graphical Models</a>\n<ul>\n<li><a href=\"#orgb455581\">2.3.1. Parameter Learning</a></li>\n</ul>\n</li>\n</ul>\n</li>\n<li><a href=\"#orgc1a8396\">3. PGM and Decision-making in Dynamic Systems</a></li>\n<li><a href=\"#org8747276\">4. In Connecting with Others</a>\n<ul>\n<li><a href=\"#orgb5f09f5\">4.1. Repos</a></li>\n<li><a href=\"#orgf87b190\">4.2. Courses</a></li>\n<li><a href=\"#orgf3eefee\">4.3. Optimal Transport (likelihood-free learning)</a></li>\n</ul>\n</li>\n</ul>\n</div>\n</div>\n<p>\n<b><b>The collection of literature work on Probabilistic Graphical Models (PGMs). Source file can be found at git repository <a href=\"https://github.com/FirstHandScientist/pgm_map\">pgm-map</a>.</b></b>\n</p>\n\n<div id=\"outline-container-orgb1d3383\" class=\"outline-2\">\n<h2 id=\"orgb1d3383\"><span class=\"section-number-2\">1</span> Book and Monograph on PGMs</h2>\n<div class=\"outline-text-2\" id=\"text-1\">\n</div>\n<div id=\"outline-container-org02c2b3f\" class=\"outline-3\">\n<h3 id=\"org02c2b3f\"><span class=\"section-number-3\">1.1</span> Books / Monograph:</h3>\n<div class=\"outline-text-3\" id=\"text-1-1\">\n<ul class=\"org-ul\">\n<li>Kingma and Welling, 2019, <a href=\"file:///home/dong/Documents/my_eBooks/mLearning/introduction_to_variatinal_autoencoders.pdf\">An Introduction to Variational Autoencoders</a></li>\n<li>Sutton, 2010, <a href=\"https://homepages.inf.ed.ac.uk/csutton/publications/crftut-fnt.pdf\">An Introduction to Conditional Random Fields</a></li>\n<li>Wainwright, 2008, <a href=\"file:///home/dong/Documents/my_eBooks/mLearning/graphical_models_wainwright.pdf\">Graphical Models, Exponential Families, and Variational Inference</a></li>\n<li>Koller, 2009, <a href=\"file:///home/dong/Documents/my_eBooks/mLearning/probabilistic_graphical_models_principles_techniques.pdf\">Probabilistic graphical models: principles and techniques</a></li>\n<li>Mark Rowland, 2018, <a href=\"https://www.repository.cam.ac.uk/handle/1810/287479\">Structure in Machine Learning: Graphical Models and Monte Carlo Methods</a></li>\n<li>Yingzhen Li, 2018, <a href=\"https://www.repository.cam.ac.uk/handle/1810/277549\">Approximate Inference: New Visions</a></li>\n<li><p>\nAdrian Weller, 2014, <a href=\"http://mlg.eng.cam.ac.uk/adrian/phd_FINAL.pdf\">Methods for Inference in Graphical Models</a>\n</p>\n\n<p>\nIhler, Alexander:\n</p></li>\n\n<li>Lou, Qi, 2018, <a href=\"https://escholarship.org/uc/item/7sc0m97f\">Anytime Approximate Inference in Graphical Models</a></li>\n<li>Ping, Wei, 2016, <a href=\"https://escholarship.org/uc/item/7q90z4b5\">Learning and Inference in Latent Variable Graphical Models</a></li>\n<li>Forouzan, Sholeh, 2015, <a href=\"https://escholarship.org/uc/item/5n4733cz\">Approximate Inference in Graphical Models</a></li>\n<li><p>\nQiang, Liu, 2014, <a href=\"https://escholarship.org/uc/item/92p8w3xb\">Reasoning and Decisions in Probabilistic Graphical Models - A Unified Framework</a>\n</p>\n\n<p>\nMinka:\n</p></li>\n\n<li>Yuan Qi, 2005, <a href=\"https://affect.media.mit.edu/pdfs/05.qi-phd.pdf\">Extending Expectation Propagation for Graphical Models</a></li>\n<li>Thomas P Minka, 2001, <a href=\"https://tminka.github.io/papers/ep/minka-thesis.pdf\">A family of algorithms for approximate Bayesian inference</a></li>\n</ul>\n</div>\n</div>\n\n<div id=\"outline-container-org899f6e6\" class=\"outline-3\">\n<h3 id=\"org899f6e6\"><span class=\"section-number-3\">1.2</span> Cached Region</h3>\n<div class=\"outline-text-3\" id=\"text-1-2\">\n<ul class=\"org-ul\">\n<li>Komodakis etc, 2016, <a href=\"https://www.nowpublishers.com/article/Details/CGV-066\">(Hyper)-Graphs Inference through Convex Relaxations and Move Making Algorithms: Contributions and Applications in Artificial Vision</a></li>\n<li>Bogdan Savchynskyy, 2019, <a href=\"file:///home/dong/Documents/my_eBooks/mLearning/discrete_graphical_models_an_optimization_perspective.pdf\">Discrete Graphical Models &#x2013; An Optimization Perspective</a></li>\n<li>Angelino, 2016, <a href=\"https://www.nowpublishers.com/article/Details/MAL-052\">Patterns of Scalable Bayesian Inference</a></li>\n<li>Nowozin, 2011, <a href=\"http://www.nowozin.net/sebastian/papers/nowozin2011structured-tutorial.pdf\">Structured Learning and Prediction in Computer Vision</a></li>\n</ul>\n</div>\n</div>\n</div>\n\n<div id=\"outline-container-orgb3e4d10\" class=\"outline-2\">\n<h2 id=\"orgb3e4d10\"><span class=\"section-number-2\">2</span> Inference and Learning of PGMs Papers</h2>\n<div class=\"outline-text-2\" id=\"text-2\">\n</div>\n<div id=\"outline-container-org283786e\" class=\"outline-3\">\n<h3 id=\"org283786e\"><span class=\"section-number-3\">2.1</span> Inference methods and techniques</h3>\n<div class=\"outline-text-3\" id=\"text-2-1\">\n</div>\n<div id=\"outline-container-orgf6a7919\" class=\"outline-4\">\n<h4 id=\"orgf6a7919\"><span class=\"section-number-4\">2.1.1</span> Classical Inference Methods</h4>\n<div class=\"outline-text-4\" id=\"text-2-1-1\">\n<p>\nHand-crafted message passing, BP, GBP, Tree-reweighted BP and EP, PowerEP\n</p>\n\n<ul class=\"org-ul\">\n<li>Wainwright and Willsky, 2003, <a href=\"https://papers.nips.cc/paper/2206-exact-map-estimates-by-hypertree-agreement.pdf\">Exact MAP estimates by hypertree agreement</a></li>\n<li>Wainwright et al, 2003, <a href=\"http://ssg.mit.edu/group/willsky/publ_pdfs/166_pub_AISTATS.pdf\">tree-reweighted belief propagation algorithms and approximated ML esimation by pseudo-moment matching</a></li>\n<li>Generalized BP for marginal distributions, Yedidis, et al, 2005, <a href=\"https://www.cs.princeton.edu/courses/archive/spring06/cos598C/papers/YedidaFreemanWeiss2004.pdf\">Constructing free energy approximations and Generalized belief propagation algorithms</a></li>\n<li>Tree-structured EP, Minka and Qi, <a href=\"https://tminka.github.io/papers/eptree/minka-eptree.pdf\">Tree-structured approximations by expectation propagation</a></li>\n<li>Convergence Analysis, Roosta, 2008, <a href=\"https://ieeexplore.ieee.org/document/4599175\">Convergence Analysis of Reweighted Sum-Product Algorithms</a></li>\n</ul>\n</div>\n</div>\n\n\n<div id=\"outline-container-orgdaac951\" class=\"outline-4\">\n<h4 id=\"orgdaac951\"><span class=\"section-number-4\">2.1.2</span> Improvements</h4>\n<div class=\"outline-text-4\" id=\"text-2-1-2\">\n<ul class=\"org-ul\">\n<li>Conditioning and Clamping\n\n<ul class=\"org-ul\">\n<li>Eaton and Ghahramani, 2009, <a href=\"http://mlg.eng.cam.ac.uk/pub/pdf/EatGha09.pdf\">Choosing a Variable to Clamp</a></li>\n<li>Geier et al, 2015, <a href=\"http://auai.org/uai2015/proceedings/papers/158.pdf\">Locally Conditioned Belief Propagation</a></li>\n<li>Weller and Jebara, 2014, <a href=\"https://papers.nips.cc/paper/5529-clamping-variables-and-approximate-inference.pdf\">Clamping Variables and Approximate Inference</a></li>\n</ul></li>\n\n<li>Linear Response. Welling and Teh, <a href=\"https://www.ics.uci.edu/~welling/publications/papers/LR2.pdf\">Linear Response Algorithms for Approximate Inference in Graphical Models</a></li>\n\n<li>Combining with Particle/Stochastic Methods\n\n<ul class=\"org-ul\">\n<li>Liu et al, 2015, <a href=\"https://papers.nips.cc/paper/5695-probabilistic-variational-bounds-for-graphical-models\">Probabilistic Variational Bounds for Graphical Models</a></li>\n<li>Noorshams and Wainwright, 2013, <a href=\"https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6373728\">stochastic belief propagation: a low-complexity alternative to the sum-product algorithm</a></li>\n</ul></li>\n\n<li>Mixture/multi-modal\n<ul class=\"org-ul\">\n<li>Baque et al, 2017, <a href=\"http://openaccess.thecvf.com/content_cvpr_2017/papers/Baque_Multi-Modal_Mean-Fields_via_CVPR_2017_paper.pdf\">Multi-Modal Mean-Fields via Cardinality-Based Clamping</a></li>\n<li>Hao Xiong et al, 2019, <a href=\"http://auai.org/uai2019/proceedings/papers/19.pdf\">One-Shot Marginal MAP Inference in Markov Random Fields</a></li>\n</ul></li>\n</ul>\n</div>\n</div>\n\n\n<div id=\"outline-container-org9334d3e\" class=\"outline-4\">\n<h4 id=\"org9334d3e\"><span class=\"section-number-4\">2.1.3</span> Application</h4>\n<div class=\"outline-text-4\" id=\"text-2-1-3\">\n<ul class=\"org-ul\">\n<li><a href=\"https://papers.nips.cc/paper/9532-combining-generative-and-discriminative-models-for-hybrid-inference.pdf\">Satorras, 2019, Combining Generative and Discriminative Models for Hybrid Inference</a></li>\n<li><a href=\"https://arxiv.org/pdf/1502.03240.pdf\">Zheng, 2019, Conditional Random Fields as Recurrent Neural Networks</a></li>\n<li><a href=\"https://arxiv.org/abs/1210.5644\">Krahenbuhl, 2011, Efficient Inference in Fully Connected CRFs with Gaussian Edge Potentials</a></li>\n</ul>\n</div>\n</div>\n</div>\n\n<div id=\"outline-container-org8b07190\" class=\"outline-3\">\n<h3 id=\"org8b07190\"><span class=\"section-number-3\">2.2</span> Neural network based methods</h3>\n<div class=\"outline-text-3\" id=\"text-2-2\">\n</div>\n<div id=\"outline-container-org5e62646\" class=\"outline-4\">\n<h4 id=\"org5e62646\"><span class=\"section-number-4\">2.2.1</span> Deep learning based methods</h4>\n<div class=\"outline-text-4\" id=\"text-2-2-1\">\n<ul class=\"org-ul\">\n<li>Karaletsos, 2016, <a href=\"https://arxiv.org/abs/1612.05048\">Adversarial Message Passing For Graphical Models</a></li>\n<li><p>\nStoller et al, 2020, <a href=\"https://arxiv.org/pdf/1905.12660.pdf\">Training Generative Adversarial Networks from Incomplete Observations using Factorised Discriminators</a>\n</p>\n\n<p>\nLearning messages\n</p></li>\n\n<li>Heess et al, <a href=\"https://papers.nips.cc/paper/5070-learning-to-pass-expectation-propagation-messages.pdf\">Learning to Pass Expectation Propagation Messages</a>, half-automated message passing, message-level automation</li>\n<li>Yoon et al, 2018, <a href=\"https://arxiv.org/abs/1803.07710\">Inference in Probabilistic Graphical Models by Graph Neural Networks</a></li>\n<li>Lin, 2015, <a href=\"http://papers.nips.cc/paper/5791-deeply-learning-the-messages-in-message-passing-inference.pdf\">Deeply Learning the Messages in Message Passing Inference</a></li>\n</ul>\n\n<p>\nGraphical Neural Networks\n</p>\n\n<ul class=\"org-ul\">\n<li><a href=\"https://arxiv.org/abs/1905.06214\">GMNN: Graph Markov Neural Networks</a>, semi-supervised learning, EM is used for training.</li>\n<li>More generalized computation power: <a href=\"https://github.com/deepmind/graph_nets\">Graph Net Library</a>, A graph network takes a graph as input and returns a graph as output.</li>\n<li>Related, <a href=\"https://github.com/dmlc/dgl\">Deep Graph Library</a>, for deep learning on graphs</li>\n<li>Scarselli et al, 2009, <a href=\"https://persagen.com/files/misc/scarselli2009graph.pdf\">The graph neural network model</a></li>\n</ul>\n</div>\n</div>\n\n\n<div id=\"outline-container-orgf56e690\" class=\"outline-4\">\n<h4 id=\"orgf56e690\"><span class=\"section-number-4\">2.2.2</span> Variational methods</h4>\n<div class=\"outline-text-4\" id=\"text-2-2-2\">\n<ul class=\"org-ul\">\n<li>NIPS tutorial 2016, <a href=\"https://media.nips.cc/Conferences/2016/Slides/6199-Slides.pdf\">Variational Inference</a></li>\n<li>Kingma and Welling, 2014, Autoencoder: <a href=\"https://arxiv.org/abs/1312.6114\">Auto-Encoding Variational Bayes</a></li>\n<li>Kuleshov and Ermon, 2017, NVIL: <a href=\"https://arxiv.org/abs/1711.02679\">Neural Variational Inference and Learning in Undirected Graphical Models</a></li>\n<li>Li, etc, 2020, AdVIL: <a href=\"https://arxiv.org/abs/1901.08400\">To Relieve Your Headache of Training an MRF, Take AdVIL</a></li>\n<li>Lazaro-Gredilla, 2019 (Vicarious AI), <a href=\"https://arxiv.org/abs/1912.02893\">Learning undirected models via query training</a></li>\n<li>Sobolev and Vetrov, 2019, (Section 3 gives interesting discussion on literature works) <a href=\"http://papers.nips.cc/paper/8350-importance-weighted-hierarchical-variational-inference\">Importance Weighted Hierarchical Variational Inference</a></li>\n<li>Kingma, et al, 2016, <a href=\"https://papers.nips.cc/paper/6581-improved-variational-inference-with-inverse-autoregressive-flow\">Improved Variational Inference with Inverse Autoregressive Flow</a></li>\n<li>Rezende, Mohamed, 2015, <a href=\"https://arxiv.org/abs/1505.05770\">Variational Inference with Normalizing Flows</a></li>\n</ul>\n</div>\n</div>\n\n<div id=\"outline-container-org5b07d99\" class=\"outline-4\">\n<h4 id=\"org5b07d99\"><span class=\"section-number-4\">2.2.3</span> Neural density function estimation</h4>\n<div class=\"outline-text-4\" id=\"text-2-2-3\">\n<ul class=\"org-ul\">\n<li>Chen et al, 2018, ODE: <a href=\"https://papers.nips.cc/paper/7892-neural-ordinary-differential-equations\">Neural Ordinary Differential Equations</a></li>\n<li>Kingma, Dhariwal, 2018, <a href=\"https://arxiv.org/abs/1807.03039\">Glow: Generative Flow with Invertible 1x1 Convolutions</a></li>\n<li>Dinh, Sohl-Dickstein, Bengio, 2017, <a href=\"https://arxiv.org/pdf/1605.08803.pdf\">Density Estimation using Real NVP</a></li>\n<li>Dinh, Krueger, Bengio, 2014, <a href=\"https://arxiv.org/abs/1410.8516\">NICE: Non-linear independent component estimation</a></li>\n<li>Inverse autoregreeeive flow as in previous subsection.</li>\n</ul>\n</div>\n</div>\n</div>\n\n<div id=\"outline-container-orga73c9d7\" class=\"outline-3\">\n<h3 id=\"orga73c9d7\"><span class=\"section-number-3\">2.3</span> Learning of Graphical Models</h3>\n<div class=\"outline-text-3\" id=\"text-2-3\">\n</div>\n<div id=\"outline-container-orgb455581\" class=\"outline-4\">\n<h4 id=\"orgb455581\"><span class=\"section-number-4\">2.3.1</span> Parameter Learning</h4>\n<div class=\"outline-text-4\" id=\"text-2-3-1\">\n<p>\nLearning graphical model parameters by approximate inference\n</p>\n\n<ul class=\"org-ul\">\n<li>Domke, 2013, <a href=\"https://ieeexplore.ieee.org/abstract/document/6420841\">Learning Graphical Model Parameters with Approximate Marginal Inference</a></li>\n<li>Tang, 2015, <a href=\"https://arxiv.org/abs/1503.01228\">Bethe Learning of Conditional Random Fields via MAP Decoding</a></li>\n<li>You Lu, 2019, <a href=\"https://www.aaai.org/ojs/index.php/AAAI/article/view/4357\">Block Belief Propagation for Parameter Learning in Markov Random Fields</a></li>\n<li>Hazan, 2016, <a href=\"http://www.jmlr.org/papers/v17/13-260.html\">Blending Learning and Inference in Conditional Random Fields</a></li>\n</ul>\n\n<p>\nLearning of MRF with neural networks\n</p>\n\n<ul class=\"org-ul\">\n<li>Wiseman and Kim, 2019, <a href=\"https://papers.nips.cc/paper/9687-amortized-bethe-free-energy-minimization-for-learning-mrfs.pdf\">Amortized Bethe Free Energy Minimization for Learning MRFs</a></li>\n<li>Kuleshov and Ermon, 2017, <a href=\"https://arxiv.org/abs/1711.02679\">Neural Variational Inference and Learning in Undirected Graphical Models</a></li>\n</ul>\n\n<p>\nLearning of Directed Graphs\n</p>\n\n<ul class=\"org-ul\">\n<li>Chongxuan Li, 2020, <a href=\"https://arxiv.org/abs/1901.08400\">To Relieve Your Headache of Training an MRF, Take AdVIL</a></li>\n<li>Mnih and Gregor, 2014, <a href=\"https://arxiv.org/abs/1402.0030\">Neural Variational Inference and Learning in Belief Networks</a></li>\n<li>NIPS tutorial 2016, <a href=\"https://media.nips.cc/Conferences/2016/Slides/6199-Slides.pdf\">Variational Inference</a></li>\n</ul>\n</div>\n</div>\n</div>\n</div>\n\n<div id=\"outline-container-orgc1a8396\" class=\"outline-2\">\n<h2 id=\"orgc1a8396\"><span class=\"section-number-2\">3</span> PGM and Decision-making in Dynamic Systems</h2>\n<div class=\"outline-text-2\" id=\"text-3\">\n<ul class=\"org-ul\">\n<li>Sutton, Barto, 2018, <a href=\"https://github.com/FirstHandScientist/Reinforcement-Learning-2nd-Edition-by-Sutton-Exercise-Solutions\">Reinforcement learning (2ed edition)</a></li>\n\n<li>Bubeck, Cesa-Bianchi, 2012, <a href=\"https://www.microsoft.com/en-us/research/wp-content/uploads/2017/01/SurveyBCB12.pdf\">Regret Analysis of Stochastic and Nonstochastic Multi-armed Bandit Problems</a></li>\n\n<li>Ziebart, 2010, <a href=\"https://www.cs.cmu.edu/~bziebart/publications/thesis-bziebart.pdf\">Modeling Purposeful Adaptive Behavior with the Principle of Maximum Causal Entropy</a></li>\n\n<li>Levin, 2018, <a href=\"https://arxiv.org/abs/1805.00909\">Reinforcement Learning and Control as Probabilistic Inference: Tutorial and Review</a></li>\n\n<li>Haarnoja, et al 2017, <a href=\"https://arxiv.org/pdf/1702.08165.pdf\">Reinforcement Learning with Deep Energy-Based Policies</a></li>\n\n<li>Martin L. Puterman, 2014, Markov Decision Processes: Discrete Stochastic Dynamic Programming</li>\n\n<li>Szepesvari, 2009, <a href=\"https://sites.ualberta.ca/~szepesva/papers/RLAlgsInMDPs-lecture.pdf\">Algorithms for Reinforcement Learning</a></li>\n</ul>\n</div>\n</div>\n\n\n\n<div id=\"outline-container-org8747276\" class=\"outline-2\">\n<h2 id=\"org8747276\"><span class=\"section-number-2\">4</span> In Connecting with Others</h2>\n<div class=\"outline-text-2\" id=\"text-4\">\n</div>\n<div id=\"outline-container-orgb5f09f5\" class=\"outline-3\">\n<h3 id=\"orgb5f09f5\"><span class=\"section-number-3\">4.1</span> Repos</h3>\n<div class=\"outline-text-3\" id=\"text-4-1\">\n<ul class=\"org-ul\">\n<li>Repos: <a href=\"https://github.com/otokonoko8/implicit-variational-inference\">Advanced-variational-inference-paper</a></li>\n<li>Repos: <a href=\"https://github.com/otokonoko8/deep-Bayesian-nonparametrics-papers\">Deep-Bayesian-nonparametrics-papers</a></li>\n</ul>\n</div>\n</div>\n\n<div id=\"outline-container-orgf87b190\" class=\"outline-3\">\n<h3 id=\"orgf87b190\"><span class=\"section-number-3\">4.2</span> Courses</h3>\n<div class=\"outline-text-3\" id=\"text-4-2\">\n<ul class=\"org-ul\">\n<li><a href=\"https://www.davidsilver.uk/teaching/\">Reinforcement Learning (UCL)</a></li>\n<li><a href=\"http://rail.eecs.berkeley.edu/deeprlcourse/\">Deep Reinforcement Learning (CS285)</a></li>\n<li><a href=\"https://www.youtube.com/playlist?list=PLqYmG7hTraZDNJre23vqCGIVpfZ_K2RZs\">Advanced Deep Learning &amp; Reinforcement Learning</a></li>\n</ul>\n</div>\n</div>\n\n<div id=\"outline-container-orgf3eefee\" class=\"outline-3\">\n<h3 id=\"orgf3eefee\"><span class=\"section-number-3\">4.3</span> Optimal Transport (likelihood-free learning)</h3>\n<div class=\"outline-text-3\" id=\"text-4-3\">\n<ul class=\"org-ul\">\n<li>Matthed Thorpe, 2018, <a href=\"http://www.math.cmu.edu/~mthorpe/OTNotes\">Introduction to Optimal Transport</a></li>\n<li>Peyre, Cuturi, 2018, Computational Optimal Transport, <a href=\"https://optimaltransport.github.io/resources/\">Codes and slides for OT</a></li>\n</ul>\n</div>\n</div>\n</div>\n</div>\n<div id=\"postamble\" class=\"status\">\n<p class=\"author\">Author: Dong</p>\n<!-- <p class=\"date\">Created: 2020-05-22 Fri 15:02</p> -->\n<p class=\"validation\"><a href=\"http://validator.w3.org/check?uri=referer\">Validate</a></p>\n</div>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/elib/elib.component.ts":
/*!****************************************!*\
  !*** ./src/app/elib/elib.component.ts ***!
  \****************************************/
/*! exports provided: ElibComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElibComponent", function() { return ElibComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElibComponent = /** @class */ (function () {
    function ElibComponent() {
    }
    ElibComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-elib',
            template: __webpack_require__(/*! ./elib.component.html */ "./src/app/elib/elib.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ElibComponent);
    return ElibComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-8 col-12 order-last order-sm-first\">\n    <p>\n      I am a Ph.D. candidate in the division of Information Science of Engineering at KTH Royal Institute of Technology. <br>\n      My research interests include probabilistic graphical models, Bayesian inference, machine learning, optimization. I also worked with stochastic models and complex networks. The algorithms/models of my research work are applicable to a wide variety of problems, and demonstrated cases include data representation, image processing, speech recognition, communication networks, social networks. My recent work is mainly on the practical inference & learning algorithm/model development within probabilistic graphical models.\n      <br>\n\n    </p>\n\n\n    <h4> Software/Codes </h4>\n    <p> Software associated with a paper can be found on its corresponding page </p>\n    <ul>\n      <li>\n        <a style=\"padding-right: 1px;\" href=\"\">RENN</a>: a inference neural network. To be released soon.\n      </li>\n      <li>\n        <a style=\"padding-right: 1px;\" href=\"https://github.com/FirstHandScientist/genhmm\">GenHMM</a>: a neural network based hidden Markov model.\n      </li>\n      <li>\n        <a style=\"padding-right: 1px;\" href=\"https://github.com/FirstHandScientist/EM-GM\">GenMM</a>: a mixture of normalizing flow models within expectation maximization.\n      </li>\n      <li>\n        <a style=\"padding-right: 1px;\" href=\"https://github.com/FirstHandScientist/amp\">AlphaBP</a>: a message passing algorithm.\n      </li>\n      <li>\n        <a style=\"padding-right: 1px;\" href=\"https://github.com/FirstHandScientist/eotgms\">EOTGM/EOTGAN</a>: A generative model trained with optimal transport.\n      </li>\n    </ul>\n\n\n    <h4> Research Literature Collection </h4>\n    A collection of literature that I find delightful to read, please check this <a style=\"padding-right: 1px;\" href=\"https://github.com/FirstHandScientist/mind_map\"> repos </a> out.\n    <h4> Teaching </h4>\n    <p> I am the teaching assistant for the graduate course\n      <a href=\"https://www.kth.se/student/kurser/kurs/EQ2341?l=en\"> Pattern Recognition and Machine Learning, EECS, KTH, in 2017-2020 </a>. The graduated course considers fundamental and advanced Bayesian methods for classification tasks in pattern recognition </p>\n\n   <!-- <h3 class=\"mt-2\">Recent News</h3> -->\n    <!-- <ul class=\"list-group\"> -->\n    <!--   <li class=\"list-group-item p-2\" *ngFor=\"let item of news_items.slice(0, news_number)\" [innerHTML]=item></li> -->\n    <!--   <li class=\"list-group-item p-2 btn btn-sm text-left mt-1 color-theme\" *ngIf=\"news_number < news_items.length\" (click)=\"news_number = news_number+5\">More</li> -->\n    <!-- </ul> -->\n\n  </div>\n\n  <div class=\"col-sm-4 col-12 order-first order-sm-last\">\n    <!-- profile image here -->\n    <!-- <img id=\"portrait\" class=\"img-fluid rounded\" src=\"https://via.placeholder.com/200\"> -->\n    <h3>Dong Liu <br>\n      <small><em> Ph.D. Canditate <br>\n          KTH Royal Institute of Technology, Stockholm, Sweden.</em></small></h3>\n\n    <h5>\n      <a href=\"assets/cv/cv_Dong.pdf\">My Curriculum Vitae</a>\n    </h5>\n    <br>\n    <a style=\"padding-right: 1px;\" ngbPopover=\"Malvinas Väg 10, Stockholm\" placement=\"bottom\"> <fa-icon [icon]=\"faUniversity\" size=\"2x\"></fa-icon>Office Address</a>\n    <br>\n    <a style=\"padding-right: 1px;\" ngbPopover=\"doli@kth.se\" placement=\"bottom\"><fa-icon [icon]=\"faEnvelopeSquare\" size=\"2x\"></fa-icon>Email</a>\n    <br>\n    <!-- <a style=\"padding-right: 1px;\" ngbPopover=\"phone\" placement=\"bottom\"><fa-icon [icon]=\"faPhoneSquare\" size=\"2x\"></fa-icon></a> -->\n    <a style=\"padding-right: 1px;\" href=\"https://github.com/FirstHandScientist\"><fa-icon [icon]=\"faGithubSquare\" size=\"2x\"></fa-icon>Github</a>\n    <br>\n    <a style=\"padding-right: 1px;\" href=\"https://www.linkedin.com/in/dong-liu-59ab12a1/\"><fa-icon [icon]=\"faLinkedin\" size=\"2x\"></fa-icon>LinkedIn</a>\n    <!-- <a style=\"padding-right: 1px;\" href=\"https://orcid.org/\"><i class=\"ai ai-orcid-square ai-2x\"></i></a>&ensp; -->\n    <br>\n    <a style=\"padding-right: 1px;\" href=\"https://scholar.google.com/citations?user=eK9LoQMAAAAJ&hl=en\"><i class=\"ai ai-google-scholar-square ai-2x\"></i>Google Scholar</a>\n\n  </div>\n\n</div>\n\n<br />\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../news.service */ "./src/app/news.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainComponent = /** @class */ (function () {
    function MainComponent(newsService) {
        this.newsService = newsService;
        // icons
        this.faUniversity = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUniversity"];
        this.faEnvelopeSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelopeSquare"];
        this.faPhoneSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPhoneSquare"];
        this.faGithubSquare = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGithubSquare"];
        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faLinkedin"];
        this.news_items = [];
        this.news_number = 5;
    }
    MainComponent.prototype.populateNews = function (news_items) {
        this.news_items = news_items;
    };
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsService.getNews()
            .subscribe(function (response) { return _this.populateNews(response); });
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html")
        }),
        __metadata("design:paramtypes", [_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/news.service.ts":
/*!*********************************!*\
  !*** ./src/app/news.service.ts ***!
  \*********************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



function separate(data) {
    return data.replace(/\r\n/g, "\r").replace(/\n/g, "\r").split(/\r/).filter(function (i) { return i.length; });
}
var NewsService = /** @class */ (function () {
    function NewsService(http) {
        this.http = http;
    }
    NewsService.prototype.getNews = function () {
        return this.http.get('assets/news.txt', { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return separate(data); }));
    };
    NewsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "./src/app/publication/publication.component.css":
/*!*******************************************************!*\
  !*** ./src/app/publication/publication.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pubButtons > a.badge {\r\n  color: white;\r\n  background-color: #428bca;\r\n  cursor: pointer;\r\n  margin-right: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljYXRpb24vcHVibGljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY2F0aW9uL3B1YmxpY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHViQnV0dG9ucyA+IGEuYmFkZ2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNhO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/publication/publication.component.html":
/*!********************************************************!*\
  !*** ./src/app/publication/publication.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span [ngSwitch]=\"pub_data.EntryType\">\n\t\n\t<span (click) = \"show_more = !show_more\">\n\t\t\n\t\t<a id={{pub_data.EntryKey}}>\n\n\t\t<span *ngSwitchCase=\"'article'\">\n\t\t\t{{pub_data.Fields.Author_noand}}, <strong>{{pub_data.Fields.Title}}</strong>, \n\t\t\t<em>{{pub_data.Fields.Journal}}</em>, \n\t\t\t<span *ngIf=\"pub_data.Fields.Volume\">vol. {{pub_data.Fields.Volume}}, </span>\n\t\t\t<span *ngIf=\"pub_data.Fields.Number\">no. {{pub_data.Fields.Number}}, </span>\n\t\t\t<span *ngIf=\"pub_data.Fields.Pages\">pp. {{pub_data.Fields.Pages}}, </span>\n\t\t\t{{pub_data.Fields.Year}} \n\t\t</span>\n\n\t\t<span *ngSwitchCase=\"'inproceedings'\">\n\t\t\t{{pub_data.Fields.Author_noand}}, <strong>{{pub_data.Fields.Title}}</strong>, in <em>{{pub_data.Fields.Booktitle}}</em>,\n\t\t\t<span *ngIf=\"pub_data.Fields.Pages\">pp. {{pub_data.Fields.Pages}},</span> {{pub_data.Fields.Year}}\n\t\t</span>\n\n\t\t<span *ngSwitchCase=\"'incollection'\">\n\t\t\t{{pub_data.Fields.Author_noand}}, <strong>{{pub_data.Fields.Title}}</strong>, in <em>{{pub_data.Fields.Booktitle}}</em>,\n\t\t\t<span *ngIf=\"pub_data.Fields.Pages\">pp. {{pub_data.Fields.Pages}},</span> {{pub_data.Fields.Year}}\n\t\t</span>\n\n\t\t<span *ngSwitchCase=\"'phdthesis'\">\n\t\t\t{{pub_data.Fields.Author_noand}}, <strong>{{pub_data.Fields.Title}}</strong>, Ph.D thesis at <em>{{pub_data.Fields.School}}</em>, {{pub_data.Fields.Year}}\t\n\t\t</span>\n\n\t\t<span *ngSwitchCase=\"'mastersthesis'\">\n\t\t\t{{pub_data.Fields.Author_noand}}, <strong>{{pub_data.Fields.Title}}</strong>, <span *ngIf=\"pub_data.Fields.Type\">{{pub_data.Fields.Type}}</span> at <em>{{pub_data.Fields.School}}</em>, {{pub_data.Fields.Year}}\t\n\t\t</span>\n\n\t\t<span class=\"color-theme\">\n\t\t\t<fa-icon [icon]=\"show_more? faArrowDown : faArrowRight\"></fa-icon>\n\t\t</span>\n\n\t\t</a>\n\t\t\n\t</span>\n\n\t<div *ngIf=\"show_more\" id=\"pubhidden\">\n\t\t<span *ngIf=\"pub_data.Fields.Abstract\"><strong>Abstract: </strong>{{pub_data.Fields.Abstract}}</span>\n\t\t<div class=\"pubButtons\">\n\t\t\t<a class=\"badge color-theme badge-primary\" *ngIf=\"pub_data.Fields.Doi\" href=\"https://doi.org/{{pub_data.Fields.Doi}}\">DOI: {{pub_data.Fields.Doi}}</a>\n\t\t\t<a class=\"badge color-theme badge-primary\" *ngIf=\"pub_data.Fields.Eprint\" href=\"http://arxiv.org/abs/{{pub_data.Fields.Eprint}}\">arXiv: {{pub_data.Fields.Eprint}} [{{pub_data.Fields.Eprintclass}}]</a> \n\t\t\t<a class=\"badge color-theme badge-primary\" *ngIf=\"pub_data.Fields.Url\" href=\"{{pub_data.Fields.Url}}\">Link</a> \n\t\t\t<a class=\"badge color-theme badge-primary\" *ngIf=\"pub_data.Fields.Slides\" href=\"{{pub_data.Fields.Slides}}\">Slides</a>\n\t\t\t<a class=\"badge color-theme badge-primary\" (click)=\"open()\">BibTeX</a>\n\t\t</div>\n\t</div>      \n\n</span>\n\n"

/***/ }),

/***/ "./src/app/publication/publication.component.ts":
/*!******************************************************!*\
  !*** ./src/app/publication/publication.component.ts ***!
  \******************************************************/
/*! exports provided: BibtexmodalComponent, PublicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BibtexmodalComponent", function() { return BibtexmodalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationComponent", function() { return PublicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BibtexmodalComponent = /** @class */ (function () {
    function BibtexmodalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BibtexmodalComponent.prototype, "text", void 0);
    BibtexmodalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bibtexmodal',
            template: "\n\t<div class=\"modal-header\">\n\t\t<h4 class=\"modal-title\">BibTeX Entry</h4>\n\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t</button>\n\t</div>\n\t<div class=\"modal-body\">\n\t\t<pre class=\"p-2 bg-light border rounded\"><code>{{text}}</code></pre>\n\t</div>\n\t"
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], BibtexmodalComponent);
    return BibtexmodalComponent;
}());

function setBib(pub_data) {
    var text = '@' + pub_data.EntryType + '{' + pub_data.EntryKey;
    Object.keys(pub_data.Fields).forEach(function (key) {
        if (key != 'Abstract' && key != 'Author_noand'
            && key != 'Url' && key != 'Slides') {
            text += ', \n  ' + key + ' = {' + pub_data.Fields[key] + '}';
        }
    });
    text += '\n}';
    return text;
}
;
var PublicationComponent = /** @class */ (function () {
    function PublicationComponent(modalService) {
        this.modalService = modalService;
        this.faArrowDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowDown"];
        this.faArrowRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowRight"];
    }
    PublicationComponent.prototype.open = function () {
        var modalRef = this.modalService.open(BibtexmodalComponent, { size: 'lg' });
        modalRef.componentInstance.text = setBib(this.pub_data);
    };
    PublicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-publication',
            template: __webpack_require__(/*! ./publication.component.html */ "./src/app/publication/publication.component.html"),
            inputs: ['pub_data', 'show_more'],
            styles: [__webpack_require__(/*! ./publication.component.css */ "./src/app/publication/publication.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], PublicationComponent);
    return PublicationComponent;
}());



/***/ }),

/***/ "./src/app/pubs/pubs.component.css":
/*!*****************************************!*\
  !*** ./src/app/pubs/pubs.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.list-group-item > i {\r\n  font-size: 22px;\r\n}\r\n*/\r\n.pub_active {\r\n\tbackground-color: aliceblue;\r\n\tborder-color: #428bca;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVicy9wdWJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFO0FBQ0Y7Q0FDQyw0QkFBNEI7Q0FDNUIsc0JBQXNCO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcHVicy9wdWJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5saXN0LWdyb3VwLWl0ZW0gPiBpIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuKi9cclxuLnB1Yl9hY3RpdmUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuXHRib3JkZXItY29sb3I6ICM0MjhiY2E7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pubs/pubs.component.html":
/*!******************************************!*\
  !*** ./src/app/pubs/pubs.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=col-sm-8>\n    <h2>List of publications</h2>\n  </div>\n  <div class=\"col-sm-4\">\n    <input [(ngModel)]=\"filter_text\" type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n  </div>\n</div>\n\n\n<span *ngIf=\"(conference | filteredPipe: filter_text).length\">\n\n  <h3 class=\"mt-2\">Peer-Reviewed Conference Proceedings</h3>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item publist_row p-2\" *ngFor=\"let pub_data of (conference | filteredPipe: filter_text)\" [class.pub_active]=\"pub_data.EntryKey == routeFragment\">\n      <fa-icon [icon]=\"faFileAlt\"></fa-icon>\n      <app-publication [pub_data]=\"pub_data\" [show_more]=\"pub_data.EntryKey == routeFragment\"></app-publication>\n    </li>\n  </ul>\n\n</span>\n\n\n<span *ngIf=\"(articles | filteredPipe: filter_text).length\">\n\n  <h3 class=\"mt-2\">Journal Papers</h3>\n  <ul class=\"list-group\">\n    <li *ngFor=\"let pub_data of (articles | filteredPipe: filter_text)\" class=\"list-group-item publist_row p-2\" [class.pub_active]=\"pub_data.EntryKey == routeFragment\">\n      <fa-icon [icon]=\"faScroll\"></fa-icon>\n      <app-publication [pub_data]=\"pub_data\" [show_more]=\"pub_data.EntryKey == routeFragment\"></app-publication>\n    </li>\n  </ul>\n</span>\n\n<span *ngIf=\"(chapters | filteredPipe: filter_text).length\">\n\n  <h3 class=\"mt-2\">Book Chapters</h3>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item publist_row p-2\" *ngFor=\"let pub_data of (chapters | filteredPipe: filter_text)\" [class.pub_active]=\"pub_data.EntryKey == routeFragment\">\n      <fa-icon [icon]=\"faBookOpen\"></fa-icon>\n      <app-publication [pub_data]=\"pub_data\" [show_more]=\"pub_data.EntryKey == routeFragment\"></app-publication>\n    </li>\n  </ul>\n\n</span>\n\n<span *ngIf=\"(theses | filteredPipe: filter_text).length\">\n\n  <h3 class=\"mt-2\">Theses</h3>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item publist_row p-2\" *ngFor=\"let pub_data of (theses | filteredPipe: filter_text)\">\n      <fa-icon [icon]=\"faBook\"></fa-icon>\n      <app-publication [pub_data]=\"pub_data\" [show_more]=\"pub_data.EntryKey == routeFragment\"></app-publication>\n    </li>\n  </ul>\n\n</span>\n\n<br />\n"

/***/ }),

/***/ "./src/app/pubs/pubs.component.ts":
/*!****************************************!*\
  !*** ./src/app/pubs/pubs.component.ts ***!
  \****************************************/
/*! exports provided: FilteredPipe, PubsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilteredPipe", function() { return FilteredPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PubsComponent", function() { return PubsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _citation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../citation.service */ "./src/app/citation.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilteredPipe = /** @class */ (function () {
    function FilteredPipe() {
    }
    FilteredPipe.prototype.transform = function (list, filter_string) {
        return list.filter(function (entry) { return JSON.stringify(entry).toLowerCase()
            .search(filter_string.toLowerCase()) >= 0; });
    };
    FilteredPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'filteredPipe' })
    ], FilteredPipe);
    return FilteredPipe;
}());

var PubsComponent = /** @class */ (function () {
    function PubsComponent(citationService, route) {
        this.citationService = citationService;
        this.route = route;
        // icons
        this.faScroll = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faScroll"];
        this.faFileAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFileAlt"];
        this.faBookOpen = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBookOpen"];
        this.faBook = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBook"];
        this.articles = [];
        this.conference = [];
        this.theses = [];
        this.chapters = [];
    }
    PubsComponent.prototype.separatePubs = function (pub_list) {
        this.articles = pub_list.filter(function (entry) { return entry.EntryType == 'article'; });
        this.conference = pub_list.filter(function (entry) { return entry.EntryType == 'inproceedings'; });
        this.chapters = pub_list.filter(function (entry) { return entry.EntryType == 'incollection'; });
        this.theses = pub_list.filter(function (entry) { return entry.EntryType == 'phdthesis' || entry.EntryType == 'mastersthesis'; });
    };
    PubsComponent.prototype.scrollToPub = function () {
        if (!this.didscroll && this.routeFragment && document.getElementById(this.routeFragment) != null) {
            document.getElementById(this.routeFragment).scrollIntoView({ behavior: "smooth" });
            this.didscroll = true;
        }
    };
    PubsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.fragment.subscribe(function (f) {
            _this.routeFragment = f;
        });
        this.citationService.citeAll().subscribe(function (value) { return _this.separatePubs(value); });
        this.filter_text = '';
    };
    PubsComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToPub();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PubsComponent.prototype, "filter_text", void 0);
    PubsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pubs',
            template: __webpack_require__(/*! ./pubs.component.html */ "./src/app/pubs/pubs.component.html"),
            styles: [__webpack_require__(/*! ./pubs.component.css */ "./src/app/pubs/pubs.component.css")]
        }),
        __metadata("design:paramtypes", [_citation_service__WEBPACK_IMPORTED_MODULE_2__["CitationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PubsComponent);
    return PubsComponent;
}());



/***/ }),

/***/ "./src/app/research/research.component.html":
/*!**************************************************!*\
  !*** ./src/app/research/research.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-tabset justify=\"fill\">\n\t<ngb-tab title=\"Main\">\n\t\t<ng-template ngbTabContent>\n\n\t\t\t<div class=\"card-body\">\n\n\t\t\t\t<p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\t\t\t\t</p>\n\t\t\t</div>\n\n\t\t</ng-template>\n\t</ngb-tab>\n\n\t<ngb-tab title=\"Topic 1\">\n\t\t<ng-template ngbTabContent>\n\n\t\t\t<div class=\"card-body\">\n\n\t\t\t\t<h3 class=\"card-title\">Research topic 1</h3>\n\n\t\t\t\t<p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, [{{cite('conf1', 0)}}]\n\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo \n\t\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non [{{cite('conf1', 0)}}]\n\t\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum [{{cite('art1', 0)}}].</p>\n\n\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t<li class=\"list-group-item p-2\" *ngFor=\"let pub_data of ref_lists[0]; let i=index\">\n\t\t\t\t\t\t[{{i+1}}]<app-publication [pub_data]=\"pub_data\"></app-publication>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</ng-template>\n\t</ngb-tab>\n\n\t<ngb-tab title=\"Topic 2\">\n\t\t<ng-template ngbTabContent>\n\n\t\t\t<div class=\"card-body\">\n\n\t\t\t\t<h3 class=\"card-title\">Research topic 2</h3>\n\n\t\t\t\t<p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, [{{cite('conf2', 0)}}]\n\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo \n\t\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non [{{cite('conf2', 0)}}]\n\t\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum [{{cite('art2', 0)}}].</p>\n\n\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t<li class=\"list-group-item p-2\" *ngFor=\"let pub_data of ref_lists[1]; let i=index\">\n\t\t\t\t\t\t[{{i+1}}]<app-publication [pub_data]=\"pub_data\"></app-publication>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</ng-template>\n\t</ngb-tab>\n\n\n</ngb-tabset>"

/***/ }),

/***/ "./src/app/research/research.component.ts":
/*!************************************************!*\
  !*** ./src/app/research/research.component.ts ***!
  \************************************************/
/*! exports provided: ResearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResearchComponent", function() { return ResearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _citation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../citation.service */ "./src/app/citation.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResearchComponent = /** @class */ (function () {
    function ResearchComponent(citationService, config) {
        this.citationService = citationService;
        this.ref_lists = [];
        this.keylists = [['art1', 'conf1'],
            ['art2', 'conf2']];
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
    }
    ResearchComponent.prototype.cite = function (key, listindex) {
        var found = this.ref_lists[listindex].find(function (item) { return item.EntryKey == key; });
        return this.ref_lists[listindex].indexOf(found) + 1;
    };
    ResearchComponent.prototype.grabReferences = function (citekeys, i) {
        var _this = this;
        this.citationService.citeSubset(citekeys)
            .subscribe(function (res) { return _this.ref_lists[i] = res; });
    };
    ResearchComponent.prototype.ngOnInit = function () {
        // TODO: automate this
        this.ref_lists = [[], []];
        this.grabReferences(this.keylists[0], 0);
        this.grabReferences(this.keylists[1], 1);
    };
    ResearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-research',
            template: __webpack_require__(/*! ./research.component.html */ "./src/app/research/research.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]]
        }),
        __metadata("design:paramtypes", [_citation_service__WEBPACK_IMPORTED_MODULE_1__["CitationService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]])
    ], ResearchComponent);
    return ResearchComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dong/Documents/linux/academic_homepage2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map