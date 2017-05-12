import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmeEmailComponent } from './confirme-email/confirme-email.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const usuarioRoutes: Routes = [
  { path: 'registro', component:RegistroComponent},
  { path: 'login', component:LoginComponent},
  { path: 'confirmacao/:id/:code', component:ConfirmeEmailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(usuarioRoutes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
