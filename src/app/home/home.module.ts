import { NgModule } from '@angular/core';

import { MenuSuperiorModule } from './../shared/menu-superior/menu-superior.module';

import { HomeComponent } from './home.component';

import { CarouselModule } from "ngx-bootstrap/carousel";

@NgModule({
    imports: [
        MenuSuperiorModule,
        CarouselModule.forRoot(),
    ],
    exports: [HomeComponent],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
