import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// bootstrap
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Shared
import { MainPrincipalComponent } from './shared/main-principal/main-principal.component';
import { FooterComponent } from './shared/footer/footer.component';

//Module Components
import { HomeModule } from './home/home.module';
import { UsuarioModule } from './usuario/usuario.module';

import {ToastModule} from 'ng2-toastr/ng2-toastr';

@NgModule({
  declarations: [
    AppComponent,
    MainPrincipalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    ToastModule.forRoot(),
    FormsModule,
    HttpModule,
    HomeModule,
    UsuarioModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
