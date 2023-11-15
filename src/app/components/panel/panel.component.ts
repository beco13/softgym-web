import { Component, OnInit } from '@angular/core';


declare const setLocationForMenu: CallableFunction;
@Component({
    selector: 'app-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {


    ngOnInit(): void {

        // con el siguiente codigo evaluamos como se debe mostrar el menu, si vertical en la barra lateral izquierda o arriba
        // esto se define en el routing
        setTimeout(() => {
            setLocationForMenu("compact-sidebar");
            //setLocationForMenu("normal-sidebar");
        }, 600);
    }

}
