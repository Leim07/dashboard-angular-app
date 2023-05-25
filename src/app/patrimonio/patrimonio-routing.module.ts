import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { PatrimonioFormComponent } from './patrimonio-form/patrimonio-form.component';
import { PatrimonioGraphicComponent } from '../patrimonio-graphic/patrimonio-graphic.component';
import { PatrimonioListaComponent } from '../patrimonio-lista/patrimonio-lista.component';
import { PatrimonioGraficoComponent } from '../patrimonio-grafico/patrimonio-grafico.component';

const routes: Routes = [
  {path: 'patrimonio', component: LayoutComponent, children: [

    {path: 'grafico', component: PatrimonioGraphicComponent},
    {path: 'form', component: PatrimonioFormComponent},
    {path: 'form/:id', component: PatrimonioFormComponent},
    {path: 'lista', component: PatrimonioListaComponent}, 
    {path: 'grafic', component: PatrimonioGraficoComponent},   
    {path: '', redirectTo: '/patrimonio/lista', pathMatch: 'full'}

  ]} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatrimonioRoutingModule { }
