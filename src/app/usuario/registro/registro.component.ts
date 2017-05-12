import { Router } from '@angular/router';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { BaseComponent } from './../../shared/base.component';
import { Usuario } from './../../models/usuario';
import { UsuarioService } from './../../services/usuario.service';

import { ToastsManager,Toast } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent extends BaseComponent implements OnInit {

  usuario: Usuario;

  constructor(private usuarioService:UsuarioService,
              public toastr: ToastsManager, 
              vcr: ViewContainerRef,
              private routerC: Router) {
    super(toastr,vcr,routerC);
    this.usuario = new Usuario();
  }

  ngOnInit() {
  }

  save(fb){

    if (fb.valid){
      this.showToastrInfo('Registrando...');
      this.usuarioService.registrarUsuario(this.usuario)
      .subscribe(
          result => { this.onSaveComplete(result) },
          error => { this.onSaveError(error) }
      );
    }

  }

  onSaveComplete(response: any) {
    this.hideToastrInfo();
    this.errors = [];
    this.showToastrSuccess('Registro realizado com sucesso!','Bem Vindo!','/home');
  }

  onSaveError(error: any) 
  {
    this.hideToastrInfo();
    this.showToastrError('Falha ao realizar o cadastro!',error);
  }
}
