import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/models/Login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form!: FormGroup;
  public isSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private authServi: LoginService) {
    this.createForm();
  }

  ngOnInit() { }
  createForm() {
    this.form = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(2)]],
      contrasena: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit() {
    console.log(this.form.value);
    
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    } else {
      let usuario = new Login(this.form.value.usuario, this.form.value.contrasena);
      this.authServi.login(usuario);
      this.isSubmitted = false;
    }
  }
}
