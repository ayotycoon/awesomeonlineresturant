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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_pages_resturantpage_resturantpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages/resturantpage/resturantpage.component */ "./src/app/components/pages/resturantpage/resturantpage.component.ts");
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/about/about.component */ "./src/app/components/pages/about/about.component.ts");
/* harmony import */ var _components_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/profile/profile.component */ "./src/app/components/pages/profile/profile.component.ts");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'resturant', component: _components_pages_resturantpage_resturantpage_component__WEBPACK_IMPORTED_MODULE_1__["ResturantpageComponent"] },
    { path: 'profile', component: _components_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: 'about', component: _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: '**', redirectTo: 'index', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
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

module.exports = "<div *ngIf=\"!loading\" class=\"container body-main p-0 animated fadeIn\">\n  \n  <router-outlet></router-outlet>\n\n\n</div>\n<div *ngIf=\"loading\" class=\"loading-container appbody\">\n<div class=\"loading-content\">\n  <div class=\"mb-1 container-t\">\n    <i class=\"{{selected.fa}}\"></i>\n  </div>\n  <i class=\"fa fa-spinner spinner\"></i>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body-main {\n  height: calc(100vh - 40px);\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border-radius: 30px;\n  background-color: white; }\n\n.loading-container {\n  height: 100vh;\n  position: relative; }\n\n.loading-content {\n  padding: 30px;\n  background-color: white;\n  border-radius: 30px;\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n@media (max-width: 767px) {\n  .body-main {\n    height: auto !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxVU0VSXFxEb2N1bWVudHNcXHBvcnRmb2lsbyB3ZWJzaXRlc1xccmVzdHVyYW50XFxhd2Vzb21lL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBMEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNmLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUFNM0I7RUFDTSxhQUFhO0VBQ2pCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNRLGFBQVk7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUVyQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBRVQsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0E7SUFDSSx1QkFBdUIsRUFBQSxFQUUxQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5LW1haW57XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0MHB4KTtcclxubWFyZ2luLXRvcDogMjBweDtcclxubWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLmxvYWRpbmctY29udGFpbmVye1xyXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubG9hZGluZy1jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6MzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA3NjdweCkge1xyXG4uYm9keS1tYWlue1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'awesome';
        this.loading = true;
        this.selected = {
            fa: 'fa fa-user',
            text: 'loading punches'
        };
        this.list = [
            {
                fa: 'fa fa-user',
                text: 'loading punches'
            },
            {
                fa: 'fas fa-utensils',
                checked: true,
                text: 'All'
            },
            {
                fa: 'fas fa-hamburger', text: 'Ham'
            },
            { fa: 'fas fa-ice-cream', text: 'Ice cream' },
            { fa: 'fas fa-pizza-slice', text: 'pizza' },
            { fa: 'fas fa-drumstick-bite', text: 'chicken' },
            { fa: 'fas fa-utensils', text: 'Rice' },
            { fa: 'fas fa-bread-slice', text: 'Bread' },
            { fa: 'fas fa-cheese', text: 'Cheese' },
            { fa: 'fas fa-egg', text: 'Egg' }
        ];
        this.noRef = 0;
        this.animationDuration = 5000;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var interval = this.animationDuration / this.list.length;
        setInterval(function () {
            _this.selected = _this.list[_this.noRef];
            _this.noRef++;
        }, interval);
        setTimeout(function () {
            _this.loading = false;
        }, this.animationDuration);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/order/order.component */ "./src/app/components/order/order.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/profile/profile.component */ "./src/app/components/pages/profile/profile.component.ts");
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/about/about.component */ "./src/app/components/pages/about/about.component.ts");
/* harmony import */ var _components_pages_resturant_resturant_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/resturant/resturant.component */ "./src/app/components/pages/resturant/resturant.component.ts");
/* harmony import */ var _components_pages_resturantpage_resturantpage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pages/resturantpage/resturantpage.component */ "./src/app/components/pages/resturantpage/resturantpage.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_order_order_component__WEBPACK_IMPORTED_MODULE_6__["OrderComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                _components_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _components_pages_resturant_resturant_component__WEBPACK_IMPORTED_MODULE_11__["ResturantComponent"],
                _components_pages_resturantpage_resturantpage_component__WEBPACK_IMPORTED_MODULE_12__["ResturantpageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"with-general-padding\">\n<div class=\"list-group\">\n\n  <a routerLinkActive=\"active-a\" routerLink=\"/index\" class=\"list-group-item list-group-item-action\">\n    <i class=\"mr-2 fa fa-home\"></i>\n    Home</a>\n  <a routerLinkActive=\"active-a\" routerLink=\"/resturant\" class=\"list-group-item list-group-item-action\">\n    <i class=\"mr-2 fa fa-user-circle\"></i>\n    Resturant</a>\n  <a routerLinkActive=\"active-a\" routerLink=\"/profile\" class=\"list-group-item list-group-item-action\">\n    <i class=\"mr-2 fa fa-user-circle\"></i>\n    My Profile</a>\n  <a routerLinkActive=\"active-a\" routerLink=\"/about\" class=\"list-group-item list-group-item-action\">\n    <i class=\"mr-2 fa fa-info\"></i>\n    About</a>\n\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/menu/menu.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".with-general-padding {\n  padding: 30px; }\n\n.active-a {\n  background-color: #503e9d;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L0M6XFxVc2Vyc1xcVVNFUlxcRG9jdW1lbnRzXFxwb3J0Zm9pbG8gd2Vic2l0ZXNcXHJlc3R1cmFudFxcYXdlc29tZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWVudVxcbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBRTtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC53aXRoLWdlbmVyYWwtcGFkZGluZyB7XHJcbiAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgfVxyXG4gIC5hY3RpdmUtYXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDNlOWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/components/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <i (click)=\"toggleMenu()\" class=\"fa fa-bars cursor mr-3\"></i>\n  <a routerLink=\"/\" class=\"header mr-5\">Awesome\n      <span class=\"inline-img\">\n        <img src=\"./assets/imgs/cooking.svg\">\n      </span>\n  </a>\n\n  <span class=\"search-container\">\n    <i class=\"fa fa-search d-inline-block mr-2\"></i>\n    <input class=\"search d-inline-block\">\n  </span>\n  <span (click)=\"toggleOrders()\" class=\"cursor open-orders text-center\">\n    <i class=\"fa fa-user-circle\"></i>\n  </span>\n\n</nav>\n<div *ngIf=\"ordersOpened || menuOpened\" class=\" animated fadeIn global-container \">\n  <div *ngIf=\"ordersOpened\" class=\"mobile-orders-container animated fadeInRight  border-left\">\n  <span class=\"open-orders text-center pt-4 \">\n    <i (click)=\"toggleOrders()\" class=\"fa cursor  fa-arrow-right\"></i>\n  </span>\n  <br>\n  <app-order></app-order>\n  </div>\n\n  <div *ngIf=\"menuOpened\" class=\" menu-container animated fadeInLeft  border-right\">\n  <span class=\" pt-4 d-block text-left\">\n    <i (click)=\"toggleMenu()\" class=\"fa cursor fa-arrow-left d-inline-block\" style=\"margin-left:40px;\"></i>\n  </span>\n    <br>\n    <app-menu></app-menu>\n  </div>\n\n \n\n</div>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav .header {\n  font-weight: bold; }\n\nnav .search-container {\n  background-color: #f8f8f7;\n  border-radius: 10px;\n  display: inline-block;\n  padding: 10px;\n  width: 400px; }\n\nnav .search {\n  background-color: #f8f8f7;\n  border: none;\n  outline: none;\n  height: 30px;\n  width: 350px; }\n\n.open-orders {\n  display: none;\n  position: absolute;\n  right: 40px; }\n\n.global-container {\n  background-color: rgba(255, 255, 255, 0.445);\n  border-radius: 30px 30px 30px 30px;\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100vh - 40px);\n  overflow: auto; }\n\n.menu-container {\n  border-radius: 30px 0 0 30px;\n  background-color: white;\n  height: 100%;\n  overflow: auto;\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  display: block;\n  height: 100%;\n  width: 40%; }\n\n.mobile-orders-container {\n  position: absolute;\n  display: none;\n  border-radius: 0 30px 30px 0;\n  background-color: #fcfcfa;\n  height: 100%;\n  overflow: auto; }\n\n@media (max-width: 767px) {\n  .section-right {\n    display: none; }\n  .open-orders {\n    display: inline-block; }\n  .search-container {\n    display: none !important; }\n  .menu-container {\n    width: 70%; }\n  .mobile-orders-container {\n    top: 0;\n    right: 0;\n    z-index: 10;\n    display: block;\n    height: 100%;\n    width: 70%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvQzpcXFVzZXJzXFxVU0VSXFxEb2N1bWVudHNcXHBvcnRmb2lsbyB3ZWJzaXRlc1xccmVzdHVyYW50XFxhd2Vzb21lL3NyY1xcYXBwXFxjb21wb25lbnRzXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGlCQUFpQixFQUFBOztBQUZyQjtFQUtJLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBVGhCO0VBWUkseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFJaEI7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFFYjtFQUVFLDRDQUE0QztFQUMxQyxrQ0FBa0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCwwQkFBMEI7RUFDeEIsY0FBYyxFQUFBOztBQUVsQjtFQUNFLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGNBQWM7RUFFZixrQkFBa0I7RUFDakIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7RUFDWixVQUFVLEVBQUE7O0FBRVo7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWMsRUFBQTs7QUFFaEI7RUFDRTtJQUNFLGFBQWEsRUFBQTtFQUVmO0lBQ0UscUJBQXFCLEVBQUE7RUFFdkI7SUFDRSx3QkFBd0IsRUFBQTtFQUUxQjtJQUVBLFVBQVUsRUFBQTtFQUVWO0lBRUUsTUFBTTtJQUNOLFFBQVE7SUFDUixXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWixVQUFVLEVBQUEsRUFDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgLmhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLnNlYXJjaC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gIH1cclxuICAuc2VhcmNoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjc7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm9wZW4tb3JkZXJzIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogNDBweDtcclxufVxyXG4uZ2xvYmFsLWNvbnRhaW5lciB7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NDUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDMwcHggMzBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCk7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4ubWVudS1jb250YWluZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHggMCAwIDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG4ubW9iaWxlLW9yZGVycy1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMzBweCAzMHB4IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLnNlY3Rpb24tcmlnaHQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLm9wZW4tb3JkZXJzIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgLnNlYXJjaC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWVudS1jb250YWluZXIge1xyXG5cclxuICB3aWR0aDogNzAlO1xyXG59XHJcbiAgLm1vYmlsZS1vcmRlcnMtY29udGFpbmVyIHtcclxuXHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.toggleOrders = function () {
        this.ordersOpened = !this.ordersOpened;
        this.menuOpened = false;
        if (this.ordersOpened) {
            document.querySelector('body').className = 'o-hidden';
            document.querySelector('html').className = 'o-hidden';
        }
        else {
            document.querySelector('body').className = '';
            document.querySelector('html').className = '';
        }
    };
    NavbarComponent.prototype.toggleMenu = function () {
        this.menuOpened = !this.menuOpened;
        this.ordersOpened = false;
        if (this.menuOpened) {
            document.querySelector('body').className = 'o-hidden';
            document.querySelector('.section-left').className += ' o-hidden';
            document.querySelector('html').className = 'o-hidden';
        }
        else {
            document.querySelector('body').className = '';
            document.querySelector('html').className = '';
            document.querySelector('.section-left').className =
                document.querySelector('.section-left').className.replace(/\so\-hidden/, '');
        }
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        if (this.ordersOpened || this.menuOpened) {
            if (document.querySelector('.section-left')) {
                document.querySelector('.section-left').className =
                    document.querySelector('.section-left').className.replace(/\so\-hidden/, '');
            }
            document.querySelector('body').className = '';
            document.querySelector('html').className = '';
        }
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/order/order.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/order/order.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"with-general-padding\">\n  <p class=\"text-right\">\n    <i class=\"fa fa-user-circle mr-3\"></i>\n    <span class=\"number rounded\">5</span>\n  </p>\n\n\n  <section class=\"orders\">\n    <h2>My\n\n      <span class=\"inline-img\">\n        <img src=\"./assets/imgs/cool.svg\">\n      </span>\n\n      <br> Order</h2>\n\n    <!--info-->\n    <div class=\"info\">\n      <div class=\"row\">\n        <div class=\"col-9 pl-0\">\n          236 mowe street lagos\n        </div>\n        <div class=\"col-3 text-right yellow pr-0\">\n          Edit\n        </div>\n      </div>\n      <div class=\"row mt-3\">\n        <div class=\"col-6 p-0\">\n          <span class=\"rounded waiting\">\n            <i class=\"far fa-clock yellow\"></i>\n          </span>\n          45 min\n        </div>\n        <div class=\"col-6 text-right yellow p-0 pt-1\">\n          Choose Time\n        </div>\n      </div>\n\n    </div>\n    <!--list of orders-->\n    <div class=\"orders-list text-center\">\n      <div *ngFor=\"let order of orders\" class=\"each-item\">\n        <div class=\"row\">\n          <div class=\"col-3\">\n            <div class=\"img-container\">\n              <img [src]=\"order.img\">\n            </div>\n          </div>\n          <div class=\"col-6 p-0\">{{order.qty}} X {{order.product}}</div>\n          <div class=\"col-3 p-0\">₦ {{order.price}}</div>\n\n        </div>\n        <hr>\n      </div>\n\n\n    </div>\n    <!--total-->\n    <div class=\"row\">\n      <div class=\"col-4 pt-2\">\n        Total:\n      </div>\n      <div class=\"col-8 text-center\" style=\"font-weight: bold; font-size: 25px;\">\n        ₦ 295\n      </div>\n    </div>\n    <hr>\n\n\n  </section>\n</div>\n<!--checkout-->\n<div class=\"row\">\n  <div class=\"col-5 p-0 text-center\">\n    Persons<br>\n    <div class=\"qty-container border rounded d-inline-block p-0\">\n      <div class=\"d-inline-block p-1 pr-2 pl-2 border-right mr-2\">\n        <button class=\"btn-transparent\">\n          <i class=\"fa fa-minus\"></i>\n        </button>\n      </div>\n\n      1\n      <div class=\"d-inline-block p-1 pr-2 pl-2 border-left ml-2\">\n        <button class=\"btn-transparent\">\n          <i class=\"fa fa-plus\"></i>\n        </button>\n\n      </div>\n\n    </div>\n  </div>\n  <div class=\"col-7 text-center p-0\" style=\"font-weight: bold; font-size: 25px;\">\n    <div class=\"checkout p-1 pt-2 pb-2\">\n      <button class=\"btn-transparent\">\n        checkout\n        <i class=\"fa fa-arrow-right ml-2\"></i>\n      </button>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/order/order.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/order/order.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".waiting {\n  background-color: #604C96;\n  display: inline-block;\n  padding: 5px 8px;\n  width: 30px;\n  height: 30px;\n  margin-right: 5px;\n  margin: 0; }\n\n.with-general-padding {\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-top: 40px;\n  padding-bottom: 0 !important; }\n\n.with-general-padding .number {\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    text-align: center;\n    background-color: #fbd360;\n    font-weight: bold;\n    padding-top: 3px; }\n\n.with-general-padding .orders {\n    margin-top: 40px; }\n\n.with-general-padding .orders .info {\n      color: white;\n      background-color: #503e9d;\n      margin-top: 40px;\n      margin-bottom: 40px;\n      border-radius: 15px;\n      padding: 15px;\n      font-size: 14px; }\n\n.orders-list {\n  height: 200px;\n  overflow: auto;\n  margin-bottom: 40px; }\n\n.orders-list .img-container {\n    width: 100%;\n    height: 100%; }\n\n.orders-list .img-container img {\n      width: 100%;\n      border-radius: 10px; }\n\n.checkout {\n  background-color: #fbd360;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px; }\n\n@media (max-width: 767px) {\n  .orders-list {\n    height: auto !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlci9DOlxcVXNlcnNcXFVTRVJcXERvY3VtZW50c1xccG9ydGZvaWxvIHdlYnNpdGVzXFxyZXN0dXJhbnRcXGF3ZXNvbWUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG9yZGVyXFxvcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHlCQUF5QjtFQUN6QixxQkFBb0I7RUFDcEIsZ0JBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixTQUFRLEVBQUE7O0FBRVY7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw0QkFBNEIsRUFBQTs7QUFKOUI7SUFNSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQW1DO0lBQ25DLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTs7QUFacEI7SUFlSSxnQkFBZ0IsRUFBQTs7QUFmcEI7TUFpQk0sWUFBWTtNQUNaLHlCQUF5QjtNQUN6QixnQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQixhQUFhO01BQ2IsZUFBZSxFQUFBOztBQUlyQjtFQUNJLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CLEVBQUE7O0FBSHZCO0lBS1EsV0FBVztJQUNYLFlBQVksRUFBQTs7QUFOcEI7TUFRWSxXQUFXO01BQ1gsbUJBQW1CLEVBQUE7O0FBSS9CO0VBQ0kseUJBQWlDO0VBQ2pDLDRCQUE0QjtFQUM1QiwrQkFBK0IsRUFBQTs7QUFHckM7RUFDSztJQUNDLHVCQUF1QixFQUFBLEVBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vcmRlci9vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ud2FpdGluZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDRDOTY7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6NXB4IDhweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW46MDtcclxufVxyXG4gIC53aXRoLWdlbmVyYWwtcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgLm51bWJlciB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCAyMTEsIDk2KTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICB9XHJcbiAgICAub3JkZXJzIHtcclxuICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgLmluZm8ge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTAzZTlkO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5vcmRlcnMtbGlzdHtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgIC5pbWctY29udGFpbmVye1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuICAuY2hlY2tvdXR7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsMjExLDk2KTtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAub3JkZXJzLWxpc3R7XHJcbiAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICB9XHJcblxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/order/order.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/order/order.component.ts ***!
  \*****************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderComponent = /** @class */ (function () {
    function OrderComponent() {
        this.orders = [
            {
                img: 'assets/imgs/sample/1.jpg',
                qty: 1,
                product: 'coldStone',
                price: 700.00
            },
            {
                img: 'assets/imgs/sample/4.jpg',
                qty: 1,
                product: 'coldStone',
                price: 800.00
            },
            {
                img: 'assets/imgs/sample/2jpg.jpg',
                qty: 1,
                product: 'checken',
                price: 400.00
            },
            {
                img: 'assets/imgs/sample/3.jpg',
                qty: 1,
                product: 'coldStone',
                price: 200.00
            },
            {
                img: 'assets/imgs/sample/1.jpg',
                qty: 1,
                product: 'coldStone',
                price: 100.00
            },
            {
                img: 'assets/imgs/sample/1.jpg',
                qty: 1,
                product: 'coldStone',
                price: 700.00
            },
        ];
    }
    OrderComponent.prototype.ngOnInit = function () {
    };
    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/components/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.scss */ "./src/app/components/order/order.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/about/about.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/pages/about/about.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row body\">\n  <div class=\"col-12 col-md-7 col-lg-8 section-left p-0\">\n    <div class=\"with-general-padding\">\n      <app-navbar></app-navbar>\n\n\n    </div>\n \n\n\n\n  </div>\n  <div class=\"col-12 col-md-5 col-lg-4 section-right section-right-a\">\n      <div style=\"margin-top: 50px;\" class=\"text-center\">\n        <small class=\"d-block\">This site was designed by </small>\n        <h3 class=\"welcome mb-2\"> Sunmola <span style=\"color:#503e9d;font-weight: bold;\" class=\"h2\">Ayokunle</span>\n\n        </h3>\n        <small class=\"d-block\">Engineer, Programmer, designer, data Sciencist</small>\n        <a href=\"https://ayotycoon.github.io\" target=\"_blank\" class=\"d-block\"><small>https://ayotycoon.github.io</small></a>\n        <br>\n        <img class=\"profile-img\" src=\"./assets/imgs/me.JPG\">\n        <br>\n        <small class=\"d-block mt-4\">Java, python, javaScript nodejs, angular, react, flutter</small>\n        <hr>      \n        <small class=\"d-block\">Lagos, Nigeria</small>\n      \n      </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/about/about.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/pages/about/about.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-img {\n  width: 200px;\n  border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hYm91dC9DOlxcVXNlcnNcXFVTRVJcXERvY3VtZW50c1xccG9ydGZvaWxvIHdlYnNpdGVzXFxyZXN0dXJhbnRcXGF3ZXNvbWUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhZ2VzXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtaW1ne1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/pages/about/about.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/about/about.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/components/pages/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/home/home.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row body\">\n  <div class=\"col-12 col-md-7 col-lg-8 section-left\">\n    <app-navbar></app-navbar>\n\n    <!--banner-->\n    <section class=\"banner p-2\">\n      <div class=\"row\">\n        <div class=\"col-4\">\n          <img class=\"banner-img\" src=\"./assets/imgs/food.svg\">\n        </div>\n        <div class=\"col-8\">\n          <div class=\"banner-text\">\n            <span class=\"bannertext1\">₦ 0 delivery for 60 days <span class=\"inline-img\">\n                <img src=\"./assets/imgs/confetti.svg\">\n              </span>\n            </span>\n            <span class=\"bannertext2 text-muted\">\n              N 0 delivery fee for al orders\n            </span>\n          </div>\n\n          <p class=\"text-right more\">Learn More <i class=\"ml-2 fa fa-arrow-right\"></i></p>\n        </div>\n      </div>\n    </section>\n    <!--How it works-->\n    <section class=\"how-it-works\">\n\n      <!--each tip-->\n      <div class=\" overflow-h\">\n        <div class=\"each-ill text-center\">\n          <p class=\"text-center\" style=\"font-weight: bold;\">Place your order <br> online</p>\n          <div class=\"svg-container\">\n            <svg class=\"ill\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 1200\">\n              <defs>\n                <style>\n                  .cls-1 {\n                    opacity: 0.69;\n                  }\n\n                  .cls-2 {\n                    fill: #f3f3f3;\n                  }\n\n                  .cls-12,\n                  .cls-13,\n                  .cls-3 {\n                    fill: none;\n                    stroke-linecap: round;\n                    stroke-linejoin: round;\n                  }\n\n                  .cls-3 {\n                    stroke: #fff;\n                  }\n\n                  .cls-13,\n                  .cls-3 {\n                    stroke-width: 12.98px;\n                  }\n\n                  .cls-4 {\n                    fill: #e49d75;\n                  }\n\n                  .cls-5 {\n                    fill: #5fc5d1;\n                  }\n\n                  .cls-6 {\n                    opacity: 0.27;\n                    isolation: isolate;\n                  }\n\n                  .cls-7 {\n                    fill: #6bd5e1;\n                  }\n\n                  .cls-8 {\n                    fill: #ffd98e;\n                  }\n\n                  .cls-9 {\n                    fill: #d18c65;\n                  }\n\n                  .cls-10 {\n                    fill: #ffe4ad;\n                  }\n\n                  .cls-11 {\n                    fill: #ffc88e;\n                  }\n\n                  .cls-12 {\n                    stroke: #9d9d9d;\n                    stroke-width: 5.79px;\n                  }\n\n                  .cls-13 {\n                    stroke: #dfdfdf;\n                  }\n                </style>\n              </defs>\n\n              <g id=\"Layer_3\" data-name=\"Layer 3\">\n                <path\n                  d=\"M523.53,253.69c16.55.88,40.23,14,40.23,36.87s-23.84,31.85-45.26,35.58c14.53,17.32,20.49,20.67,19,28.12s-14.9,27.94-16,51.41-64.82,152.54-76.92,156.27,11.76,27.6-71.7,30.28c-22.25,0-62.62-33-62.62-76-1-93.73,96.42-111.52,150.59-216.09C485.71,252.13,515.85,253.27,523.53,253.69Z\" />\n              </g>\n              <path class=\"cls-2\" d=\"M284.81,695.14h717v308.44h-717Z\" />\n              <path class=\"cls-3\" d=\"M369.18,768.09H939.86\" />\n              <path class=\"cls-4\" d=\"M725.92,777.94l20.23-11.68,14.33,24.84-20.23,11.67Z\" />\n              <path class=\"cls-3\" d=\"M415.67,850H864.81\" />\n              <path class=\"cls-4\" d=\"M575.24,824.87,596.31,835,584,860.81l-21.08-10.07Z\" />\n              <path class=\"cls-5\"\n                d=\"M692.42,605.85c20.5,0,50.65,122.85,63.61,158.87C753.32,772.26,737.94,784,729.5,784c-16.28-27.28-52.75-85.76-59.23-94.8C665.08,682,671.92,605.85,692.42,605.85Z\" />\n              <path class=\"cls-6\" d=\"M684.69,363.43c3.5-2.19,1.85-.72,4.61-4.76\" />\n              <path class=\"cls-7\"\n                d=\"M457.32,583.28c-17.77,0-32.41-3.83-32.41,38s45.66,76.67,99.85,76.67,78.17-1.44,83.11-2.64c1.46,13.83-30.48,108.6-33.91,133,2.45,6.52,18.3,14.64,25,14.64s95.84-144.79,93.52-234.26c.31-14-51.19-17.87-83.73-17.87s-101.8,3.75-110.56,3.75\" />\n              <path class=\"cls-8\"\n                d=\"M431.11,587.39c-2.26-9.31-14.44-209.38,58.63-205.81s72.32,181.86,64,210C520.39,605.7,433.49,597.22,431.11,587.39Z\" />\n              <path class=\"cls-9\"\n                d=\"M514.39,365.71c-1.15,2.73-7.35,17.27-8.5,23.21s-32.56-1.57-30.8-4.54c10.4-17.56,12.1-36,13.79-45.23C490.43,330.71,522,347.63,514.39,365.71Z\" />\n              <path class=\"cls-4\"\n                d=\"M505.37,483.25l-45.08,4.8c-3.07,3.78-1.74,12.72-1.79,17.32-.2,17,.56,36,10.84,50.32,4,5.57,10.55,11,17,10.91,10.1,4,26.95,8.61,26.95,8.61l25.57,5.64S582,588.5,603.3,588c7.09-.18,14.3-1,21.38-.8,4.11.11,10.63,1.39,14.47,0,1.12-.41.85-2.88.58-3.85-.92-3.39-4.16-5.77-7.14-7.25-6.92-3.44-10.84-1.26-17.94-1.14-5.81.1-12.74-2.86-22.82-6.81-11.89-4.66-25.45-10.35-37.57-14.43-13.81-4.65-27.9-9.67-41.38-15.19-2.66-1.09-5.49-1.88-8.28-2.75a145.85,145.85,0,0,0,2.16-22c.31-8,.44-16.4-.73-24.28C505.73,487.47,506.22,485.13,505.37,483.25Z\" />\n              <path class=\"cls-10\"\n                d=\"M448.29,489.29c-7.67-20.38-1-84.08,23.9-88.25,34.64-5.14,45,75.34,41.57,84.75C507.63,489.47,473.29,501.64,448.29,489.29Z\" />\n              <path class=\"cls-4\"\n                d=\"M551.44,297a104.31,104.31,0,0,1-68.85,28.78,8.6,8.6,0,0,0-1.86,5.31,9,9,0,0,0,7.69,8.86c2.23,13.63,9.44,24.31,20.06,27.54,17,5.18,36.41-10.77,43.29-35.63C555.25,319.3,554.86,306.89,551.44,297Z\" />\n              <path class=\"cls-11\" d=\"M577.93,589.33c18,0,83-.52,94.93-.52\" />\n              <path class=\"cls-12\" d=\"M566.81,590.17c19,0,84.58-1.55,95.46-1.55,8.44-13,47.64-81.48,50.23-86.66\" />\n              <path d=\"M566,844.43l-13.72,26.22,69.8,36.52,3.89-7.43-34.56-42Z\" />\n              <path d=\"M736,796.1l15.25,25.36,67.51-40.59-4.32-7.19-53.86,7.64Z\" />\n              <path class=\"cls-13\" d=\"M363.26,814.84l-44.77-44.76,44.77-44.77\" />\n              <path class=\"cls-13\" d=\"M919.25,974.76,964,930l-44.76-44.76\" />\n              <path class=\"cls-3\" d=\"M369.18,929.45H883.67\" />\n            </svg>\n          </div>\n        </div>\n\n        <div class=\"each-ill text-center\">\n          <p class=\"text-center\" style=\"font-weight: bold;\">Give it a <br> little wait</p>\n          <br>\n          <div class=\"svg-container\">\n            <svg version=\"1.1\" class=\"ill reduce-svg\" xmlns=\"http://www.w3.org/2000/svg\"\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 57.157 57.157\"\n              style=\"enable-background:new 0 0 57.157 57.157;\" xml:space=\"preserve\">\n              <circle style=\"fill:#E0E1E2;\" cx=\"28.578\" cy=\"29.157\" r=\"26\" />\n              <circle style=\"fill:#FFFFFF;\" cx=\"28.578\" cy=\"29.157\" r=\"15\" />\n              <path style=\"fill:#424A60;\" d=\"M12.578,57.157c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l3.933-3.933\n\tc0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-3.933,3.933C13.09,57.059,12.834,57.157,12.578,57.157z\" />\n              <path style=\"fill:#424A60;\" d=\"M44.578,57.157c-0.256,0-0.512-0.098-0.707-0.293l-3.963-3.963c-0.391-0.391-0.391-1.023,0-1.414\n\ts1.023-0.391,1.414,0l3.963,3.963c0.391,0.391,0.391,1.023,0,1.414C45.09,57.059,44.834,57.157,44.578,57.157z\" />\n              <path style=\"fill:#C7CAC7;\" d=\"M46.672,11.371c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l3-3\n\tc0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-3,3C47.183,11.274,46.927,11.371,46.672,11.371z\" />\n              <path style=\"fill:#C7CAC7;\" d=\"M10.485,11.371c-0.256,0-0.512-0.098-0.707-0.293l-3-3c-0.391-0.391-0.391-1.023,0-1.414\n\ts1.023-0.391,1.414,0l3,3c0.391,0.391,0.391,1.023,0,1.414C10.997,11.274,10.741,11.371,10.485,11.371z\" />\n              <path style=\"fill:#26B99A;\" d=\"M28.578,57.157c-15.439,0-28-12.561-28-28s12.561-28,28-28s28,12.561,28,28\n\tS44.018,57.157,28.578,57.157z M28.578,5.157c-13.234,0-24,10.767-24,24s10.766,24,24,24s24-10.767,24-24S41.812,5.157,28.578,5.157\n\tz\" />\n              <g>\n                <path style=\"fill:#26B99A;\" d=\"M28.578,6.036c-0.552,0-1,0.447-1,1v1c0,0.553,0.448,1,1,1s1-0.447,1-1v-1\n\t\tC29.578,6.483,29.131,6.036,28.578,6.036z\" />\n                <path style=\"fill:#26B99A;\" d=\"M28.578,49.036c-0.552,0-1,0.447-1,1v1c0,0.553,0.448,1,1,1s1-0.447,1-1v-1\n\t\tC29.578,49.483,29.131,49.036,28.578,49.036z\" />\n                <path style=\"fill:#26B99A;\" d=\"M50.578,28.036h-1c-0.552,0-1,0.447-1,1s0.448,1,1,1h1c0.552,0,1-0.447,1-1\n\t\tS51.131,28.036,50.578,28.036z\" />\n                <path style=\"fill:#26B99A;\" d=\"M7.578,28.036h-1c-0.552,0-1,0.447-1,1s0.448,1,1,1h1c0.552,0,1-0.447,1-1\n\t\tS8.131,28.036,7.578,28.036z\" />\n                <path style=\"fill:#26B99A;\" d=\"M43.427,12.772l-0.707,0.707c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293\n\t\ts0.512-0.098,0.707-0.293l0.707-0.707c0.391-0.391,0.391-1.023,0-1.414S43.818,12.381,43.427,12.772z\" />\n                <path style=\"fill:#26B99A;\" d=\"M13.022,43.178l-0.707,0.707c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293\n\t\ts0.512-0.098,0.707-0.293l0.707-0.707c0.391-0.391,0.391-1.023,0-1.414S13.413,42.788,13.022,43.178z\" />\n                <path style=\"fill:#26B99A;\" d=\"M44.134,43.178c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l0.707,0.707\n\t\tc0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L44.134,43.178z\" />\n                <path style=\"fill:#26B99A;\" d=\"M13.729,12.772c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l0.707,0.707\n\t\tc0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L13.729,12.772z\" />\n              </g>\n              <path style=\"fill:#424A60;\" d=\"M39.578,30.157h-8c-0.552,0-1-0.447-1-1s0.448-1,1-1h8c0.552,0,1,0.447,1,1\n\tS40.131,30.157,39.578,30.157z\" />\n              <path style=\"fill:#424A60;\" d=\"M28.578,27.157c-0.552,0-1-0.447-1-1v-11c0-0.553,0.448-1,1-1s1,0.447,1,1v11\n\tC29.578,26.709,29.131,27.157,28.578,27.157z\" />\n              <path style=\"fill:#424A60;\" d=\"M28.578,33.157c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S30.784,33.157,28.578,33.157z\n\t M28.578,27.157c-1.103,0-2,0.897-2,2s0.897,2,2,2s2-0.897,2-2S29.681,27.157,28.578,27.157z\" />\n              <path style=\"fill:#E7ECED;\" d=\"M54.493,2.086c2.781,2.781,2.781,7.29,0,10.071L44.421,2.086C47.203-0.695,51.711-0.695,54.493,2.086\n\tz\" />\n              <path style=\"fill:#E7ECED;\"\n                d=\"M2.664,2.086c-2.781,2.781-2.781,7.29,0,10.071L12.735,2.086C9.954-0.695,5.445-0.695,2.664,2.086z\" />\n              <g>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n              <g>\n              </g>\n            </svg>\n\n          </div>\n\n\n\n\n        </div>\n        <div class=\"each-ill text-center\">\n        \n          <div class=\"svg-container\">\n            <svg id=\"delivery-svg\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700.13 832.14\">\n              <defs>\n     \n              </defs>\n    \n              <g id=\"Layer_2\" data-name=\"Layer 2\">\n                <g id=\"Layer_1-2\" data-name=\"Layer 1\">\n                  <path class=\"cls-1\"\n                    d=\"M110.4,119.58C41.78,162.74-6.82,240.27.78,313.35c7.77,72.91,71.76,141.52,93.74,228s2.15,191.12,38.86,244.35c36.53,53.41,130,55.72,206.16,32.24,76.38-23.31,135.57-72.41,201.37-116.39C606.71,657.73,679,618.88,696,562.83c17-55.88-21.33-129-63-183.51-41.5-54.73-86.63-90.77-133.25-141.19s-94.9-115.07-163.35-143C267.79,67.18,179,76.27,110.4,119.58Z\" />\n                  <line class=\"cls-2\" x1=\"299.5\" y1=\"600.78\" x2=\"314\" y2=\"342.28\" />\n                  <line class=\"cls-2\" x1=\"299.5\" y1=\"600.78\" x2=\"474.5\" y2=\"368.78\" />\n                  <line class=\"cls-2\" x1=\"299.5\" y1=\"600.78\" x2=\"485.5\" y2=\"195.78\" />\n                  <ellipse class=\"cls-3\" cx=\"525.5\" cy=\"129.28\" rx=\"101\" ry=\"78.71\"\n                    transform=\"translate(224.35 578.91) rotate(-70.01)\" />\n                  <ellipse class=\"cls-4\" cx=\"325.5\" cy=\"264.28\" rx=\"101\" ry=\"78.71\"\n                    transform=\"translate(39.21 570.59) rotate(-86.01)\" />\n                  <ellipse class=\"cls-5\" cx=\"525.5\" cy=\"273.28\" rx=\"112\" ry=\"94.5\"\n                    transform=\"translate(49.8 626.18) rotate(-64.05)\" />\n                  <ellipse class=\"cls-5\" cx=\"378.39\" cy=\"96.02\" rx=\"96.36\" ry=\"79.8\"\n                    transform=\"translate(226.52 455.66) rotate(-81.35)\" />\n                  <ellipse class=\"cls-6\" cx=\"415.24\" cy=\"226.6\" rx=\"93.44\" ry=\"69.34\"\n                    transform=\"translate(77.82 558.15) rotate(-73.12)\" />\n                  <path class=\"cls-4\"\n                    d=\"M318.32,362l9,21.14a3.85,3.85,0,0,1-4,5.32l-22.79-2.81a3.84,3.84,0,0,1-2.6-6.13l13.83-18.33A3.84,3.84,0,0,1,318.32,362Z\" />\n                  <line class=\"cls-2\" x1=\"299.5\" y1=\"600.78\" x2=\"266.5\" y2=\"229.78\" />\n                  <line class=\"cls-2\" x1=\"299.5\" y1=\"600.78\" x2=\"387.5\" y2=\"306.78\" />\n                  <path class=\"cls-6\"\n                    d=\"M390.76,307.05,396,329.42a3.84,3.84,0,0,1-4.86,4.54l-22-6.67a3.84,3.84,0,0,1-1.51-6.48l16.76-15.69A3.84,3.84,0,0,1,390.76,307.05Z\" />\n                  <path class=\"cls-5\"\n                    d=\"M480.41,364.89l-1.6,22.9a3.84,3.84,0,0,1-6,2.92l-19-12.84a3.84,3.84,0,0,1,.47-6.64l20.63-10.06A3.84,3.84,0,0,1,480.41,364.89Z\" />\n                  <ellipse class=\"cls-3\" cx=\"258.5\" cy=\"129.28\" rx=\"94.5\" ry=\"112\"\n                    transform=\"translate(-9.54 21.16) rotate(-4.6)\" />\n                  <path class=\"cls-3\"\n                    d=\"M269.26,232.21l13,18.9a3.85,3.85,0,0,1-2.85,6L256.56,259a3.85,3.85,0,0,1-3.78-5.48l9.85-20.74A3.84,3.84,0,0,1,269.26,232.21Z\" />\n                  <rect class=\"cls-7\" x=\"224.63\" y=\"608.65\" width=\"223.27\" height=\"200\"\n                    transform=\"translate(527.91 1469.26) rotate(-168.76)\" />\n                  <polygon class=\"cls-4\"\n                    points=\"255.06 656.83 474.04 700.35 465.25 632.33 246.26 588.81 255.06 656.83\" />\n                  <rect class=\"cls-4\" x=\"100.16\" y=\"574.43\" width=\"127.83\" height=\"200\"\n                    transform=\"translate(193.53 1367.9) rotate(-168.76)\" />\n                  <polygon class=\"cls-7\" points=\"212.74 648.41 87.6 623.54 121.13 563.93 246.26 588.81 212.74 648.41\" />\n                  <rect class=\"cls-4\" x=\"296.61\" y=\"748.3\" width=\"51.82\" height=\"59\"\n                    transform=\"translate(487.21 1603.55) rotate(-168.76)\" />\n                  <rect class=\"cls-6\" x=\"239.91\" y=\"674.01\" width=\"78.04\" height=\"43.07\"\n                    transform=\"translate(416.91 1432.12) rotate(-168.76)\" />\n                  <rect class=\"cls-3\" x=\"292.88\" y=\"684.01\" width=\"17.64\" height=\"31.29\"\n                    transform=\"translate(461.21 1444.7) rotate(-168.76)\" />\n                  <rect class=\"cls-3\" x=\"248.16\" y=\"677.67\" width=\"44.08\" height=\"5.96\"\n                    transform=\"translate(402.52 1400.92) rotate(-168.76)\" />\n                  <rect class=\"cls-3\" x=\"246.16\" y=\"687.67\" width=\"44.08\" height=\"5.96\"\n                    transform=\"translate(396.61 1420.34) rotate(-168.76)\" />\n                </g>\n              </g>\n            </svg>\n          </div>\n        </div>\n\n      </div>\n    </section>\n    <hr>\n    <!--resturants-->\n    <app-resturant></app-resturant>\n\n\n\n  </div>\n  <div class=\"col-12 col-md-5 col-lg-4 section-right\">\n    <app-order></app-order>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/home/home.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-left {\n  padding: 40px;\n  height: 100%;\n  overflow: auto; }\n  .section-left .banner {\n    margin-top: 50px;\n    margin-bottom: 50px;\n    background-color: #fff7ed;\n    width: 100%;\n    border-radius: 15px; }\n  .section-left .banner img {\n      -webkit-animation-name: jiggle;\n              animation-name: jiggle;\n      -webkit-animation-duration: 2s;\n              animation-duration: 2s;\n      -webkit-animation-iteration-count: infinite;\n              animation-iteration-count: infinite;\n      position: relative; }\n  @-webkit-keyframes jiggle {\n  0% {\n    top: 0; }\n  50% {\n    top: 10%; }\n  100% {\n    top: 0; } }\n  @keyframes jiggle {\n  0% {\n    top: 0; }\n  50% {\n    top: 10%; }\n  100% {\n    top: 0; } }\n  .section-left .banner .banner-text {\n      margin-top: 40px;\n      margin-bottom: 40px; }\n  .section-left .banner .bannertext1 {\n      color: #fb7544;\n      display: block;\n      font-size: 20px;\n      font-weight: 600; }\n  .section-left .banner .more {\n      color: #fa6f3c; }\n  .section-right {\n  background-color: #fcfcfa;\n  border: none;\n  margin: none;\n  border-radius: 0 30px 30px 0;\n  height: 100%;\n  overflow: auto;\n  padding: 0px !important; }\n  .body {\n  height: 100%;\n  position: relative;\n  padding: 0;\n  margin: 0; }\n  .svg-container {\n  width: 100%;\n  min-height: 150px; }\n  .svg-container .ill {\n    width: 100%;\n    height: 100%; }\n  .svg-container .reduce-svg {\n    width: 70%;\n    height: 70%; }\n  .svg-container #delivery-svg .cls-1 {\n    fill: #f2f2f2; }\n  .svg-container #delivery-svg .cls-2 {\n    fill: none;\n    stroke: #fed385;\n    stroke-linecap: round;\n    stroke-miterlimit: 10;\n    stroke-width: 5px; }\n  .svg-container #delivery-svg .cls-3 {\n    fill: #fd8369; }\n  .svg-container #delivery-svg .cls-4 {\n    fill: #d37c59; }\n  .svg-container #delivery-svg .cls-5 {\n    fill: #74d5de; }\n  .svg-container #delivery-svg .cls-6 {\n    fill: #fed385; }\n  .svg-container #delivery-svg .cls-7 {\n    fill: #de8e68; }\n  .overflow-h {\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  white-space: nowrap; }\n  .overflow-h .each-ill {\n    width: 200px;\n    display: inline-block;\n    position: relative; }\n  @media (max-width: 767px) {\n  .body {\n    height: auto !important; }\n  .section-left {\n    padding: 20px;\n    height: auto; }\n  .section-right {\n    display: none; }\n  .banner .banner-img {\n    width: 200%; }\n  .each-ill {\n    width: 200px;\n    display: inline-block;\n    position: relative;\n    -webkit-animation-name: slide;\n            animation-name: slide;\n    -webkit-animation-delay: 2s;\n            animation-delay: 2s;\n    -webkit-animation-duration: 10s;\n            animation-duration: 10s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear; }\n  @-webkit-keyframes slide {\n    0% {\n      left: 0; }\n    90% {\n      left: -270px; }\n    100% {\n      left: 0; } }\n  @keyframes slide {\n    0% {\n      left: 0; }\n    90% {\n      left: -270px; }\n    100% {\n      left: 0; } } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL0M6XFxVc2Vyc1xcVVNFUlxcRG9jdW1lbnRzXFxwb3J0Zm9pbG8gd2Vic2l0ZXNcXHJlc3R1cmFudFxcYXdlc29tZS9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWMsRUFBQTtFQUhoQjtJQXdCSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsbUJBQW1CLEVBQUE7RUE1QnZCO01BT00sOEJBQXNCO2NBQXRCLHNCQUFzQjtNQUN0Qiw4QkFBc0I7Y0FBdEIsc0JBQXNCO01BQ3RCLDJDQUFtQztjQUFuQyxtQ0FBbUM7TUFDbkMsa0JBQWtCLEVBQUE7RUFFcEI7RUFDRTtJQUNFLE1BQU0sRUFBQTtFQUVSO0lBQ0UsUUFBUSxFQUFBO0VBRVY7SUFDRSxNQUFNLEVBQUEsRUFBQTtFQVJWO0VBQ0U7SUFDRSxNQUFNLEVBQUE7RUFFUjtJQUNFLFFBQVEsRUFBQTtFQUVWO0lBQ0UsTUFBTSxFQUFBLEVBQUE7RUFwQmQ7TUE4Qk0sZ0JBQWdCO01BQ2hCLG1CQUFtQixFQUFBO0VBL0J6QjtNQWtDTSxjQUFjO01BQ2QsY0FBYztNQUNkLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTtFQXJDdEI7TUF3Q00sY0FBYyxFQUFBO0VBSXBCO0VBQ0UseUJBQXlCO0VBRXpCLFlBQVk7RUFDWixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixjQUFjO0VBQ2QsdUJBQXVCLEVBQUE7RUFJekI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTLEVBQUE7RUFFWDtFQUNFLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTtFQUZuQjtJQUlJLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUFMaEI7SUFRSSxVQUFVO0lBQ1YsV0FBVyxFQUFBO0VBVGY7SUFlTSxhQUFhLEVBQUE7RUFmbkI7SUFtQk0sVUFBVTtJQUNWLGVBQWU7SUFDZixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGlCQUFpQixFQUFBO0VBdkJ2QjtJQTJCTSxhQUFhLEVBQUE7RUEzQm5CO0lBK0JNLGFBQWEsRUFBQTtFQS9CbkI7SUFtQ00sYUFBYSxFQUFBO0VBbkNuQjtJQXVDTSxhQUFhLEVBQUE7RUF2Q25CO0lBMkNNLGFBQWEsRUFBQTtFQUtuQjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBO0VBSnJCO0lBTUksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBQTtFQUl0QjtFQUNFO0lBQ0UsdUJBQXVCLEVBQUE7RUFFekI7SUFDRSxhQUFhO0lBRWIsWUFBWSxFQUFBO0VBRWQ7SUFDRSxhQUFhLEVBQUE7RUFFZjtJQUVJLFdBQVcsRUFBQTtFQUdmO0lBQ0UsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQiwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBRW5CLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsMkNBQW1DO1lBQW5DLG1DQUFtQztJQUNuQyx5Q0FBaUM7WUFBakMsaUNBQWlDLEVBQUE7RUFFakM7SUFDQTtNQUNFLE9BQU8sRUFBQTtJQUVUO01BQ0UsWUFBWSxFQUFBO0lBRVo7TUFDQSxPQUFPLEVBQUEsRUFBQTtFQVJUO0lBQ0E7TUFDRSxPQUFPLEVBQUE7SUFFVDtNQUNFLFlBQVksRUFBQTtJQUVaO01BQ0EsT0FBTyxFQUFBLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tbGVmdCB7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gIC5iYW5uZXIge1xyXG4gICAgaW1nIHtcclxuICAgICAgYW5pbWF0aW9uLW5hbWU6IGppZ2dsZTtcclxuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgamlnZ2xlIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgfVxyXG4gICAgICA1MCUge1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjdlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIC5iYW5uZXItdGV4dCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuYmFubmVydGV4dDEge1xyXG4gICAgICBjb2xvcjogI2ZiNzU0NDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIC5tb3JlIHtcclxuICAgICAgY29sb3I6ICNmYTZmM2M7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5zZWN0aW9uLXJpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZhO1xyXG5cclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMzBweCAzMHB4IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLVxyXG5cclxuLmJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLnN2Zy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gIC5pbGwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5yZWR1Y2Utc3ZnIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICB9XHJcbiAgI3NpdHRpbmcge1xyXG4gIH1cclxuICAjZGVsaXZlcnktc3ZnIHtcclxuICAgIC5jbHMtMSB7XHJcbiAgICAgIGZpbGw6ICNmMmYyZjI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNscy0yIHtcclxuICAgICAgZmlsbDogbm9uZTtcclxuICAgICAgc3Ryb2tlOiAjZmVkMzg1O1xyXG4gICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbiAgICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcclxuICAgICAgc3Ryb2tlLXdpZHRoOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNscy0zIHtcclxuICAgICAgZmlsbDogI2ZkODM2OTtcclxuICAgIH1cclxuXHJcbiAgICAuY2xzLTQge1xyXG4gICAgICBmaWxsOiAjZDM3YzU5O1xyXG4gICAgfVxyXG5cclxuICAgIC5jbHMtNSB7XHJcbiAgICAgIGZpbGw6ICM3NGQ1ZGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNscy02IHtcclxuICAgICAgZmlsbDogI2ZlZDM4NTtcclxuICAgIH1cclxuXHJcbiAgICAuY2xzLTcge1xyXG4gICAgICBmaWxsOiAjZGU4ZTY4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm92ZXJmbG93LWgge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgLmVhY2gtaWxsIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5ib2R5IHtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuc2VjdGlvbi1sZWZ0IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAuc2VjdGlvbi1yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuYmFubmVyIHtcclxuICAgIC5iYW5uZXItaW1nIHtcclxuICAgICAgd2lkdGg6IDIwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5lYWNoLWlsbCB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGU7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xyXG5cclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgfVxyXG4gICAgQGtleWZyYW1lcyBzbGlkZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICA5MCUge1xyXG4gICAgICBsZWZ0OiAtMjcwcHg7XHJcbiAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/pages/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.autoScrollWidth = function (value) {
        while (1 === 1) {
            var element = document.querySelector('.overflow-h');
            if (element.scrollLeft > 523) {
                element.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            }
            else {
                var pos = element.scrollLeft;
                element.scrollTo({
                    left: pos + value,
                    behavior: 'smooth'
                });
            }
        }
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/profile/profile.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/profile/profile.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row body\">\n  <div class=\"col-12 col-md-7 col-lg-8 section-left p-0\">\n    <div class=\"with-general-padding\">\n<app-navbar></app-navbar>\n<div style=\"margin-top: 50px;\" class=\"text-center bg-white\">\n  <h2 class=\"welcome mb-2\"> Welcome <span style=\"color:#503e9d;font-weight: bold;\" class=\"h1\">Ayokunle</span>\n    <i class=\"ml-2 far fa-smile-wink yellow\"></i>\n  </h2>\n  <br>\n  <img class=\"profile-img\" src=\"./assets/imgs/sample/2jpg.jpg\">\n  <br>\n\n\n    </div>\n\n</div>\n<div class=\"bg-gradient p-2\">\n\n      <!--name-->\n  <div class=\"row border rounded box-shadow each-item\">\n\n    <div class=\"col-12 col-md-4\">\n      Name\n    </div>    \n    <div class=\"col-12 col-md-8\">\n      Sunmola Ayokunle\n    </div>\n  </div>\n        <!--gender-->\n        <div class=\"row border rounded box-shadow each-item\">\n          <div class=\"col-12 col-md-4\">\n            Gender\n          </div>\n          <div class=\"col-12 col-md-8\">\n            Female\n          </div>\n        </div>\n        <!--phone-->\n        <div class=\"row border rounded box-shadow each-item\">\n          <div class=\"col-12 col-md-4\">\n            Phone\n          </div>\n          <div class=\"col-12 col-md-8\">\n            08130521290\n          </div>\n        </div>\n        <!--Email-->\n        <div class=\"row border rounded box-shadow each-item\">\n      <div class=\"col-12 col-md-4\">\n            Email\n          </div>\n        <div class=\"col-12 col-md-8\">\n            SunmolaAyokunle@gmail.com\n          </div>\n        </div>\n\n      <!--address-->\n  <div class=\"row border rounded box-shadow each-item\">\n  <div class=\"col-12 col-md-4\">\n      Address\n    </div>\n  <div class=\"col-12 col-md-8\">\n      22, test street ikoyi, Lagos Nigeria\n    </div>\n  </div>\n      <!--location-->\n  <div class=\"row border rounded box-shadow each-item\">\n  <div class=\"col-12 col-md-4\">\n      Location\n    </div>\n  <div class=\"col-12 col-md-8\">\n      Lagos Nigeria\n    </div>\n  </div>\n\n</div>\n\n\n\n  </div>\n  <div class=\"col-12 col-md-5 col-lg-4 section-right\">\n    <app-order></app-order>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/profile/profile.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/profile/profile.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-img {\n  width: 200px;\n  border-radius: 50%;\n  border: 1px solid black; }\n\n.bg-gradient {\n  background: #fcd561;\n  background: linear-gradient(18deg, #fcd561 53%, white 99%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#fcd561\",endColorstr=\"#ffffff\",GradientType=1); }\n\n.each-item {\n  width: 500px;\n  padding: 10px;\n  margin: 0 auto;\n  background-color: rgba(255, 255, 255, 0.438);\n  font-weight: bold;\n  margin-top: 20px; }\n\n@media (max-width: 767px) {\n  .each-item {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wcm9maWxlL0M6XFxVc2Vyc1xcVVNFUlxcRG9jdW1lbnRzXFxwb3J0Zm9pbG8gd2Vic2l0ZXNcXHJlc3R1cmFudFxcYXdlc29tZS9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXHByb2ZpbGVcXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QixFQUFBOztBQUUzQjtFQUNBLG1CQUEyQjtFQUczQiwwREFBbUY7RUFDbkYsZ0hBQWdILEVBQUE7O0FBQ2hIO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsNENBQTRDO0VBQzVDLGlCQUFpQjtFQUNqQixnQkFBZSxFQUFBOztBQUluQjtFQUNBO0lBQ0ksV0FBVyxFQUFBLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWltZ3tcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5iZy1ncmFkaWVudHtcclxuYmFja2dyb3VuZDogcmdiKDI1MiwyMTMsOTcpO1xyXG5iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxOGRlZywgcmdiYSgyNTIsMjEzLDk3LDEpIDUzJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSA5OSUpO1xyXG5iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxOGRlZywgcmdiYSgyNTIsMjEzLDk3LDEpIDUzJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSA5OSUpO1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMThkZWcsIHJnYmEoMjUyLDIxMyw5NywxKSA1MyUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgOTklKTtcclxuZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj1cIiNmY2Q1NjFcIixlbmRDb2xvcnN0cj1cIiNmZmZmZmZcIixHcmFkaWVudFR5cGU9MSk7fVxyXG4uZWFjaC1pdGVte1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQzOCk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4uZWFjaC1pdGVte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/pages/profile/profile.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/profile/profile.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/pages/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/components/pages/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/resturant/resturant.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/resturant/resturant.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"resturant p-2\">\n  <span class=\"main-text\">Resturant\n    <span class=\"inline-img\">\n      <img src=\"./assets/imgs/burger.svg\">\n    </span>\n  </span>\n\n  <!--toggle-->\n  <div class=\"above-toggle\">\n    <span (click)=\"scrollWidth(togglesRow, -250)\" class=\"next-left box-shadow-toggle\">\n      <i class=\"fa fa-chevron-left\"></i>\n    </span>\n    <span (click)=\"scrollWidth(togglesRow, 250)\" class=\"next-right box-shadow-toggle\">\n      <i class=\"fa fa-chevron-right\"></i>\n    </span>\n  </div>\n  <div #togglesRow class=\"toggles-row\">\n\n    <div *ngFor=\"let food of foodTypes index as i\" class=\"toggle-container\">\n      <input (change)=\"onToggleFoodType($event)\" id=\"{{i}}\" type=\"checkbox\" value=\"{{food.text}}\"\n        [checked]=food.checked>\n      <label for={{i}} class=\"toggle box-shadow-toggle cursor\">\n\n        <div class=\"circle mb-2\">\n          <i class=\"{{food.fa}}\"></i>\n        </div>\n        <small class=\"toggle-text\" [innerHTML]=\"food.text\">food.text</small>\n      </label>\n    </div>\n\n  </div>\n  <!--items based on click-->\n  <div class=\"row\">\n    <div *ngFor=\"let food of allFoods index as i\" class=\"col-6 col-lg-4 each-food mt-4\">\n      <div class=\"img-container\">\n        <img [src]=\"food.img\" [alt]=\"food.name\">\n        <span class=\"ptime\">{{food.pTime}} mins</span>\n      </div>\n      <span class=\"d-block mb-1\">{{food.name}}</span>\n      <span class=\"text-muted\">\n        <span class=\"rating\">\n          <i class=\"far fa-star mr-1\"></i>\n          <span class=\"mr-2\">{{food.rating}}</span>\n        </span>\n        <span>₦ {{food.price}}</span>\n\n      </span>\n    </div>\n    <div class=\"col-12\">\n      <button (click)=\"loadMoreFoods()\" class=\"btn-transparent btn-block border rounded p-2 mt-2\">\n        <span *ngIf=\" loadMoreLoading\" class=\"animated fadeIn\"><i class=\"fa fa-spinner spinner\"></i></span>\n        <span *ngIf=\"!loadMoreLoading\" class=\"animated fadeIn\">Load more..</span>\n\n      </button>\n    </div>\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/components/pages/resturant/resturant.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/resturant/resturant.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".above-toggle {\n  position: relative; }\n  .above-toggle .next-right, .above-toggle .next-left {\n    position: absolute;\n    z-index: 5;\n    margin-right: 5px;\n    right: 0;\n    font-size: 20px;\n    margin-top: 40px;\n    cursor: pointer;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    padding: 6px 14px;\n    background-color: #f8f8f7; }\n  .above-toggle .next-left {\n    margin-left: 5px;\n    left: 0; }\n  .above-toggle .next-left:hover, .above-toggle .next-right:hover {\n    background-color: rgba(251, 212, 96, 0.527); }\n  .toggles-row {\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  white-space: nowrap;\n  margin-bottom: 10px; }\n  .toggle-container {\n  display: inline-block;\n  margin-right: 10px;\n  margin-left: 10px;\n  overflow: hidden;\n  padding: 10px; }\n  .toggle-container .toggle-text {\n    display: block;\n    text-align: center; }\n  .toggle {\n  width: 60px;\n  height: 120px;\n  padding-top: 5px;\n  background-color: white;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n  border-bottom-left-radius: 50px;\n  border-bottom-right-radius: 50px; }\n  .toggle .toggle-text {\n    display: block;\n    text-align: center;\n    font-weight: bold; }\n  .toggle .circle {\n    border: 0.1px solid #6c757d8a;\n    width: 50px;\n    height: 50px;\n    margin: 0 auto;\n    border-radius: 50%;\n    background-color: white; }\n  .toggle .circle i {\n      font-size: 20px;\n      margin: 14px 15px; }\n  input[type=\"checkbox\"] {\n  visibility: hidden; }\n  input[type=\"checkbox\"]:checked + .toggle {\n  background-color: #fbd360;\n  border: none;\n  transition: all;\n  transition-delay: 0s;\n  transition-duration: 2s; }\n  input[type=\"checkbox\"]:checked + .toggle .circle {\n    border: none; }\n  .box-shadow-toggle {\n  box-shadow: 0 0.25rem 0.75rem #e9e7e7; }\n  .each-food .img-container {\n  width: 100%;\n  position: relative; }\n  .each-food .img-container img {\n    width: 100%;\n    border-radius: 15px; }\n  .each-food .img-container .ptime {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    display: inline-block;\n    background-color: #F8F8F7;\n    padding: 5px;\n    border-bottom-left-radius: 15px;\n    max-width: 100%;\n    overflow-x: hidden;\n    font-size: 15px;\n    white-space: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9yZXN0dXJhbnQvQzpcXFVzZXJzXFxVU0VSXFxEb2N1bWVudHNcXHBvcnRmb2lsbyB3ZWJzaXRlc1xccmVzdHVyYW50XFxhd2Vzb21lL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwYWdlc1xccmVzdHVyYW50XFxyZXN0dXJhbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDRSxrQkFBa0IsRUFBQTtFQURwQjtJQUdFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUJBQXlCLEVBQUE7RUFkM0I7SUFpQk0sZ0JBQWdCO0lBQ3BCLE9BQU8sRUFBQTtFQWxCVDtJQXFCRSwyQ0FBMkMsRUFBQTtFQU0vQztFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTtFQUlyQjtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7RUFMZjtJQU9JLGNBQWM7SUFDZCxrQkFBa0IsRUFBQTtFQUd0QjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBRWIsZ0JBQWdCO0VBRWhCLHVCQUF1QjtFQUV2Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBRTdCLCtCQUErQjtFQUMvQixnQ0FBZ0MsRUFBQTtFQVpsQztJQWNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCLEVBQUE7RUFoQnJCO0lBb0JJLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsdUJBQXVCLEVBQUE7RUF6QjNCO01BMkJNLGVBQWU7TUFDZixpQkFBaUIsRUFBQTtFQUt2QjtFQUNFLGtCQUFrQixFQUFBO0VBSXBCO0VBQ0UseUJBQW1DO0VBQ25DLFlBQVk7RUFPWixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHVCQUF1QixFQUFBO0VBWHpCO0lBSUksWUFBWSxFQUFBO0VBU2hCO0VBQ0UscUNBQWdELEVBQUE7RUFFbEQ7RUFFSSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7RUFIdEI7SUFLSSxXQUFXO0lBQ1gsbUJBQW1CLEVBQUE7RUFOdkI7SUFTSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGtCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL3Jlc3R1cmFudC9yZXN0dXJhbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC5hYm92ZS10b2dnbGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLm5leHQtcmlnaHQsIC5uZXh0LWxlZnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiA2cHggMTRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjc7XHJcbiAgfVxyXG4gIC5uZXh0LWxlZnR7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIC5uZXh0LWxlZnQ6aG92ZXIsIC5uZXh0LXJpZ2h0OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTEsIDIxMiwgOTYsIDAuNTI3KTtcclxuXHJcbiAgfVxyXG4gIH1cclxuXHJcblxyXG4udG9nZ2xlcy1yb3cge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcblxyXG59XHJcbi50b2dnbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMTBweDtcclxuICAudG9nZ2xlLXRleHQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbi50b2dnbGUge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcblxyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xyXG5cclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MHB4O1xyXG4gIC50b2dnbGUtdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICB9XHJcbiAgLmNpcmNsZSB7XHJcbiAgICBib3JkZXI6IDAuMXB4IHNvbGlkICM2Yzc1N2Q4YTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIG1hcmdpbjogMTRweCAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLy8gYW5pbWF0aW9uXHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIC50b2dnbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDIxMSwgOTYpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICAuY2lyY2xlIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICBpIHtcclxuICAgIH1cclxuICB9XHJcbiAgdHJhbnNpdGlvbjogYWxsO1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDJzO1xyXG59XHJcbi5ib3gtc2hhZG93LXRvZ2dsZSB7XHJcbiAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDAuNzVyZW0gcmdiKDIzMywgMjMxLCAyMzEpO1xyXG59XHJcbi5lYWNoLWZvb2R7XHJcbiAgLmltZy1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG4gIC5wdGltZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY3O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXg6aGlkZGVuO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/pages/resturant/resturant.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/resturant/resturant.component.ts ***!
  \*******************************************************************/
/*! exports provided: ResturantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResturantComponent", function() { return ResturantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResturantComponent = /** @class */ (function () {
    function ResturantComponent() {
        this.foodTypes = [
            {
                fa: 'fas fa-utensils',
                checked: true,
                text: 'All'
            },
            {
                fa: 'fas fa-hamburger',
                checked: false,
                text: 'Ham'
            },
            {
                fa: 'fas fa-ice-cream',
                checked: false,
                text: 'Ice <br> cream'
            },
            {
                fa: 'fas fa-pizza-slice',
                checked: false,
                text: 'pizza'
            },
            {
                fa: 'fas fa-drumstick-bite',
                checked: false,
                text: 'chicken'
            },
            {
                fa: 'fas fa-utensils',
                checked: false,
                text: 'Rice'
            },
            {
                fa: 'fas fa-bread-slice',
                checked: false,
                text: 'Bread'
            },
            {
                fa: 'fas fa-cheese',
                checked: false,
                text: 'Cheese'
            },
            {
                fa: 'fas fa-egg',
                checked: false,
                text: 'Egg'
            },
        ];
        this.activeFoodType = 'All';
        this.allFoods = [
            {
                type: 'pizza',
                pTime: '25 - 30',
                rating: 5,
                name: 'Rice',
                img: 'assets/imgs/sample/1.jpg',
                price: 400
            },
            {
                type: 'pizza',
                pTime: '25 - 30',
                rating: 5,
                name: 'Rice',
                img: 'assets/imgs/sample/2jpg.jpg',
                price: 400
            },
            {
                type: 'pizza',
                pTime: '25 - 30',
                rating: 5,
                name: 'Rice',
                img: 'assets/imgs/sample/3.jpg',
                price: 400
            },
            {
                type: 'pizza',
                pTime: '25 - 30',
                rating: 5,
                name: 'Rice',
                img: 'assets/imgs/sample/4.jpg',
                price: 400
            },
        ];
        this.loadMoreLoading = false;
    }
    ResturantComponent.prototype.ngOnInit = function () {
    };
    ResturantComponent.prototype.scrollWidth = function (element, value) {
        var pos = element.scrollLeft;
        element.scrollTo({
            left: pos + value,
            behavior: 'smooth'
        });
    };
    ResturantComponent.prototype.onToggleFoodType = function (event) {
        var _this = this;
        var type = event.target.value;
        var checked = event.target.checked;
        this.foodTypes.forEach(function (foodType) {
            if (foodType.text === type) {
                foodType.checked = true;
                _this.activeFoodType = type;
            }
            else {
                foodType.checked = false;
            }
        });
        console.log(this.foodTypes);
    };
    ResturantComponent.prototype.loadMoreFoods = function () {
        var _this = this;
        this.loadMoreLoading = true;
        setTimeout(function () {
            var temp = [
                {
                    type: 'pizza',
                    pTime: '25 - 30',
                    rating: 5,
                    name: 'Rice',
                    img: 'assets/imgs/sample/1.jpg',
                    price: 400
                },
                {
                    type: 'pizza',
                    pTime: '25 - 30',
                    rating: 5,
                    name: 'Rice',
                    img: 'assets/imgs/sample/1.jpg',
                    price: 400
                },
                {
                    type: 'pizza',
                    pTime: '25 - 30',
                    rating: 5,
                    name: 'Rice',
                    img: 'assets/imgs/sample/1.jpg',
                    price: 400
                },
                {
                    type: 'pizza',
                    pTime: '25 - 30',
                    rating: 5,
                    name: 'Rice',
                    img: 'assets/imgs/sample/1.jpg',
                    price: 400
                },
                {
                    type: 'pizza',
                    pTime: '25 - 30',
                    rating: 5,
                    name: 'Rice',
                    img: 'assets/imgs/sample/1.jpg',
                    price: 400
                },
                {
                    type: 'pizza',
                    pTime: '25 - 30',
                    rating: 5,
                    name: 'Rice',
                    img: 'assets/imgs/sample/1.jpg',
                    price: 400
                },
                {
                    type: 'pizza',
                    pTime: '25 - 30',
                    rating: 5,
                    name: 'Rice',
                    img: 'assets/imgs/sample/1.jpg',
                    price: 400
                },
                {
                    type: 'pizza',
                    pTime: '25 - 30',
                    rating: 5,
                    name: 'Rice',
                    img: 'assets/imgs/sample/1.jpg',
                    price: 400
                },
                {
                    type: 'pizza',
                    pTime: '25 - 30',
                    rating: 5,
                    name: 'Rice',
                    img: 'assets/imgs/sample/1.jpg',
                    price: 400
                },
                {
                    type: 'pizza',
                    pTime: '25 - 30',
                    rating: 5,
                    name: 'Rice',
                    img: 'assets/imgs/sample/1.jpg',
                    price: 400
                },
            ];
            _this.allFoods = _this.allFoods.concat(temp);
            _this.loadMoreLoading = false;
        }, 3000);
    };
    ResturantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resturant',
            template: __webpack_require__(/*! ./resturant.component.html */ "./src/app/components/pages/resturant/resturant.component.html"),
            styles: [__webpack_require__(/*! ./resturant.component.scss */ "./src/app/components/pages/resturant/resturant.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResturantComponent);
    return ResturantComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/resturantpage/resturantpage.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/resturantpage/resturantpage.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row body\">\n  <div class=\"col-12 col-md-7 col-lg-8 section-left p-0\">\n    <div class=\"with-general-padding\">\n      <app-navbar></app-navbar>\n      <br style=\"margin-top:50px;\">\n    <app-resturant></app-resturant>\n\n    </div>\n\n\n\n  </div>\n  <div class=\"col-12 col-md-5 col-lg-4 section-right\">\n    <app-order></app-order>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/resturantpage/resturantpage.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/resturantpage/resturantpage.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcmVzdHVyYW50cGFnZS9yZXN0dXJhbnRwYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/pages/resturantpage/resturantpage.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/resturantpage/resturantpage.component.ts ***!
  \***************************************************************************/
/*! exports provided: ResturantpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResturantpageComponent", function() { return ResturantpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResturantpageComponent = /** @class */ (function () {
    function ResturantpageComponent() {
    }
    ResturantpageComponent.prototype.ngOnInit = function () {
    };
    ResturantpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resturantpage',
            template: __webpack_require__(/*! ./resturantpage.component.html */ "./src/app/components/pages/resturantpage/resturantpage.component.html"),
            styles: [__webpack_require__(/*! ./resturantpage.component.scss */ "./src/app/components/pages/resturantpage/resturantpage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResturantpageComponent);
    return ResturantpageComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\USER\Documents\portfoilo websites\resturant\awesome\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map