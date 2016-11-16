import { Component, OnInit } from '@angular/core';

// Angular
import {  EventEmitter, Input, Inject, enableProdMode, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable }       from 'rxjs/Observable';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';

import { Hero } from './hero';
import { HeroService } from './hero.service';
/* services*/
import { DataSvc } from './services/DataSvc';
import { ClientsApi } from './services/slx-client-ts/api/ClientsApi';


import { ClientGroup } from './services/slx-client-ts/model/ClientGroup';
import * as models from './services/slx-client-ts/model/models';

@Component({
  moduleId: module.id,
  selector: 'premium-request',
  templateUrl: 'premium.component.html',
  styleUrls: [ 'premium.component.css' ],
  providers: [ClientsApi],
})
export class PremiumComponent implements OnInit {
  errorMessage: string;
  heroes: Hero[] = [];
  clientsGroups:  ClientGroup[] = [];
  dataSvc: DataSvc;
  clientsApi: ClientsApi;
   mode = 'Observable';

  data: wijmo.collections.CollectionView;
  premiumRequest = [];
  protected groupBy = 'id';



  constructor( dataSvc: DataSvc , clientsApi: ClientsApi) {
        this.dataSvc = dataSvc;
        this.clientsApi= clientsApi;
        //this.data = new wijmo.collections.CollectionView(this.dataSvc.getData(100));
        this.data = new wijmo.collections.CollectionView(this.clientsGroups);
        this.data.pageSize = 19;
        this._applyGroupBy();

        
      }

  ngOnInit( ) {
    this.getClientsGroup(); 
     

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

   getClientsGroup() {
    this.clientsApi.listClientGroups()
                     .subscribe(
                       clientsGroups => {this.clientsGroups = clientsGroups;   this.buildGrid() },
                       error =>  this.errorMessage = <any>error);
                      
  }
   buildGrid(){
     this.premiumRequest = this.clientsGroups;

     console.log(     this.premiumRequest[0].name)

     this.data = new wijmo.collections.CollectionView(this.premiumRequest);
     

   }
}


/* this.clientsGroups = clientsGroups,
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/