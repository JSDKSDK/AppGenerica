import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialComponent } from './inicial/inicial.component';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';



@NgModule({
  declarations: [
    InicialComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    PanelModule 
  ]
})
export class ComponentesModule { }
