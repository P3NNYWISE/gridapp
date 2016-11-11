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
var DataSvc_1 = require('./services/DataSvc');
var PremiumComponent = (function () {
    function PremiumComponent(dataSvc) {
        this.heroes = [];
        this.groupBy = 'id';
        this.dataSvc = dataSvc;
        this.data = new wijmo.collections.CollectionView(this.dataSvc.getData(100));
        this._applyGroupBy();
    }
    PremiumComponent.prototype.ngOnInit = function () {
    };
    PremiumComponent.prototype._applyGroupBy = function () {
        var cv = this.data;
        cv.beginUpdate();
        cv.groupDescriptions.clear();
        var groupDesc = new wijmo.collections.PropertyGroupDescription(this.groupBy);
        cv.groupDescriptions.push(groupDesc);
        cv.refresh();
        cv.endUpdate();
    };
    PremiumComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'premium-request',
            templateUrl: 'premium.component.html',
            styleUrls: ['premium.component.css']
        }), 
        __metadata('design:paramtypes', [DataSvc_1.DataSvc])
    ], PremiumComponent);
    return PremiumComponent;
}());
exports.PremiumComponent = PremiumComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=premium.component.js.map