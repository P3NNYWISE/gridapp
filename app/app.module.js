"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var app_routing_module_1 = require('./app-routing.module');
/* Hero */
var hero_element_component_1 = require('./hero-element.component');
var hero_detail_component_1 = require('./hero-detail.component');
var heroes_component_1 = require('./heroes.component');
var hero_service_1 = require('./hero.service');
/* Management */
var grid_component_1 = require('./grid.component');
var wijmo_angular2_grid_1 = require('wijmo/wijmo.angular2.grid');
var premium_component_1 = require('./premium.component');
/* Services */
var DataSvc_1 = require('./services/DataSvc');
var ClientsApi_1 = require('./services/slx-client-ts/api/ClientsApi');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                platform_browser_1.BrowserModule,
                wijmo_angular2_grid_1.WjGridModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                premium_component_1.PremiumComponent,
                hero_detail_component_1.HeroDetailComponent,
                heroes_component_1.HeroesComponent,
                grid_component_1.GridComponent,
                hero_element_component_1.HeroElement,
            ],
            providers: [hero_service_1.HeroService, DataSvc_1.DataSvc, ClientsApi_1.ClientsApi],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=app.module.js.map