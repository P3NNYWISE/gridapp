// Angular
import { Component, EventEmitter, Input, Inject, enableProdMode, NgModule } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';

/*wijmo */
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
/**services */
import { DataSvc } from './services/DataSvc';

 // The Explorer application root component.
 @Component({
     moduleId: module.id,
     selector: 'grid',
    templateUrl: 'grid.component.html',
 })

 export class GridComponent {
     // generate some random data
     protected dataSvc: DataSvc;
     data: wijmo.collections.CollectionView;
     protected groupBy = 'id';

     constructor( dataSvc: DataSvc) {
        this.dataSvc = dataSvc;
        this.data = new wijmo.collections.CollectionView(this.dataSvc.getData(100));
        this.data.pageSize = 19;
        this._applyGroupBy();
      }


      private _applyGroupBy() {
        var cv = this.data;
        cv.beginUpdate();
        cv.groupDescriptions.clear();
        var groupDesc = new wijmo.collections.PropertyGroupDescription(this.groupBy);
        cv.groupDescriptions.push(groupDesc);
        cv.refresh();        
        cv.endUpdate();
        }


}

                    