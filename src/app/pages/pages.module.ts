import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PagesComponentsRoutes } from '../routes/app.routes';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './menu/menu.component';
import { ComponentesModule } from '../componentes/componentes.module';


@NgModule({
  declarations: [
    PagesComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    PagesComponentsRoutes,
    ComponentesModule,
    ReactiveFormsModule,
    SharedModule,
    
  ]
})
export class PagesModule { }
