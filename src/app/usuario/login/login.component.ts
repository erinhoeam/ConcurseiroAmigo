import { Router } from '@angular/router';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { Login } from './../../models/login';
import { BaseComponent } from './../../shared/base.component';
import { UsuarioService } from './../../services/usuario.service';

import { ToastsManager,Toast } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {

  login:Login;

  constructor(private usuarioService:UsuarioService,
              public toastr: ToastsManager, 
              vcr: ViewContainerRef,
              private routerC: Router) {
    super(toastr,vcr,routerC);
    this.login = new Login();
  }

  ngOnInit() {
  }

  loginUsuario(fb:any){
    this.showToastrInfo('Efetuando Login...');
    if (fb.valid){
      this.usuarioService.loginUsuario(this.login)
      .subscribe(
          result => { this.onSaveComplete(result) },
          error => { this.onSaveError(error) }
      );
    }
  }

  onSaveComplete(response: any) {
    this.login.Password = '';
    this.hideToastrInfo();
    this.errors = [];

    localStorage.setItem('concurseiro.token', response.result.access_token);
    localStorage.setItem('concurseiro.user', JSON.stringify(response.result.user));

    this.routerC.navigate(['/home']);
    
  }

  onSaveError(error: any) 
  {
    this.login.Password = '';
    this.hideToastrInfo();
    this.showToastrError('Falha ao realizar login.',error);
  }
}
