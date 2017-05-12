import { Router } from '@angular/router';
import { ViewContainerRef } from '@angular/core';
import { ToastsManager,Toast } from 'ng2-toastr/ng2-toastr';

export abstract class BaseComponent {
    
    protected errors: any[] = [];
    protected toastActual: Toast;
    protected loading: boolean = false;

    constructor(public toastr: ToastsManager,
                vcr: ViewContainerRef,
                private router:Router){
        this.toastr.setRootViewContainerRef(vcr);
    }

    aplicaCssErro(campo,submitted){
        return {
            'has-error': this.verificaValidTouched(campo,submitted),
            'has-feedback': this.verificaValidTouched(campo,submitted)
        };
    }

    verificaValidTouched(campo,submitted){
        return !campo.valid && (submitted || campo.touched);
    }

    showToastrSuccess(msg:string, title:string, route:string = null){
        
        this.toastr.success(msg,title, { dismiss: 'controlled' })
      .then((toast: Toast) => {
        setTimeout(() => {
          this.loading = false;
          this.toastr.dismissToast(toast);
          if (route != null){
             this.router.navigate([route]);
          }
          
        }, 3500);
      });
    }

    showToastrError(msg:string,error: any,route:string = null){
        this.toastr.error(msg, 'Ops :(');
        this.loading = false;
        this.errors = JSON.parse(error._body).erros;
        
    }

    showToastrInfo(msg:string){
        this.loading = true;
        this.toastr.info(msg,'Concurseiro Amigo', { dismiss: 'controlled' })
        .then((toast: Toast) =>
        {
            this.toastActual = toast;
        }
        );
    }

    hideToastrInfo(){
        this.toastr.dismissToast(this.toastActual);
    }
}