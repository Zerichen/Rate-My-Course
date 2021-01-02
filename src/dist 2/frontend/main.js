(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/register-login.module": [
		"./src/app/auth/register-login.module.ts"
	],
	"./search/search.module": [
		"./src/app/search/search.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/CRUD.ts":
/*!*************************!*\
  !*** ./src/app/CRUD.ts ***!
  \*************************/
/*! exports provided: CRUD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRUD", function() { return CRUD; });
// @Injectable({
//     providedIn: 'root'
// })
var CRUD = /** @class */ (function () {
    function CRUD(http) {
        this.http = http;
    }
    CRUD.prototype.read = function (url) {
        return this.http.get(url);
    };
    CRUD.prototype.create = function (url, obj) {
        return this.http.post(url, obj);
    };
    return CRUD;
}());



/***/ }),

/***/ "./src/app/PageError.component.ts":
/*!****************************************!*\
  !*** ./src/app/PageError.component.ts ***!
  \****************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-error',
            template: '<h2>Page Not Found</h2>',
            styles: ['']
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



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
/* harmony import */ var _PageError_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageError.component */ "./src/app/PageError.component.ts");
/* harmony import */ var _auth_register_login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/register-login-routing.module */ "./src/app/auth/register-login-routing.module.ts");
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/search.module */ "./src/app/search/search.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: '', loadChildren: './auth/register-login.module#RegisterLoginModule' },
    { path: '', loadChildren: './search/search.module#SearchModule' },
    { path: '**', component: _PageError_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _auth_register_login_routing_module__WEBPACK_IMPORTED_MODULE_3__["RegisterLoginRoutingModule"],
                _search_search_module__WEBPACK_IMPORTED_MODULE_4__["SearchModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Rate My Course';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "\n  <h1>{{ title }}</h1>\n  <router-outlet></router-outlet>\n  ",
            styles: ["\n    $font-stack:    Helvetica, sans-serif;\n    $primary-color: #333;\n    \n    body {\n      font: 100% $font-stack;\n      color: $primary-color;\n    }\n  "]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/search.module */ "./src/app/search/search.module.ts");
/* harmony import */ var _auth_register_login_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/register-login.module */ "./src/app/auth/register-login.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _PageError_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PageError.component */ "./src/app/PageError.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _PageError_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _search_search_module__WEBPACK_IMPORTED_MODULE_4__["SearchModule"],
                _auth_register_login_module__WEBPACK_IMPORTED_MODULE_5__["RegisterLoginModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/login.component.ts":
/*!*****************************************!*\
  !*** ./src/app/auth/login.component.ts ***!
  \*****************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/app/auth/user.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/auth/user.service.ts");
/* harmony import */ var _validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validate.service */ "./src/app/auth/validate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userservice, validateService, router) {
        this.userservice = userservice;
        this.validateService = validateService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.validateService.loginValidate(this.user).subscribe(function (result) {
            if (result['error']) {
                _this.message = result['error'];
            }
            else {
                _this.userservice.updateUser(result['username'], result['password'], result['comments'], result['shoppingCart']);
                _this.userservice.markAsLoggedIn();
                _this.user = _this.userservice.getUserInfo();
                _this.router.navigateByUrl('/search');
            }
        }, function (err) {
            console.log(err);
        });
    };
    LoginComponent.prototype.getUserName = function (username) {
        this.user.username = username;
    };
    LoginComponent.prototype.getUserPassword = function (password) {
        this.user.password = password;
    };
    LoginComponent.prototype.gotoRegistration = function () {
        this.router.navigateByUrl('/register');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: "\n    <button (click)=\"gotoRegistration()\">Haven't registed before? Sign up here</button><br>\n\n    <label>Username: </label>\n    <input (input)=\"getUserName($event.target.value)\" type=\"text\" required><br>\n\n    <label>Password: </label>\n    <input (input)=\"getUserPassword($event.target.value)\" type=\"password\" required><br>\n\n    <button (click)=\"login()\">sign in</button>\n\n    <p>{{ this.message }}</p>\n    "
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register-login-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/auth/register-login-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: RegisterLoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterLoginRoutingModule", function() { return RegisterLoginRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/auth/login.component.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.component */ "./src/app/auth/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var registerLoginRoutes = [
    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
];
var RegisterLoginRoutingModule = /** @class */ (function () {
    function RegisterLoginRoutingModule() {
    }
    RegisterLoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(registerLoginRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], RegisterLoginRoutingModule);
    return RegisterLoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/register-login.module.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/register-login.module.ts ***!
  \***********************************************/
/*! exports provided: RegisterLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterLoginModule", function() { return RegisterLoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/auth/login.component.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.component */ "./src/app/auth/register.component.ts");
/* harmony import */ var _register_login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-login-routing.module */ "./src/app/auth/register-login-routing.module.ts");
/* harmony import */ var _search_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search/profile.component */ "./src/app/search/profile.component.ts");
/* harmony import */ var _search_profile_present_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../search/profile-present.component */ "./src/app/search/profile-present.component.ts");
/* harmony import */ var _search_profile_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../search/profile-detail.component */ "./src/app/search/profile-detail.component.ts");
/* harmony import */ var _search_comment_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../search/comment.module */ "./src/app/search/comment.module.ts");
/* harmony import */ var _search_comment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../search/comment.component */ "./src/app/search/comment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var RegisterLoginModule = /** @class */ (function () {
    function RegisterLoginModule() {
    }
    RegisterLoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _register_login_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegisterLoginRoutingModule"],
                _search_comment_module__WEBPACK_IMPORTED_MODULE_8__["CommentModule"]
            ],
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                _register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
                _search_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
                _search_profile_present_component__WEBPACK_IMPORTED_MODULE_6__["ProfilePresentComponent"],
                _search_profile_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProfileDetailComponent"],
            ],
            exports: [
                _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                _register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
                _search_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
                _search_profile_present_component__WEBPACK_IMPORTED_MODULE_6__["ProfilePresentComponent"],
                _search_profile_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProfileDetailComponent"],
                _search_comment_component__WEBPACK_IMPORTED_MODULE_9__["CommentComponent"]
            ]
        })
    ], RegisterLoginModule);
    return RegisterLoginModule;
}());



/***/ }),

/***/ "./src/app/auth/register.component.ts":
/*!********************************************!*\
  !*** ./src/app/auth/register.component.ts ***!
  \********************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/app/auth/user.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/auth/user.service.ts");
/* harmony import */ var _validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validate.service */ "./src/app/auth/validate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateSerivce, userservice, router) {
        this.validateSerivce = validateSerivce;
        this.userservice = userservice;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.validateSerivce.registrationValidate(this.user).subscribe(function (result) {
            if (result['error']) {
                _this.message = result['error'];
            }
            else {
                _this.userservice.updateUser(result['username'], result['password'], result['comments'], result['shoppingCart']);
                _this.user = _this.userservice.getUserInfo();
                _this.gotoLogin();
            }
        }, function (err) {
            console.log(err);
        });
    };
    RegisterComponent.prototype.getUserName = function (username) {
        this.user.username = username;
    };
    RegisterComponent.prototype.getUserPassword = function (password) {
        this.user.password = password;
    };
    RegisterComponent.prototype.gotoLogin = function () {
        this.router.navigateByUrl('');
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: "\n    <label>Username: </label>\n    <input (input)=\"getUserName($event.target.value)\" type=\"text\" name=\"username\" required>\n\n    <label>Password: </label>\n    <input (input)=\"getUserPassword($event.target.value)\" type=\"password\"\n    name=\"password\" placeholder=\"at least 6 characters or digits\" required>\n\n    <button (click)=\"register()\">sign up</button>\n\n    <p>{{ this.message }}</p>\n\n    <button (click)=\"gotoLogin()\">Go Back</button>\n    "
        }),
        __metadata("design:paramtypes", [_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/auth/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/app/auth/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService() {
        this.user = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.logged = false;
    }
    UserService.prototype.updateUser = function (username, password, comments, shoppingCart) {
        this.user.username = username;
        this.user.password = password;
        this.user.comments = comments;
        this.user.shoppingCart = shoppingCart;
    };
    UserService.prototype.getUserInfo = function () {
        return this.user;
    };
    UserService.prototype.markAsLoggedIn = function () {
        this.logged = true;
    };
    UserService.prototype.getUserStatus = function () {
        return this.logged;
    };
    UserService.prototype.updateUserComments = function (comment) {
        this.user.comments.push(comment);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/auth/user.ts":
/*!******************************!*\
  !*** ./src/app/auth/user.ts ***!
  \******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(username, password, comments, shoppingcart) {
        if (username === void 0) { username = ''; }
        if (password === void 0) { password = ''; }
        if (comments === void 0) { comments = []; }
        if (shoppingcart === void 0) { shoppingcart = []; }
        this.username = username;
        this.password = password;
        this.comments = comments;
        this.shoppingCart = shoppingcart;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/auth/validate.service.ts":
/*!******************************************!*\
  !*** ./src/app/auth/validate.service.ts ***!
  \******************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _CRUD__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CRUD */ "./src/app/CRUD.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ValidateService = /** @class */ (function (_super) {
    __extends(ValidateService, _super);
    function ValidateService(http) {
        var _this = _super.call(this, http) || this;
        _this.loginUrl = '/login';
        _this.registerUrl = '/register';
        return _this;
    }
    ValidateService.prototype.loginValidate = function (user) {
        return this.create(this.loginUrl, user);
    };
    ValidateService.prototype.registrationValidate = function (user) {
        return this.create(this.registerUrl, user);
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ValidateService);
    return ValidateService;
}(_CRUD__WEBPACK_IMPORTED_MODULE_2__["CRUD"]));



/***/ }),

/***/ "./src/app/search/comment.component.ts":
/*!*********************************************!*\
  !*** ./src/app/search/comment.component.ts ***!
  \*********************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
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

var CommentComponent = /** @class */ (function () {
    function CommentComponent() {
    }
    Object.defineProperty(CommentComponent.prototype, "comment", {
        get: function () {
            return this._comment;
        },
        set: function (comment) {
            this._comment = comment;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CommentComponent.prototype, "comment", null);
    CommentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comment',
            template: "\n    <div>\n        <p id=\"comment\">{{ comment.comment }}</p>\n        <span>{{ comment.commenter }} | {{ comment.date }}</span>\n    </div>\n    ",
            styles: ['']
        }),
        __metadata("design:paramtypes", [])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/search/comment.module.ts":
/*!******************************************!*\
  !*** ./src/app/search/comment.module.ts ***!
  \******************************************/
/*! exports provided: CommentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentModule", function() { return CommentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _search_comment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/comment.component */ "./src/app/search/comment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommentModule = /** @class */ (function () {
    function CommentModule() {
    }
    CommentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _search_comment_component__WEBPACK_IMPORTED_MODULE_2__["CommentComponent"]
            ],
            exports: [
                _search_comment_component__WEBPACK_IMPORTED_MODULE_2__["CommentComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]
        })
    ], CommentModule);
    return CommentModule;
}());



/***/ }),

/***/ "./src/app/search/course-detail.component.ts":
/*!***************************************************!*\
  !*** ./src/app/search/course-detail.component.ts ***!
  \***************************************************/
/*! exports provided: CourseDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDetailComponent", function() { return CourseDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/user.service */ "./src/app/auth/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseDetailComponent = /** @class */ (function () {
    function CourseDetailComponent(userservice) {
        this.userservice = userservice;
        this.monthMapping = {
            'Jan': '01',
            'Feb': '02',
            'Mar': '03',
            'Apr': '04',
            'May': '05',
            'Jun': '06',
            'Jul': '07',
            'Aug': '08',
            'Sep': '09',
            'Oct': '10',
            'Nov': '11',
            'Dec': '12',
        };
        this.message = '';
        this.comment = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.courseID = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(CourseDetailComponent.prototype, "course", {
        get: function () {
            return this._course;
        },
        set: function (course) {
            this._course = course;
            console.log(this._course);
            if (this._course.review.length === 0) {
                this.message = 'No comment yet';
            }
            else {
                this.message = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    CourseDetailComponent.prototype.getComment = function (comment) {
        this.commentData = comment;
    };
    CourseDetailComponent.prototype.sendCommentObject = function () {
        var date = new Date();
        var commentObj = {
            'id': '',
            'courseId': this.course.id,
            'commenter': this.userservice.getUserInfo().username,
            'date': date.toString(),
            'comment': this.commentData
        };
        var reformattedComment = this.commentTimeFormatter([commentObj])[0];
        this.comment.emit(reformattedComment);
    };
    CourseDetailComponent.prototype.sendCourseID = function () {
        this.courseID.emit(this._course.id);
    };
    CourseDetailComponent.prototype.commentTimeFormatter = function (arr) {
        var _this = this;
        return arr.map(function (obj) {
            var date = obj.date;
            if (date.length > 10) {
                var dateArray = date.split(' ');
                var month = dateArray[1];
                var day = dateArray[2];
                var year = dateArray[3];
                obj.date = year + "-" + _this.monthMapping[month] + "-" + day;
            }
            return obj;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CourseDetailComponent.prototype, "comment", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CourseDetailComponent.prototype, "courseID", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CourseDetailComponent.prototype, "course", null);
    CourseDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-detail',
            template: "\n    <div>\n        <p>ID: {{ course.id }}</p>\n        <p>Name: {{ course.name }}</p>\n        <p>Description: {{ course.description }}</p>\n        <p>Credit: {{ course.credit }}</p>\n        <p>Time: {{ course.time }}</p>\n        <p>Location: {{ course.location }}</p>\n        <p>Professor: {{ course.professor }}</p>\n        <p>Prerequisite: {{ course.prerequisite }}</p>\n        <p>{{ message }}</p>\n        Comments:\n        <ul>\n            <li *ngFor=\"let review of course.review\">\n                <app-comment [comment]=\"review\"></app-comment>\n                \n            </li>\n        </ul>\n        <input (input)=\"getComment($event.target.value)\" type=\"text\" placeholder=\"share your own thought\">\n        <button (click)=\"sendCommentObject()\">post</button>\n    </div>\n    ",
            styles: ['']
        }),
        __metadata("design:paramtypes", [_auth_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], CourseDetailComponent);
    return CourseDetailComponent;
}());



/***/ }),

/***/ "./src/app/search/course.service.ts":
/*!******************************************!*\
  !*** ./src/app/search/course.service.ts ***!
  \******************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
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

var CourseService = /** @class */ (function () {
    function CourseService() {
    }
    CourseService.prototype.updateSearchedCourse = function (result) {
        this.courseList = result;
    };
    CourseService.prototype.getSearchedCourse = function () {
        return this.courseList;
    };
    CourseService.prototype.updateCourseComment = function (comment) {
        for (var _i = 0, _a = this.courseList; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c.id === comment.courseId) {
                c.review.push(comment);
            }
        }
    };
    CourseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CourseService);
    return CourseService;
}());



/***/ }),

/***/ "./src/app/search/courses-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/search/courses-list.component.ts ***!
  \**************************************************/
/*! exports provided: CourseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListComponent", function() { return CourseListComponent; });
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

var CourseListComponent = /** @class */ (function () {
    function CourseListComponent() {
        this.message = '';
        this.postComment = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(CourseListComponent.prototype, "courseList", {
        get: function () {
            return this._courseList;
        },
        set: function (courseList) {
            this._courseList = courseList;
            if (this._courseList !== undefined) {
                if (this._courseList.length === 0) {
                    this.message = 'No result found';
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    CourseListComponent.prototype.updateCommnet = function (comment) {
        console.log(comment);
        this.commentToAdd = comment;
    };
    CourseListComponent.prototype.getComment = function () {
        return this.commentToAdd;
    };
    CourseListComponent.prototype.sendComment = function () {
        this.postComment.emit(this.getComment());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CourseListComponent.prototype, "postComment", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], CourseListComponent.prototype, "courseList", null);
    CourseListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-list',
            template: "\n    <p>{{ message }}</p>\n    <ul *ngIf=\"courseList\">\n        <li *ngFor=\"let courseData of courseList\">\n            <app-course-detail (comment)=\"updateCommnet($event); sendComment();\" [course]=\"courseData\">\n            </app-course-detail>\n        </li>\n    </ul>\n    ",
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], CourseListComponent);
    return CourseListComponent;
}());



/***/ }),

/***/ "./src/app/search/profile-detail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/search/profile-detail.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailComponent", function() { return ProfileDetailComponent; });
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

var ProfileDetailComponent = /** @class */ (function () {
    function ProfileDetailComponent() {
    }
    Object.defineProperty(ProfileDetailComponent.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (user) {
            this._user = user;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ProfileDetailComponent.prototype, "user", null);
    ProfileDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-detail',
            template: "\n    <h2>{{ user.username }}</h2>\n    <ul>\n        <li *ngFor=\"let commentData of user.comments\">\n            <app-comment [comment]=\"commentData\"></app-comment>\n        </li>\n    </ul>\n    ",
            styles: ['']
        }),
        __metadata("design:paramtypes", [])
    ], ProfileDetailComponent);
    return ProfileDetailComponent;
}());



/***/ }),

/***/ "./src/app/search/profile-present.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/search/profile-present.component.ts ***!
  \*****************************************************/
/*! exports provided: ProfilePresentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePresentComponent", function() { return ProfilePresentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/user.service */ "./src/app/auth/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilePresentComponent = /** @class */ (function () {
    function ProfilePresentComponent(userservice) {
        this.userservice = userservice;
        this.detailRender = false;
        this.counter = 0;
    }
    ProfilePresentComponent.prototype.getUser = function () {
        this.profileUser = this.userservice.getUserInfo();
    };
    ProfilePresentComponent.prototype.showDetail = function () {
        if (this.counter % 2 === 0) {
            this.detailRender = true;
        }
        else {
            this.detailRender = false;
        }
        this.counter += 1;
    };
    ProfilePresentComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    ProfilePresentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-present',
            template: "\n    <div id=\"profile\">\n        <app-profile (click)=\"showDetail()\" [username]=\"profileUser.username\"></app-profile>\n        <app-profile-detail *ngIf=\"detailRender\" [user]=\"profileUser\"></app-profile-detail>\n    </div>\n    ",
            styles: ['']
        }),
        __metadata("design:paramtypes", [_auth_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], ProfilePresentComponent);
    return ProfilePresentComponent;
}());



/***/ }),

/***/ "./src/app/search/profile.component.ts":
/*!*********************************************!*\
  !*** ./src/app/search/profile.component.ts ***!
  \*********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
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

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProfileComponent.prototype, "username", void 0);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: "\n    <div clickable>Hi, {{ username }}</div>\n    ",
            styles: ['']
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/search/search-comment.service.ts":
/*!**************************************************!*\
  !*** ./src/app/search/search-comment.service.ts ***!
  \**************************************************/
/*! exports provided: SearchCommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCommentService", function() { return SearchCommentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _CRUD__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CRUD */ "./src/app/CRUD.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchCommentService = /** @class */ (function (_super) {
    __extends(SearchCommentService, _super);
    function SearchCommentService(http) {
        var _this = _super.call(this, http) || this;
        _this.fetchUrl = '/comment';
        return _this;
    }
    SearchCommentService.prototype.addComment = function (comment) {
        return this.create(this.fetchUrl, comment);
    };
    SearchCommentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchCommentService);
    return SearchCommentService;
}(_CRUD__WEBPACK_IMPORTED_MODULE_1__["CRUD"]));



/***/ }),

/***/ "./src/app/search/search-course.service.ts":
/*!*************************************************!*\
  !*** ./src/app/search/search-course.service.ts ***!
  \*************************************************/
/*! exports provided: SearchCourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCourseService", function() { return SearchCourseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _CRUD__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CRUD */ "./src/app/CRUD.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchCourseService = /** @class */ (function (_super) {
    __extends(SearchCourseService, _super);
    function SearchCourseService(http) {
        var _this = _super.call(this, http) || this;
        _this.fetchUrl = '/course';
        return _this;
    }
    SearchCourseService.prototype.searchCourse = function (id) {
        return this.read(this.fetchUrl + "/" + id);
    };
    SearchCourseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchCourseService);
    return SearchCourseService;
}(_CRUD__WEBPACK_IMPORTED_MODULE_1__["CRUD"]));



/***/ }),

/***/ "./src/app/search/search-present.component.ts":
/*!****************************************************!*\
  !*** ./src/app/search/search-present.component.ts ***!
  \****************************************************/
/*! exports provided: SearchPresentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPresentComponent", function() { return SearchPresentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-course.service */ "./src/app/search/search-course.service.ts");
/* harmony import */ var _course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course.service */ "./src/app/search/course.service.ts");
/* harmony import */ var _search_comment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-comment.service */ "./src/app/search/search-comment.service.ts");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/user.service */ "./src/app/auth/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchPresentComponent = /** @class */ (function () {
    function SearchPresentComponent(searchcourseservice, courseservice, searchcommentservice, userservice) {
        this.searchcourseservice = searchcourseservice;
        this.courseservice = courseservice;
        this.searchcommentservice = searchcommentservice;
        this.userservice = userservice;
        this.searchStatus = false;
        this.signIn = false;
    }
    SearchPresentComponent.prototype.searchCourseByID = function (id) {
        var _this = this;
        this.searchcourseservice.searchCourse(id).subscribe(function (courseResult) {
            _this.courseservice.updateSearchedCourse(courseResult),
                _this.getSearchResult();
        }, function (error) { console.log(error); });
    };
    SearchPresentComponent.prototype.addComment = function () {
        var _this = this;
        console.log('add comment');
        this.searchcommentservice.addComment(this.getComment()).subscribe(function (result) {
            _this.courseservice.updateCourseComment(result);
            _this.getSearchResult();
            _this.userservice.updateUserComments(result);
        }, function (err) { console.log(err); });
    };
    SearchPresentComponent.prototype.getSearchResult = function () {
        this.tempResult = this.courseservice.getSearchedCourse();
    };
    SearchPresentComponent.prototype.updateSearchStatus = function (status) {
        this.searchStatus = status;
    };
    SearchPresentComponent.prototype.updateComment = function (comment) {
        this.comment = comment;
    };
    SearchPresentComponent.prototype.getComment = function () {
        return this.comment;
    };
    SearchPresentComponent.prototype.getUserLoggedIn = function () {
        this.signIn = this.userservice.getUserStatus();
    };
    SearchPresentComponent.prototype.ngOnInit = function () {
        this.getUserLoggedIn();
    };
    SearchPresentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-present',
            template: "\n    <app-profile-present *ngIf=\"signIn\"></app-profile-present>\n    <app-search (finishTyping)=\"searchCourseByID($event)\" (finishClicking)=\"updateSearchStatus($event)\">\n    </app-search>\n    <app-course-list *ngIf=\"searchStatus\" [courseList]=\"tempResult\" (postComment)=\"updateComment($event); addComment();\">\n    </app-course-list>\n    ",
            styles: [""]
        }),
        __metadata("design:paramtypes", [_search_course_service__WEBPACK_IMPORTED_MODULE_1__["SearchCourseService"], _course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"],
            _search_comment_service__WEBPACK_IMPORTED_MODULE_3__["SearchCommentService"], _auth_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], SearchPresentComponent);
    return SearchPresentComponent;
}());



/***/ }),

/***/ "./src/app/search/search-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/search/search-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SearchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_present_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-present.component */ "./src/app/search/search-present.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var searchRoutes = [
    { path: 'search', component: _search_present_component__WEBPACK_IMPORTED_MODULE_2__["SearchPresentComponent"] },
];
var SearchRoutingModule = /** @class */ (function () {
    function SearchRoutingModule() {
    }
    SearchRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(searchRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], SearchRoutingModule);
    return SearchRoutingModule;
}());



/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
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

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.finishTyping = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.finishClicking = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.courseID = '';
        this.searched = false;
    }
    SearchComponent.prototype.sendSearchStatus = function () {
        this.finishClicking.emit(this.searched);
    };
    SearchComponent.prototype.getCourseID = function (id) {
        this.courseID = id;
    };
    SearchComponent.prototype.sendCourseID = function () {
        this.searched = true;
        this.finishTyping.emit(this.courseID);
    };
    SearchComponent.prototype.sendEmptyID = function () {
        this.searched = true;
        this.finishTyping.emit('');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "finishTyping", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "finishClicking", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: "\n    <input (input)=\"getCourseID($event.target.value)\" type=\"text\" id=\"search\" name=\"courseid\" placeholder=\"Find your course by id\">\n    <button (click)=\"sendCourseID(); sendSearchStatus();\">How is it?</button>\n    <button (click)=\"sendEmptyID();  sendSearchStatus();\">Browse all courses</button>\n    ",
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _courses_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courses-list.component */ "./src/app/search/courses-list.component.ts");
/* harmony import */ var _search_present_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-present.component */ "./src/app/search/search-present.component.ts");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _course_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-detail.component */ "./src/app/search/course-detail.component.ts");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-routing.module */ "./src/app/search/search-routing.module.ts");
/* harmony import */ var _comment_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comment.module */ "./src/app/search/comment.module.ts");
/* harmony import */ var _auth_register_login_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/register-login.module */ "./src/app/auth/register-login.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _search_routing_module__WEBPACK_IMPORTED_MODULE_6__["SearchRoutingModule"],
                _comment_module__WEBPACK_IMPORTED_MODULE_7__["CommentModule"],
                _auth_register_login_module__WEBPACK_IMPORTED_MODULE_8__["RegisterLoginModule"]
            ],
            declarations: [
                _courses_list_component__WEBPACK_IMPORTED_MODULE_2__["CourseListComponent"],
                _search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"],
                _search_present_component__WEBPACK_IMPORTED_MODULE_3__["SearchPresentComponent"],
                _course_detail_component__WEBPACK_IMPORTED_MODULE_5__["CourseDetailComponent"],
            ]
        })
    ], SearchModule);
    return SearchModule;
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

module.exports = __webpack_require__(/*! /Users/chenzhao/Desktop/Applied Internet Tech/rate-my-course/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map