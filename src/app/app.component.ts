import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { UtilsService } from './services/utils.service';

declare const onReadyThemeScripts: CallableFunction;
declare const onReadyCustomizer: CallableFunction;
declare const onReadyTypeheadCustom: CallableFunction;
declare const feather: any;
declare const moment: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    title = 'InFact-web';

    // ponemos aca el auth service para que sea lo primero que se ejecute cuando la aplicacion carga
    constructor(
        private authService: AuthService,
        private utilsService: UtilsService,
        private router: Router) {
            moment.locale('es');
    }

    ngAfterViewInit() {

        // codigo para cargar los ajustes de la plantilla
        setTimeout(() => {
            onReadyThemeScripts();
            onReadyCustomizer();
            onReadyTypeheadCustom();
            feather.replace();
            this.utilsService.hiddenLoading();
        }, 500);


        // codigo para que cada vez que se cambien entre las paginas del frontend, se cargue los iconos
        this.router.events
            .subscribe({
                next: (event) => {
                    if (event instanceof NavigationEnd) {
                        setTimeout(() => {
                            onReadyThemeScripts();
                            feather.replace();
                        }, 100);
                    }
                }
            });
    }
}
