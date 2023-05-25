import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatrimonioRoutingModule } from './patrimonio-routing.module';
import { PatrimonioFormComponent } from './patrimonio-form/patrimonio-form.component';
import { FormsModule } from '@angular/forms';
import { PatrimonioListaComponent } from '../patrimonio-lista/patrimonio-lista.component';
import { PatrimonioGraphicComponent } from '../patrimonio-graphic/patrimonio-graphic.component';


@NgModule({
  declarations: [
    PatrimonioFormComponent,
    PatrimonioListaComponent,
    PatrimonioGraphicComponent
  ],
  imports: [
    CommonModule,
    PatrimonioRoutingModule,
    FormsModule
  ], 
  exports: [
    PatrimonioFormComponent,
    PatrimonioListaComponent,
    PatrimonioGraphicComponent
  ]
})
export class PatrimonioModule { }
