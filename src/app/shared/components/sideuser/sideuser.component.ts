import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sideuser',
  templateUrl: './sideuser.component.html',
  styleUrls: ['./sideuser.component.css']
})
export class SideuserComponent implements OnInit {

  nombre: string ='Usuario';
  apellido: string="Sistema";
  email: string ="Usuario-Sistema@sistema.com.mx";
  url:string='url(administrador-scc/assets/imgSideUser/avatar.png)';

  UserSubscription:Subscription = new Subscription();
  constructor(
    private authServi:LoginService
  ) {
  }


  ngOnInit() { }

  ngOnDestroy() {
  }

  cerrarSesion() {
    this.authServi.getcerrarSesion();
  }
}
