import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuSuperiorModule } from './menu-superior/menu-superior.module';
import { TemplateControlFormErrorComponent } from './templates/template-control-form-error/template-control-form-error.component';
import { TemplateFormControlSummaryComponent } from './templates/template-form-control-summary/template-form-control-summary.component';

@NgModule({
  imports: [CommonModule, 
            MenuSuperiorModule],

  exports: [CommonModule, 
            MenuSuperiorModule, 
            TemplateControlFormErrorComponent,
            TemplateFormControlSummaryComponent],

  declarations: [TemplateControlFormErrorComponent, 
                TemplateFormControlSummaryComponent]
})
export class SharedModule { }
