import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { ConfigurationService }        from './configuration.service';
import { ConfigurationComponent }     from './configuration.component';
import { ConfigurationRoutingModule } from './configuration-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ConfigurationRoutingModule
  ],
  declarations: [
    ConfigurationComponent,    
  ],
  providers: [
    ConfigurationService
  ]
})
export class ConfigurationModule {}