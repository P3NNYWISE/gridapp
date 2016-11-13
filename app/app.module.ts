import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }         from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';
/* Hero */
import { HeroElement }          from './hero-element.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';

/* Management */
import { GridComponent }      from './grid.component';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { PremiumComponent }   from './premium.component';

import { DataSvc } from './services/DataSvc';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    WjGridModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    PremiumComponent,
    HeroDetailComponent,
    HeroesComponent,
    GridComponent,
    HeroElement
  ],
  providers: [ HeroService ,DataSvc],
  bootstrap: [ AppComponent ]
})


export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

