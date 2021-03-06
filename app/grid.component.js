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
// Angular
var core_1 = require('@angular/core');
/**services */
var DataSvc_1 = require('./services/DataSvc');
// The Explorer application root component.
var GridComponent = (function () {
    function GridComponent(dataSvc) {
        this.groupBy = 'id';
        this.dataSvc = dataSvc;
        this.data = new wijmo.collections.CollectionView(this.dataSvc.getData(100));
        this.data.pageSize = 19;
        this._applyGroupBy();
    }
    GridComponent.prototype._applyGroupBy = function () {
        var cv = this.data;
        cv.beginUpdate();
        cv.groupDescriptions.clear();
        var groupDesc = new wijmo.collections.PropertyGroupDescription(this.groupBy);
        cv.groupDescriptions.push(groupDesc);
        cv.refresh();
        cv.endUpdate();
    };
    GridComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'grid',
            templateUrl: 'grid.component.html',
        }), 
        __metadata('design:paramtypes', [DataSvc_1.DataSvc])
    ], GridComponent);
    return GridComponent;
}());
exports.GridComponent = GridComponent;
//# sourceMappingURL=grid.component.js.map