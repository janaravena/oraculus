import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { PersonasProvider } from '../../providers/personas/personas';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	tituloPagina: string = "Listado";

	listado:any;

  constructor(public navCtrl: NavController, private persProv: PersonasProvider) {
    this.listarPersonas();
  }

  listarPersonas() {
        this.persProv.getPersonasList()
        .then(data => {
          console.log(data)
          this.listado =  data;
        }, (error) => {
          console.error(error)
        })
    }

  	gotoDetalles(item: any){
		this.navCtrl.push('DetallePage', {
	        'item': item
	    });
	}
}
