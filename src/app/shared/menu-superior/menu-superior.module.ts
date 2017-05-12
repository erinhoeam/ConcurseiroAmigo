import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { MenuLoginComponent } from './../menu-login/menu-login.component';
import { MenuSuperiorComponent } from './menu-superior.component';


@NgModule({
    imports: [CommonModule,RouterModule,CollapseModule.forRoot()],
    exports: [MenuSuperiorComponent,MenuLoginComponent],
    declarations: [MenuSuperiorComponent,MenuLoginComponent],
    providers: [],
})
export class MenuSuperiorModule { }
