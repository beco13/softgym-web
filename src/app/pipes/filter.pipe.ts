import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(items: Array<any>, searchText: string): any {

        // si no estan mandando nada a buscar entonces devolvemos el mismo valor ingresado
        if (searchText == null) {
            return items;
        }

        // creamos una validacion que contenga algo la busqueda aparte para que no choque en la validacion anterior en caso de que sea null
        if (searchText.trim() === '') {
            return items;
        }

        // filtramos para devolver
        return items.filter(item => {
            return this.filter(searchText, item);
        });

    }

    /**
     * Permite buscar de manera recursiva
     *
     * @param searchText Filtro de busqueda
     * @param item Dato en el cual se va a realizar la busqueda
     */
    private filter(searchText: string, item: any): boolean {

        // validamos si lo que se esta trabajando es un arreglo de objetos primitivos
        if (this.isPrimitive(item)) {
            return String(item).toLocaleLowerCase().includes(String(searchText).toLocaleLowerCase());
        }

        // obtenemos las llaves de cada item
        const itemsKeys = Object.keys(item);

        // iteramos las llaves
        for (const keyName of itemsKeys) {

            // si el valor de la propiedad es primitivo
            if (this.isPrimitive(item[keyName])) {

                // verificamos si tienen alli lo que estamos buscando
                if (String(item[keyName]).toLocaleLowerCase().includes(String(searchText).toLocaleLowerCase())) {
                    return true;
                }

            } else {

                // como no es primitivo, entonces ejecutamos otra busqueda internamente alli
                if (this.filter(searchText, item[keyName])) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * Permite verificar si una variable es primitiva
     *
     * @param customVar Variable del objeto donde se esta realizando el filtro
     */
    private isPrimitive(customVar: any): boolean {

        if (customVar === null) {
            return true;
        }

        switch (typeof customVar) {
            case 'boolean':
            case 'number':
            case 'string':
                return true;
                break;
            default:
                return false;
                break;
        }
    }
}
