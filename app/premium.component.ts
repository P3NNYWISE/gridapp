import { Component, OnInit } from '@angular/core';

// Angular
import {  EventEmitter, Input, Inject, enableProdMode, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';

import { Hero } from './hero';
import { HeroService } from './hero.service';
/* services*/
import { DataSvc } from './services/DataSvc';

@Component({
  moduleId: module.id,
  selector: 'premium-request',
  templateUrl: 'premium.component.html',
  styleUrls: [ 'premium.component.css' ]
})
export class PremiumComponent implements OnInit {

  heroes: Hero[] = [];
  protected dataSvc: DataSvc;
  data: wijmo.collections.CollectionView;
  protected groupBy = 'id';



      constructor( dataSvc: DataSvc) {
        this.dataSvc = dataSvc;
        this.data = new wijmo.collections.CollectionView(this.dataSvc.getData(100));
        this._applyGroupBy();
      }

  ngOnInit(): void {

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


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/