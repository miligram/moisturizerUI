import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfigurationComponent } from './configuration.component';

const configurationRoutes: Routes = [
  {
    path: '',
    component: ConfigurationComponent,
    children: []
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(configurationRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  
  ]
})
export class ConfigurationRoutingModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/