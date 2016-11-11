import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PremiumComponent }   from './premium.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { GridComponent }  from './grid.component';

const routes: Routes = [
  { path: '', redirectTo: '/premium', pathMatch: 'full' },
  { path: 'premium',  component: PremiumComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'grid',     component: GridComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/