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
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: '**', redirectTo: 'index', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
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

module.exports = "<div *ngIf=\"!loading\" class=\"container body p-0 animated fadeIn\">\n  <router-outlet></router-outlet>\n</div>\n<div *ngIf=\"loading\" class=\"loading-container appbody\">\n<div class=\"loading-content\">\n  <div class=\"mb-1 container-t\">\n    <i class=\"{{selected.fa}}\"></i>\n  </div>\n  <i class=\"fa fa-spinner spinner\"></i>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n  height: calc(100vh - 40px);\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border-radius: 30px;\n  background-color: white; }\n\n.loading-container {\n  height: 100vh;\n  position: relative; }\n\n.loading-content {\n  padding: 30px;\n  background-color: white;\n  border-radius: 30px;\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.body, .loading-container {\n  position: fixed;\n  overflow-y: scroll;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxVU0VSXFxEb2N1bWVudHNcXHBvcnRmb2lsbyB3ZWJzaXRlc1xccmVzdHVyYW50XFxhd2Vzb21lL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBTTNCO0VBQ00sYUFBYTtFQUNqQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDUSxhQUFZO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFFckIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUVULGdDQUFnQyxFQUFBOztBQUVsQztFQUNDLGVBQWU7RUFDYixrQkFBa0I7RUFDbEIsTUFBTTtFQUFFLFFBQVE7RUFBRSxTQUFTO0VBQUUsT0FBTyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHl7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0MHB4KTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4ubG9hZGluZy1jb250YWluZXJ7XHJcbiAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5sb2FkaW5nLWNvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZzozMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG5cclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuLmJvZHksIC5sb2FkaW5nLWNvbnRhaW5lcntcclxuIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgdG9wOiAwOyByaWdodDogMDsgYm90dG9tOiAwOyBsZWZ0OiAwOyBcclxuXHJcbiAgXHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzY3cHgpIHtcclxuLmJvZHksIC5sb2FkaW5nLWNvbnRhaW5lcntcclxuXHJcbiAgXHJcbn1cclxuXHJcblxyXG59Il19 */"

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
        this.animationDuration = 0;
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
    AppComponent.prototype.ngAfterViewInit = function () {
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
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"]
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

module.exports = "<div class=\"with-general-padding\">\n<p>\n  menu works!\n</p>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/menu/menu.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".with-general-padding {\n  padding: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L0M6XFxVc2Vyc1xcVVNFUlxcRG9jdW1lbnRzXFxwb3J0Zm9pbG8gd2Vic2l0ZXNcXHJlc3R1cmFudFxcYXdlc29tZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWVudVxcbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBRTtFQUNJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAud2l0aC1nZW5lcmFsLXBhZGRpbmcge1xyXG4gICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gIH0iXX0= */"

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

module.exports = "<nav>\n  <i (click)=\"toggleMenu()\" class=\"fa fa-bars cursor mr-3\"></i>\n  <span class=\"header mr-5\">Awesome</span>\n\n  <span class=\"search-container\">\n    <i class=\"fa fa-search d-inline-block mr-2\"></i>\n    <input class=\"search d-inline-block\">\n  </span>\n  <span (click)=\"toggleOrders()\" class=\"cursor open-orders text-center\">\n    <i class=\"fa fa-user-circle\"></i>\n  </span>\n\n</nav>\n<div *ngIf=\"ordersOpened\" class=\"mobile-orders-container border-left animated fadeInRight\">\n  <span  class=\"open-orders text-center pt-4 \">\n    <i (click)=\"toggleOrders()\" class=\"fa cursor  fa-arrow-right\"></i>\n  </span>\n  <br>\n  <app-order></app-order>\n</div>\n<div *ngIf=\"menuOpened\" class=\"menu-container border-right animated fadeInLeft\">\n  <span  class=\" pt-4 d-block text-left\">\n    <i (click)=\"toggleMenu()\" class=\"fa cursor fa-arrow-left d-inline-block\" style=\"margin-left:40px;\"></i>\n  </span>\n \n  <br>\n<app-menu></app-menu>\n</div>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav .header {\n  font-weight: bold; }\n\nnav .search-container {\n  background-color: #f8f8f7;\n  border-radius: 10px;\n  display: inline-block;\n  padding: 10px;\n  width: 400px; }\n\nnav .search {\n  background-color: #f8f8f7;\n  border: none;\n  outline: none;\n  height: 30px;\n  width: 350px; }\n\n.open-orders {\n  display: none;\n  position: absolute;\n  right: 40px; }\n\n.menu-container {\n  border-radius: 30px 0 0 30px;\n  background-color: white;\n  height: 100%;\n  overflow: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  display: block;\n  height: 100%;\n  width: 70%; }\n\n.mobile-orders-container {\n  display: none;\n  border-radius: 0 30px 30px 0;\n  background-color: white;\n  height: 100%;\n  overflow: auto; }\n\n@media (max-width: 767px) {\n  .section-right {\n    display: none; }\n  .open-orders {\n    display: inline-block; }\n  .search-container {\n    display: none !important; }\n  .mobile-orders-container {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 10;\n    display: block;\n    height: 100%;\n    width: 70%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvQzpcXFVzZXJzXFxVU0VSXFxEb2N1bWVudHNcXHBvcnRmb2lsbyB3ZWJzaXRlc1xccmVzdHVyYW50XFxhd2Vzb21lL3NyY1xcYXBwXFxjb21wb25lbnRzXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGlCQUFpQixFQUFBOztBQUZyQjtFQUtJLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBVGhCO0VBWUkseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFLaEI7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFFYjtFQUNNLDRCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGNBQWM7RUFFVixrQkFBa0I7RUFDeEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsY0FBYTtFQUNiLFlBQVk7RUFDWixVQUFVLEVBQUE7O0FBRWQ7RUFDSSxhQUFZO0VBQ1YsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUVwQjtFQUNFO0lBQ0UsYUFBWSxFQUFBO0VBRWQ7SUFDQSxxQkFBcUIsRUFBQTtFQUV2QjtJQUNJLHdCQUF1QixFQUFBO0VBRTNCO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsV0FBVztJQUNYLGNBQWE7SUFDYixZQUFZO0lBQ1osVUFBVSxFQUFBLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5zZWFyY2gtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICB9XHJcbiAgLnNlYXJjaCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY3O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ub3Blbi1vcmRlcnN7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDQwcHg7XHJcbn1cclxuLm1lbnUtY29udGFpbmVye1xyXG4gICAgICBib3JkZXItcmFkaXVzOjMwcHggMCAwIDMwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcbi5tb2JpbGUtb3JkZXJzLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCAzMHB4IDMwcHggMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuc2VjdGlvbi1yaWdodHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICB9XHJcbiAgLm9wZW4tb3JkZXJze1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uc2VhcmNoLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5tb2JpbGUtb3JkZXJzLWNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG59XHJcbiJdfQ== */"

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
        this.ordersOpened = false;
        this.menuOpened = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.toggleOrders = function () {
        this.ordersOpened = !this.ordersOpened;
    };
    NavbarComponent.prototype.toggleMenu = function () {
        this.menuOpened = !this.menuOpened;
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

module.exports = "<div class=\"with-general-padding\">\n  <p class=\"text-right\">\n    <i class=\"fa fa-user-circle mr-3\"></i>\n    <span class=\"number rounded\">5</span>\n  </p>\n\n\n  <section class=\"orders\">\n    <h2>My\n\n      <span class=\"inline-img\">\n        <img src=\"./assets/imgs/cool.svg\">\n      </span>\n\n      <br> Order</h2>\n\n    <!--info-->\n    <div class=\"info\">\n      <div class=\"row\">\n        <div class=\"col-9 pl-0\">\n          236 mowe street lagos\n        </div>\n        <div class=\"col-3 text-right yellow pr-0\">\n          Edit\n        </div>\n      </div>\n      <div class=\"row mt-3\">\n        <div class=\"col-6 p-0\">\n          <span class=\"rounded waiting\">\n            <i class=\"far fa-clock yellow\"></i>\n          </span>\n          45 min\n        </div>\n        <div class=\"col-6 text-right yellow p-0 pt-1\">\n          Choose Time\n        </div>\n      </div>\n\n    </div>\n    <!--list of orders-->\n    <div class=\"orders-list text-center\">\n      <div *ngFor=\"let order of orders\" class=\"each-item\">\n        <div class=\"row\">\n          <div class=\"col-4\">\n            <div class=\"img-container\">\n              <img [src]=\"order.img\">\n            </div>\n          </div>\n          <div class=\"col-5 p-0\">{{order.qty}} X {{order.product}}</div>\n          <div class=\"col-3 p-0\">₦ {{order.price}}</div>\n\n        </div>\n        <hr>\n      </div>\n\n\n    </div>\n    <!--total-->\n    <div class=\"row\">\n      <div class=\"col-4 pt-2\">\n        Total:\n      </div>\n      <div class=\"col-8 text-center\" style=\"font-weight: bold; font-size: 25px;\">\n        ₦ 295\n      </div>\n    </div>\n    <hr>\n\n\n  </section>\n</div>\n<!--checkout-->\n<div class=\"row\">\n  <div class=\"col-5 p-0 text-center\">\n    Persons<br>\n    <div class=\"qty-container border rounded d-inline-block p-0\">\n      <div class=\"d-inline-block p-1 pr-2 pl-2 border-right mr-2\">\n        <button class=\"btn-transparent\">\n          <i class=\"fa fa-minus\"></i>\n        </button>\n      </div>\n\n      1\n      <div class=\"d-inline-block p-1 pr-2 pl-2 border-left ml-2\">\n        <button class=\"btn-transparent\">\n          <i class=\"fa fa-plus\"></i>\n        </button>\n\n      </div>\n\n    </div>\n  </div>\n  <div class=\"col-7 text-center p-0\" style=\"font-weight: bold; font-size: 25px;\">\n    <div class=\"checkout p-1 pt-2 pb-2\">\n      <button class=\"btn-transparent\">\n        checkout\n        <i class=\"fa fa-arrow-right ml-2\"></i>\n      </button>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/order/order.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/order/order.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".waiting {\n  background-color: #604C96;\n  display: inline-block;\n  padding: 5px 8px;\n  width: 30px;\n  height: 30px;\n  margin-right: 5px;\n  margin: 0; }\n\n.with-general-padding {\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-top: 40px; }\n\n.with-general-padding .number {\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    text-align: center;\n    background-color: #fbd360;\n    font-weight: bold;\n    padding-top: 3px; }\n\n.with-general-padding .orders {\n    margin-top: 40px; }\n\n.with-general-padding .orders .info {\n      color: white;\n      background-color: #503e9d;\n      margin-top: 40px;\n      margin-bottom: 40px;\n      border-radius: 15px;\n      padding: 15px;\n      font-size: 14px; }\n\n.orders-list {\n  height: 250px;\n  overflow: auto;\n  margin-bottom: 40px; }\n\n.orders-list .img-container {\n    width: 100%;\n    height: 100%; }\n\n.orders-list .img-container img {\n      width: 100%;\n      border-radius: 10px; }\n\n.checkout {\n  background-color: #fbd360;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlci9DOlxcVXNlcnNcXFVTRVJcXERvY3VtZW50c1xccG9ydGZvaWxvIHdlYnNpdGVzXFxyZXN0dXJhbnRcXGF3ZXNvbWUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG9yZGVyXFxvcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHlCQUF5QjtFQUN6QixxQkFBb0I7RUFDcEIsZ0JBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixTQUFRLEVBQUE7O0FBRVY7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUhuQjtJQUtJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBbUM7SUFDbkMsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBOztBQVhwQjtJQWNJLGdCQUFnQixFQUFBOztBQWRwQjtNQWdCTSxZQUFZO01BQ1oseUJBQXlCO01BQ3pCLGdCQUFnQjtNQUNoQixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLGFBQWE7TUFDYixlQUFlLEVBQUE7O0FBSXJCO0VBQ0ksYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUIsRUFBQTs7QUFIdkI7SUFLUSxXQUFXO0lBQ1gsWUFBWSxFQUFBOztBQU5wQjtNQVFZLFdBQVc7TUFDWCxtQkFBbUIsRUFBQTs7QUFJL0I7RUFDSSx5QkFBaUM7RUFDakMsNEJBQTRCO0VBQzVCLCtCQUErQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vcmRlci9vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ud2FpdGluZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDRDOTY7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6NXB4IDhweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW46MDtcclxufVxyXG4gIC53aXRoLWdlbmVyYWwtcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAubnVtYmVyIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDIxMSwgOTYpO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIH1cclxuICAgIC5vcmRlcnMge1xyXG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAuaW5mbyB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDNlOWQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLm9yZGVycy1saXN0e1xyXG4gICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgLmltZy1jb250YWluZXJ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG4gIC5jaGVja291dHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwyMTEsOTYpO1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuIl19 */"

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

/***/ "./src/app/components/pages/home/home.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"height: 100%;\" >\n  <div class=\"col-12 col-md-7 col-lg-8 section-left\" >\n<app-navbar></app-navbar>\n\n    <!--banner-->\n    <section class=\"banner p-2\">\n      <div class=\"row\">\n        <div class=\"col-4\">\n          <img class=\"banner-img\" src=\"./assets/imgs/food.svg\">\n        </div>\n        <div class=\"col-8\">\n          <div class=\"banner-text\">\n            <span class=\"bannertext1\">₦ 0 delivery for 60 days <span class=\"inline-img\">\n                <img src=\"./assets/imgs/confetti.svg\">\n              </span>\n            </span>\n            <span class=\"bannertext2 text-muted\">\n              N 0 delivery fee for al orders\n            </span>\n          </div>\n    \n          <p class=\"text-right more\">Learn More <i class=\"ml-2 fa fa-arrow-right\"></i></p>\n        </div>\n      </div>\n    </section>\n    <!--resturants-->\n    <section class=\"resturant p-2\">\n      <span class=\"main-text\">Resturant\n        <span class=\"inline-img\">\n          <img src=\"./assets/imgs/burger.svg\">\n        </span>\n      </span>\n    \n      <!--toggle-->\n      <div class=\"above-toggle\">\n        <span (click)=\"scrollWidth(togglesRow, -250)\" class=\"next-left box-shadow-toggle\">\n          <i class=\"fa fa-chevron-left\"></i>\n        </span>\n        <span (click)=\"scrollWidth(togglesRow, 250)\" class=\"next-right box-shadow-toggle\">\n          <i class=\"fa fa-chevron-right\"></i>\n        </span>\n      </div>\n      <div #togglesRow class=\"toggles-row\">\n    \n        <div *ngFor=\"let food of foodTypes index as i\" class=\"toggle-container\">\n          <input (change)=\"onToggleFoodType($event)\" id=\"{{i}}\" type=\"checkbox\" value=\"{{food.text}}\"\n            [checked]=food.checked>\n          <label for={{i}} class=\"toggle box-shadow-toggle cursor\">\n    \n            <div class=\"circle mb-2\">\n              <i class=\"{{food.fa}}\"></i>\n            </div>\n            <small class=\"toggle-text\">{{food.text}}</small>\n          </label>\n        </div>\n    \n      </div>\n      <!--items based on click-->\n      <div class=\"row\">\n        <div *ngFor=\"let food of allFoods index as i\" class=\"col-6 col-lg-4 each-food mt-2\">\n          <div class=\"img-container\">\n            <img [src]=\"food.img\" [alt]=\"food.name\">\n            <span class=\"ptime\">{{food.pTime}} mins</span>\n          </div>\n          <span class=\"d-block mb-1\">{{food.name}}</span>\n          <span class=\"text-muted\">\n            <span class=\"rating\">\n              <i class=\"far fa-star mr-1\"></i>\n              <span class=\"mr-2\">{{food.rating}}</span>\n            </span>\n            <span>₦ {{food.price}}</span>\n    \n          </span>\n        </div>\n        <div class=\"col-12\">\n          <button (click)=\"loadMoreFoods()\" class=\"btn-transparent btn-block border rounded p-2 mt-2\">\n            <span *ngIf=\" loadMoreLoading\" class=\"animated fadeIn\"><i class=\"fa fa-spinner spinner\"></i></span>\n            <span *ngIf=\"!loadMoreLoading\" class=\"animated fadeIn\">Load more..</span>\n    \n          </button>\n        </div>\n      </div>\n    \n    </section>\n\n\n\n\n  </div>\n  <div class=\"col-12 col-md-5 col-lg-4 section-right\" >\n    <app-order></app-order>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/home/home.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-left {\n  padding: 40px;\n  height: 100%; }\n  .section-left .banner {\n    margin-top: 50px;\n    margin-bottom: 50px;\n    background-color: #fff7ed;\n    width: 100%;\n    border-radius: 15px; }\n  .section-left .banner img {\n      -webkit-animation-name: jiggle;\n              animation-name: jiggle;\n      -webkit-animation-duration: 2s;\n              animation-duration: 2s;\n      -webkit-animation-iteration-count: infinite;\n              animation-iteration-count: infinite;\n      position: relative; }\n  @-webkit-keyframes jiggle {\n  0% {\n    top: 0; }\n  50% {\n    top: 10%; }\n  100% {\n    top: 0; } }\n  @keyframes jiggle {\n  0% {\n    top: 0; }\n  50% {\n    top: 10%; }\n  100% {\n    top: 0; } }\n  .section-left .banner .banner-text {\n      margin-top: 40px;\n      margin-bottom: 40px; }\n  .section-left .banner .bannertext1 {\n      color: #fb7544;\n      display: block;\n      font-size: 20px;\n      font-weight: 600; }\n  .section-left .banner .more {\n      color: #fa6f3c; }\n  .section-left .resturant .main-text {\n    font-weight: bold;\n    font-size: 30px;\n    display: block;\n    margin-bottom: 50px; }\n  .section-right {\n  background-color: #fcfcfa;\n  padding: 0px !important;\n  border: none;\n  margin: none;\n  border-radius: 0 30px 30px 0;\n  height: 100%;\n  overflow: auto; }\n  .above-toggle {\n  position: relative; }\n  .above-toggle .next-right, .above-toggle .next-left {\n    position: absolute;\n    z-index: 5;\n    margin-right: 5px;\n    right: 0;\n    font-size: 20px;\n    margin-top: 40px;\n    cursor: pointer;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    padding: 6px 14px;\n    background-color: #f8f8f7; }\n  .above-toggle .next-left {\n    margin-left: 5px;\n    left: 0; }\n  .above-toggle .next-left:hover, .above-toggle .next-right:hover {\n    background-color: rgba(251, 212, 96, 0.527); }\n  .toggles-row {\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  white-space: nowrap;\n  margin-bottom: 30px; }\n  .toggle-container {\n  display: inline-block;\n  margin-right: 10px;\n  margin-left: 10px;\n  overflow: hidden;\n  padding: 10px; }\n  .toggle-container .toggle-text {\n    display: block;\n    text-align: center; }\n  .toggle {\n  width: 60px;\n  height: 120px;\n  padding-top: 5px;\n  background-color: white;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n  border-bottom-left-radius: 50px;\n  border-bottom-right-radius: 50px; }\n  .toggle .toggle-text {\n    display: block;\n    text-align: center;\n    font-weight: bold; }\n  .toggle .circle {\n    border: 0.1px solid #6c757d8a;\n    width: 50px;\n    height: 50px;\n    margin: 0 auto;\n    border-radius: 50%;\n    background-color: white; }\n  .toggle .circle i {\n      font-size: 20px;\n      margin: 14px 15px; }\n  input[type=\"checkbox\"] {\n  visibility: hidden; }\n  input[type=\"checkbox\"]:checked + .toggle {\n  background-color: #fbd360;\n  border: none;\n  transition: all;\n  transition-delay: 0s;\n  transition-duration: 2s; }\n  input[type=\"checkbox\"]:checked + .toggle .circle {\n    border: none; }\n  .box-shadow-toggle {\n  box-shadow: 0 0.25rem 0.75rem #e9e7e7; }\n  .each-food .img-container {\n  width: 100%;\n  position: relative; }\n  .each-food .img-container img {\n    width: 100%;\n    border-radius: 15px; }\n  .each-food .img-container .ptime {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    display: inline-block;\n    background-color: #F8F8F7;\n    padding: 5px;\n    border-bottom-left-radius: 15px;\n    max-width: 100%;\n    overflow-x: hidden;\n    font-size: 15px;\n    white-space: nowrap; }\n  @media (max-width: 767px) {\n  .section-left {\n    padding: 30px; }\n  .section-right {\n    display: none; }\n  .banner .banner-img {\n    width: 200%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL0M6XFxVc2Vyc1xcVVNFUlxcRG9jdW1lbnRzXFxwb3J0Zm9pbG8gd2Vic2l0ZXNcXHJlc3R1cmFudFxcYXdlc29tZS9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFhO0VBQ2IsWUFBWSxFQUFBO0VBRmQ7SUF1QkksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLG1CQUFtQixFQUFBO0VBM0J2QjtNQU1NLDhCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsOEJBQXNCO2NBQXRCLHNCQUFzQjtNQUN0QiwyQ0FBbUM7Y0FBbkMsbUNBQW1DO01BQzdCLGtCQUFrQixFQUFBO0VBRTFCO0VBQ0U7SUFDSixNQUNJLEVBQUE7RUFDQTtJQUNKLFFBQVEsRUFBQTtFQUVKO0lBQ0osTUFDSSxFQUFBLEVBQUE7RUFURjtFQUNFO0lBQ0osTUFDSSxFQUFBO0VBQ0E7SUFDSixRQUFRLEVBQUE7RUFFSjtJQUNKLE1BQ0ksRUFBQSxFQUFBO0VBcEJOO01BNkJNLGdCQUFnQjtNQUNoQixtQkFBbUIsRUFBQTtFQTlCekI7TUFrQ00sY0FBYztNQUNkLGNBQWM7TUFDZCxlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7RUFyQ3RCO01Bd0NNLGNBQWMsRUFBQTtFQXhDcEI7SUE2Q00saUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CLEVBQUE7RUFJekI7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLFlBQVc7RUFDWCxZQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixjQUFjLEVBQUE7RUFJZDtFQUNFLGtCQUFrQixFQUFBO0VBRHBCO0lBR0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsUUFBUTtJQUNSLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5QkFBeUIsRUFBQTtFQWQzQjtJQWlCTSxnQkFBZ0I7SUFDcEIsT0FBTyxFQUFBO0VBbEJUO0lBcUJFLDJDQUEyQyxFQUFBO0VBSS9DO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBO0VBSXJCO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTtFQUxmO0lBT0ksY0FBYztJQUNkLGtCQUFrQixFQUFBO0VBR3RCO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFFYixnQkFBZ0I7RUFFaEIsdUJBQXVCO0VBRXZCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFFN0IsK0JBQStCO0VBQy9CLGdDQUFnQyxFQUFBO0VBWmxDO0lBY0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUIsRUFBQTtFQWhCckI7SUFvQkksNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQix1QkFBdUIsRUFBQTtFQXpCM0I7TUEyQk0sZUFBZTtNQUNmLGlCQUFpQixFQUFBO0VBS3ZCO0VBQ0Usa0JBQWtCLEVBQUE7RUFJcEI7RUFDRSx5QkFBbUM7RUFDbkMsWUFBWTtFQU9aLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsdUJBQXVCLEVBQUE7RUFYekI7SUFJSSxZQUFZLEVBQUE7RUFTaEI7RUFDRSxxQ0FBZ0QsRUFBQTtFQUVsRDtFQUVJLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTtFQUh0QjtJQUtJLFdBQVc7SUFDWCxtQkFBbUIsRUFBQTtFQU52QjtJQVNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLCtCQUErQjtJQUMvQixlQUFlO0lBQ2Ysa0JBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUIsRUFBQTtFQUt2QjtFQUNFO0lBQ0EsYUFBYSxFQUFBO0VBRWI7SUFDRSxhQUFZLEVBQUE7RUFFZDtJQUVJLFdBQVksRUFBQSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4uc2VjdGlvbi1sZWZ0IHtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLmJhbm5lciB7XHJcbiAgICBpbWd7XHJcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBqaWdnbGU7XHJcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGppZ2dsZXtcclxuICAgICAgMCV7XHJcbiAgdG9wOiAwXHJcbiAgICAgIH1cclxuICAgICAgNTAle1xyXG4gIHRvcDogMTAlO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCV7XHJcbiAgdG9wOiAwXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY3ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAuYmFubmVyLXRleHR7XHJcbiAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcblxyXG4gICAgfVxyXG4gICAgLmJhbm5lcnRleHQxIHtcclxuICAgICAgY29sb3I6ICNmYjc1NDQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgICAubW9yZSB7XHJcbiAgICAgIGNvbG9yOiAjZmE2ZjNjO1xyXG4gICAgfVxyXG4gIH1cclxuICAucmVzdHVyYW50IHtcclxuICAgIC5tYWluLXRleHQge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLnNlY3Rpb24tcmlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmE7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgbWFyZ2luOm5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAzMHB4IDMwcHggMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLVxyXG4gIC5hYm92ZS10b2dnbGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLm5leHQtcmlnaHQsIC5uZXh0LWxlZnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiA2cHggMTRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjc7XHJcbiAgfVxyXG4gIC5uZXh0LWxlZnR7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIC5uZXh0LWxlZnQ6aG92ZXIsIC5uZXh0LXJpZ2h0OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTEsIDIxMiwgOTYsIDAuNTI3KTtcclxuXHJcbiAgfVxyXG4gIH1cclxuLnRvZ2dsZXMtcm93IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG5cclxufVxyXG4udG9nZ2xlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgLnRvZ2dsZS10ZXh0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4udG9nZ2xlIHtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG5cclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcclxuXHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTBweDtcclxuICAudG9nZ2xlLXRleHQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgfVxyXG4gIC5jaXJjbGUge1xyXG4gICAgYm9yZGVyOiAwLjFweCBzb2xpZCAjNmM3NTdkOGE7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBpIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBtYXJnaW46IDE0cHggMTVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi8vIGFuaW1hdGlvblxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyAudG9nZ2xlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCAyMTEsIDk2KTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgLmNpcmNsZSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgaSB7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRyYW5zaXRpb246IGFsbDtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAycztcclxufVxyXG4uYm94LXNoYWRvdy10b2dnbGUge1xyXG4gIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAwLjc1cmVtIHJnYigyMzMsIDIzMSwgMjMxKTtcclxufVxyXG4uZWFjaC1mb29ke1xyXG4gIC5pbWctY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxuICAucHRpbWV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGNztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuc2VjdGlvbi1sZWZ0IHtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIH1cclxuICAuc2VjdGlvbi1yaWdodHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICB9XHJcbiAgLmJhbm5lciB7XHJcbiAgICAuYmFubmVyLWltZ3tcclxuICAgICAgd2lkdGg6IDIwMCUgO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19 */"

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
                text: 'Ice cream'
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
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.scrollWidth = function (element, value) {
        var pos = element.scrollLeft;
        element.scrollTo({
            left: pos + value,
            behavior: 'smooth'
        });
    };
    HomeComponent.prototype.onToggleFoodType = function (event) {
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
    HomeComponent.prototype.loadMoreFoods = function () {
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