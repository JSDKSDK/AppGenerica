import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/config/auth.guard';
import { InicialComponent } from '../componentes/inicial/inicial.component';
import { LoginComponent } from '../pages/login/login.component';

import { PagesComponent } from '../pages/pages.component';

const appRoutes: Routes = [
    {
      path: '',
      component: PagesComponent,
      canActivate: [AuthGuard],
      children: [
        { path: '', component:InicialComponent , data: { titulo: 'Pagina de inicio' } },
      

      ],
    },
    {
      path: 'login',
      component: LoginComponent,
    },
  ];
  
  export const PagesComponentsRoutes = RouterModule.forChild(appRoutes);
  