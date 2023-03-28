import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideuserComponent } from './components/sideuser/sideuser.component';



@NgModule({
  declarations: [
    ContenidoComponent,
    NavbarComponent,
    SideuserComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ContenidoComponent,
    NavbarComponent,
    SideuserComponent
  ]
})
export class SharedModule { }
