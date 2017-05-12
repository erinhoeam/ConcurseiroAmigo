import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

//Modules
import { SharedModule } from './../shared/shared.module';
import { UsuarioRoutingModule } from './usuario.routing.module';

//Components
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { ConfirmeEmailComponent } from './confirme-email/confirme-email.component';

//Serviços
import { UsuarioService } from './../services/usuario.service';

//Directives
import { EqualValidator } from './../directives/validate-equal.directive';

@NgModule({
    imports: [FormsModule,SharedModule,UsuarioRoutingModule],
    exports: [RegistroComponent,LoginComponent,ConfirmeEmailComponent],
    declarations: [RegistroComponent,EqualValidator,LoginComponent,ConfirmeEmailComponent],
    providers: [UsuarioService],
})
export class UsuarioModule { }
