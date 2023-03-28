import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../implementation/http-client.service';
import { Login } from '../models/Login.model';
import { Usuario } from '../models/Usuario.model';
import { API_URI_LOGIN } from '../shared/components/constantes/api-routes';
import { nombresModulos } from '../shared/components/constantes/constantes';
import { MessageBoxService } from '../shared/services/message-box.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClientService, private router: Router) { }

  login(usuario: Login) {
    this.contiuaLogin("inicio");
    // var Params = new URLSearchParams();
    // Params.append('user', usuario.user);
    // Params.append('password', usuario.password);
    // // Params.append('password',MetodosGenericosutil.encriptar (usuario.password));

    // this.http.posturlencoded(API_URI_LOGIN, Params).subscribe(
    //   (res: any) => {
    //     switch (res.status) {
    //       case 200:
    //         this.contiuaLogin(res);
    //         break;
    //       default:
    //         break;
    //     }
    //   },
    //   (err) => {
    //     // Entra aquí si el servicio entrega un código http de error EJ: 401,404,500
    //     MessageBoxService.showError(nombresModulos.App, 'Error al inicar sesion', true);
    //   }
    // );

    return new Usuario(1, 'Admin', 'Admin@sistema.com', 1, 'asdfghjkl');
  }
  contiuaLogin(res: any) {
   // localStorage.setItem('tokenAdmin', res.headers.get('Access-Token'));
    localStorage.setItem('tokenAdmin','xcxc');

  

    this.router.navigate([''], { replaceUrl: true });
    MessageBoxService.showSuccess(nombresModulos.App, 'Bienvenido', false);
  }

  getcerrarSesion() {
    localStorage.clear();
    location.reload();
  }
}
