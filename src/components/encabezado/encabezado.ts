import { Component, Input } from '@angular/core';

/**
 * Generated class for the EncabezadoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'encabezado',
  templateUrl: 'encabezado.html'
})
export class EncabezadoComponent {
  @Input() PageTitle;

  constructor() {
    console.log('Hello EncabezadoComponent Component');
  }

}
