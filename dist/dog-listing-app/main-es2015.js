(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dogs-images/dogs-images.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dogs-images/dogs-images.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-12- col-lg-12 text-center\">\n      <mat-spinner class=\"fixLayout\" color=\"accent\" *ngIf=\"!isLoading\"></mat-spinner>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <ng-container *ngIf=\"isLoading\">\n      <ng-container *ngFor=\"let image of imagesArray; let i = index;\">\n\n        <div class=\"col-12 col-md-6 col-lg-4 text-center my-3\">\n          <mat-card>\n            <img class=\"img-fluid\" [src]=\"image\" alt=\"Image not found!\">\n          </mat-card>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dogs/dogs-listing/dogs-listing.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dogs/dogs-listing/dogs-listing.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <ng-container *ngFor=\"let dog of dogData;let i = index;\">\n          <ng-container *ngIf=\"i < 12 && dogData.length > 0\">\n            <div  *ngIf=\"!isSearch\"  class=\"col-lg-3 col-md-6 col-12 text-center my-3\">\n                <mat-card>\n                   <button mat-raised-button (click) =\"onClick(dog[0])\">{{dog[0].toUpperCase()}}</button>\n                </mat-card>\n            </div>\n            <div  *ngIf=\"isSearch\"  class=\"col-lg-3 col-md-6 col-12 text-center my-3\">\n                <mat-card>\n                   <button mat-raised-button  (click) =\"onClick(dog)\">{{dog.toUpperCase()}}</button>\n                </mat-card>\n            </div>\n          </ng-container>\n        </ng-container>\n        <div class=\"col-12 text-center\" *ngIf=\"dogData.length === 0\">\n            <span>No breeds found!</span>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <nav class=\"navbar navbar-expand-lg navbar-light\">\n   <a class=\"navbar-brand\" [routerLink]=\"['/']\">\n     Dogs Viewer</a>\n   <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\"\n     aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n     <span class=\"navbar-toggler-icon\"></span>\n   </button>\n   <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n     <div class=\"form-inline ml-2 my-2 my-lg-0\">\n       <div class=\"input-group mb-3 mycustom\">\n         <input type=\"search\" class=\"form-control text-position\" #search (keyup.enter)=\"onSearch(search.value)\"\n           placeholder=\"Search\" formControlName=\"searchValue\" aria-label=\"Text input with dropdown button\">\n         <div class=\"input-group-append\">\n           <a><button mat-button type=\"button\" (click)=\"onSearch(search.value)\">\n               <mat-icon>search</mat-icon>\n             </button></a>\n         </div>\n       </div>\n     </div>\n   </div>\n </nav>\n"

/***/ }),

/***/ "./src/app/angular-material.module.ts":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let AngularMaterialModule = class AngularMaterialModule {
};
AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]
        ]
    })
], AngularMaterialModule);



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
/* harmony import */ var _dogs_images_dogs_images_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dogs-images/dogs-images.component */ "./src/app/dogs-images/dogs-images.component.ts");
/* harmony import */ var _dogs_dogs_listing_dogs_listing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dogs/dogs-listing/dogs-listing.component */ "./src/app/dogs/dogs-listing/dogs-listing.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





const routes = [
    { path: '', component: _dogs_dogs_listing_dogs_listing_component__WEBPACK_IMPORTED_MODULE_2__["DogsListingComponent"] },
    { path: 'search/:query', component: _dogs_dogs_listing_dogs_listing_component__WEBPACK_IMPORTED_MODULE_2__["DogsListingComponent"] },
    { path: ':breed/images', component: _dogs_images_dogs_images_component__WEBPACK_IMPORTED_MODULE_1__["DogsImagesComponent"] },
    { path: ':breed/:subBreed/images', component: _dogs_images_dogs_images_component__WEBPACK_IMPORTED_MODULE_1__["DogsImagesComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\r\n  width: 100%;\r\n  margin: 1rem auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDFyZW0gYXV0bztcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'dog-listing-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _dogs_dogs_listing_dogs_listing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dogs/dogs-listing/dogs-listing.component */ "./src/app/dogs/dogs-listing/dogs-listing.component.ts");
/* harmony import */ var _dogs_images_dogs_images_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dogs-images/dogs-images.component */ "./src/app/dogs-images/dogs-images.component.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _dogs_dogs_listing_dogs_listing_component__WEBPACK_IMPORTED_MODULE_9__["DogsListingComponent"],
            _dogs_images_dogs_images_component__WEBPACK_IMPORTED_MODULE_10__["DogsImagesComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dogs-images/dogs-images.component.css":
/*!*******************************************************!*\
  !*** ./src/app/dogs-images/dogs-images.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  width: 100%;\r\n  height: 25vh;\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n}\r\n\r\nmat-spinner {\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9ncy1pbWFnZXMvZG9ncy1pbWFnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQW1CO0tBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2RvZ3MtaW1hZ2VzL2RvZ3MtaW1hZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjV2aDtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcblxyXG5tYXQtc3Bpbm5lciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dogs-images/dogs-images.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dogs-images/dogs-images.component.ts ***!
  \******************************************************/
/*! exports provided: DogsImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DogsImagesComponent", function() { return DogsImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dogs_dogs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../dogs/dogs.service */ "./src/app/dogs/dogs.service.ts");




let DogsImagesComponent = class DogsImagesComponent {
    constructor(dogsService, route) {
        this.dogsService = dogsService;
        this.route = route;
        this.isLoading = false;
        this.searchCache = [];
        this.imagesArray = [];
        this.copyOfImagesArray = [];
        this.checkFound = false;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((paramMap) => {
            // check for sub-breed images
            if (paramMap.has('breed') && paramMap.has('subBreed')) {
                this.breed = paramMap.get('breed');
                this.subBreed = paramMap.get('subBreed');
                const subBreedFullName = this.subBreed + ' ' + this.breed;
                if (localStorage.getItem('search_data') !== null) {
                    const cacheData = JSON.parse(localStorage.getItem('search_data'));
                    cacheData.forEach(item => {
                        if (item[0].includes(subBreedFullName)) {
                            this.checkFound = true;
                            this.imagesArray = item.slice(1);
                            this.isLoading = true;
                        }
                    });
                    if (!this.checkFound) {
                        this.dogsService.getImagesForSubBreed(this.breed, this.subBreed);
                        this.imagesSub = this.dogsService
                            .getImageUpdateListener()
                            .subscribe((data) => {
                            this.imagesArray = [...data];
                            this.isLoading = true;
                            this.copyOfImagesArray = [...this.imagesArray];
                            this.setSearchCache(this.breed, this.copyOfImagesArray, this.subBreed);
                        });
                    }
                }
                else { // breed images
                    this.dogsService.getImagesForSubBreed(this.breed, this.subBreed);
                    this.imagesSub = this.dogsService
                        .getImageUpdateListener()
                        .subscribe((data) => {
                        this.imagesArray = [...data];
                        this.isLoading = true;
                        this.copyOfImagesArray = [...this.imagesArray];
                        this.setSearchCache(this.breed, this.copyOfImagesArray, this.subBreed);
                    });
                }
            }
            else {
                this.breed = paramMap.get('breed');
                if (localStorage.getItem('search_data') !== null) {
                    const cacheData = JSON.parse(localStorage.getItem('search_data'));
                    cacheData.forEach(item => {
                        if (item[0].includes(this.breed)) {
                            this.checkFound = true;
                            this.imagesArray = item.slice(1);
                            this.isLoading = true;
                        }
                    });
                    // not found, call service
                    if (!this.checkFound) {
                        this.dogsService.getImagesForBreed(this.breed);
                        this.imagesSub = this.dogsService
                            .getImageUpdateListener()
                            .subscribe((data) => {
                            this.imagesArray = [...data];
                            this.copyOfImagesArray = [...this.imagesArray];
                            this.isLoading = true;
                            this.setSearchCache(this.breed, this.copyOfImagesArray);
                        });
                    }
                }
                else {
                    this.dogsService.getImagesForBreed(this.breed);
                    this.imagesSub = this.dogsService
                        .getImageUpdateListener()
                        .subscribe((data) => {
                        this.imagesArray = [...data];
                        this.copyOfImagesArray = [...this.imagesArray];
                        this.isLoading = true;
                        this.setSearchCache(this.breed, this.copyOfImagesArray);
                    });
                }
            }
        });
    }
    /**
     * Caches search images data into localStorage for later access
     * @param breedName - breed name of dogs
     * @param images    - array of images
     * @param subBreedName - sub-breed of dogs
     */
    setSearchCache(breedName, images, subBreedName) {
        if (subBreedName) {
            const dogBreed = subBreedName + ' ' + breedName;
            images.splice(0, 0, dogBreed);
            if (localStorage.getItem('search_data') !== null) {
                this.searchCache = JSON.parse(localStorage.getItem('search_data'));
                this.searchCache.push(images);
            }
            else {
                this.searchCache.push(images);
            }
            localStorage.setItem('search_data', JSON.stringify(this.searchCache));
        }
        else {
            images.splice(0, 0, breedName);
            if (localStorage.getItem('search_data') !== null) {
                this.searchCache = JSON.parse(localStorage.getItem('search_data'));
                this.searchCache.push(images);
            }
            else {
                this.searchCache.push(images);
            }
            localStorage.setItem('search_data', JSON.stringify(this.searchCache));
        }
    }
    ngOnDestroy() {
        if (this.imagesSub !== undefined) {
            this.imagesSub.unsubscribe();
        }
    }
};
DogsImagesComponent.ctorParameters = () => [
    { type: _dogs_dogs_service__WEBPACK_IMPORTED_MODULE_3__["DogsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
DogsImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dogs-images',
        template: __webpack_require__(/*! raw-loader!./dogs-images.component.html */ "./node_modules/raw-loader/index.js!./src/app/dogs-images/dogs-images.component.html"),
        styles: [__webpack_require__(/*! ./dogs-images.component.css */ "./src/app/dogs-images/dogs-images.component.css")]
    })
], DogsImagesComponent);



/***/ }),

/***/ "./src/app/dogs/dogs-listing/dogs-listing.component.css":
/*!**************************************************************!*\
  !*** ./src/app/dogs/dogs-listing/dogs-listing.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  width: 90%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9ncy9kb2dzLWxpc3RpbmcvZG9ncy1saXN0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9kb2dzL2RvZ3MtbGlzdGluZy9kb2dzLWxpc3RpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dogs/dogs-listing/dogs-listing.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/dogs/dogs-listing/dogs-listing.component.ts ***!
  \*************************************************************/
/*! exports provided: DogsListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DogsListingComponent", function() { return DogsListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dogs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dogs.service */ "./src/app/dogs/dogs.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DogsListingComponent = class DogsListingComponent {
    constructor(dogsService, router, route) {
        this.dogsService = dogsService;
        this.router = router;
        this.route = route;
        this.dogData = [];
        this.dogSearchData = [];
        this.isSearch = false;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((paramMap) => {
            // show search results
            if (paramMap.has('query')) {
                this.dogSearchData = [];
                this.isSearch = true;
                // check localStorage for user_data
                this.breed = paramMap.get('query');
                this.dogData = JSON.parse(localStorage.getItem('dog_data'));
                const breedArr = this.breed.split(' ');
                // find sub-breed
                if (breedArr.length > 1) {
                    this.dogData = this.dogData.filter(item => {
                        if (item[0] === breedArr[1]) {
                            return item;
                        }
                    });
                    if (this.dogData.length === 0) {
                        return (this.dogData = []);
                    }
                    const found = this.dogData[0][1].find(x => x === breedArr[0]);
                    if (found === undefined) {
                        return (this.dogData = []);
                    }
                    this.dogSearchData.push(found + ' ' + this.dogData[0][0]);
                    this.dogData = this.dogSearchData;
                }
                else { // find by breed
                    this.dogData = this.dogData.filter(item => {
                        if (item[0] === breedArr[0]) {
                            return item;
                        }
                    });
                    if (this.dogData.length === 0) {
                        return (this.dogData = []);
                    }
                    this.dogSearchData.push(this.dogData[0][0]);
                    this.dogData[0][1].forEach(item => this.dogSearchData.push(item + ' ' + this.dogData[0][0]));
                    this.dogData = this.dogSearchData;
                }
            }
            else {
                // initial load
                this.isSearch = false;
                this.dogsService.getAllDogs();
                this.dogsSub = this.dogsService
                    .getDogsUpdateListener()
                    .subscribe((data) => {
                    this.dogData = [...data];
                    localStorage.setItem('dog_data', JSON.stringify(this.dogData));
                });
            }
        });
    }
    /**
     * Register user button clicks on filtered results and redirect to images view
     * @param query - search query string
     */
    onClick(query) {
        const checkSubBreed = query.split(' ');
        if (checkSubBreed.length > 1) { // sub-breed
            this.router.navigateByUrl('/' + checkSubBreed[1] + '/' + checkSubBreed[0] + '/images');
        }
        else {
            this.router.navigateByUrl('/' + query + '/images');
        }
    }
    /**
     * Garbage collection - unsubscribe from dogs subscription
     */
    ngOnDestroy() {
        if (this.dogsSub !== undefined) {
            this.dogsSub.unsubscribe();
        }
    }
};
DogsListingComponent.ctorParameters = () => [
    { type: _dogs_service__WEBPACK_IMPORTED_MODULE_2__["DogsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
DogsListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dogs-listing',
        template: __webpack_require__(/*! raw-loader!./dogs-listing.component.html */ "./node_modules/raw-loader/index.js!./src/app/dogs/dogs-listing/dogs-listing.component.html"),
        styles: [__webpack_require__(/*! ./dogs-listing.component.css */ "./src/app/dogs/dogs-listing/dogs-listing.component.css")]
    })
], DogsListingComponent);



/***/ }),

/***/ "./src/app/dogs/dogs.service.ts":
/*!**************************************!*\
  !*** ./src/app/dogs/dogs.service.ts ***!
  \**************************************/
/*! exports provided: DogsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DogsService", function() { return DogsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let DogsService = class DogsService {
    constructor(http) {
        this.http = http;
        this.imageListUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dogsListUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    getDogsUpdateListener() {
        return this.dogsListUpdated.asObservable();
    }
    getImageUpdateListener() {
        return this.imageListUpdated.asObservable();
    }
    getAllDogs() {
        this.http
            .get('https://dog.ceo/api/breeds/list/all')
            .subscribe(dogData => {
            this.dogsList = Object.entries(dogData.message);
            this.dogsListUpdated.next(this.dogsList);
        });
    }
    getImagesForBreed(breed) {
        this.http
            .get('https://dog.ceo/api/breed/' + breed + '/images')
            .subscribe(dogData => {
            this.imagesList = dogData.message;
            this.imageListUpdated.next(this.imagesList);
        }, err => {
            console.error('ERROR(s): ' + err.message);
        });
    }
    getImagesForSubBreed(breed, subBreed) {
        this.http
            .get('https://dog.ceo/api/breed/' + breed + '/' + subBreed + '/images')
            .subscribe(dogData => {
            this.imagesList = dogData.message;
            this.imageListUpdated.next(this.imagesList);
        }, err => {
            console.error('ERROR(s): ' + err.message);
        });
    }
};
DogsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DogsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], DogsService);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a, .signoutBtn, .navbar-brand {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n.navbar {\r\n  background-color: #d19005;\r\n}\r\n.nav-link {\r\n  cursor: pointer;\r\n}\r\nimg:hover {\r\n  cursor:pointer;\r\n}\r\n.nav-item a{\r\n   padding: 0;\r\n   bottom: 0;\r\n   margin: 0;\r\n}\r\n.mat-icon {\r\n  font-size: 30px;\r\n}\r\n.item1 {\r\n  flex: 1 1 auto;\r\n}\r\n.mycustom .input-group-append {\r\n  position: absolute;\r\n  right: 4px;\r\n  top: 4px;\r\n  bottom: 4px;\r\n  z-index:9;\r\n  }\r\n.mycustom   {\r\n    margin-top: 1em;\r\n  }\r\n.text-position {\r\n     padding-left: 1rem;\r\n  }\r\n.mycustom input[type=search] {\r\n  border: none;\r\n  width: 100%;\r\n  width: 40vw;\r\n  height: 3em;\r\n  padding-right: 123px;\r\n  border-radius: 20px;\r\n}\r\n.dropdown-toggle {\r\n  border-radius: 20px;\r\n}\r\nbutton {\r\n  outline:none;\r\n  border-radius: 20px;\r\n}\r\nbutton:focus {\r\n  outline:none;\r\n}\r\n.nav-item {\r\n  padding: 0 1rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7R0FDRyxVQUFVO0dBQ1YsU0FBUztHQUNULFNBQVM7QUFDWjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsV0FBVztFQUNYLFNBQVM7RUFDVDtBQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUVBO0tBQ0csa0JBQWtCO0VBQ3JCO0FBRUY7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhLCAuc2lnbm91dEJ0biwgLm5hdmJhci1icmFuZCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDE5MDA1O1xyXG59XHJcbi5uYXYtbGluayB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbWc6aG92ZXIge1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG4ubmF2LWl0ZW0gYXtcclxuICAgcGFkZGluZzogMDtcclxuICAgYm90dG9tOiAwO1xyXG4gICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5tYXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uaXRlbTEge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG5cclxuLm15Y3VzdG9tIC5pbnB1dC1ncm91cC1hcHBlbmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogNHB4O1xyXG4gIHRvcDogNHB4O1xyXG4gIGJvdHRvbTogNHB4O1xyXG4gIHotaW5kZXg6OTtcclxuICB9XHJcblxyXG4gIC5teWN1c3RvbSAgIHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICB9XHJcblxyXG4gIC50ZXh0LXBvc2l0aW9uIHtcclxuICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgfVxyXG5cclxuLm15Y3VzdG9tIGlucHV0W3R5cGU9c2VhcmNoXSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHdpZHRoOiA0MHZ3O1xyXG4gIGhlaWdodDogM2VtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEyM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi10b2dnbGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgb3V0bGluZTpub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgb3V0bGluZTpub25lO1xyXG59XHJcblxyXG4ubmF2LWl0ZW0ge1xyXG4gIHBhZGRpbmc6IDAgMXJlbTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HeaderComponent = class HeaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    /**
     * Redirect to another route
     * @param query - search query
     */
    onSearch(query) {
        if (query) {
            this.router.navigateByUrl('/search/' + query);
        }
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    })
], HeaderComponent);



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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Interview\Companies\BanyanInfrastructure\coding_hw\dog-listing-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map