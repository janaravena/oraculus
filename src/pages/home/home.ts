import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ItemSliding } from 'ionic-angular';

import { PersonasProvider } from '../../providers/personas/personas';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	tituloPagina: string = "Listado";

	listado:any;

  constructor(
    public navCtrl: NavController,
    private persProv: PersonasProvider,
    private alertCtrl: AlertController) {
    this.listarPersonas();
  }

  listarPersonas() {
        this.persProv.readPersonasList()
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

  gotoAgregar() {

  let alert = this.alertCtrl.create({
    title: 'Crear Persona',
    inputs: [
      {
        name: 'first_name',
        placeholder: 'Nombre'
      },
      {
        name: 'last_name',
        placeholder: 'Apellido'
      },
      {
        name: 'avatar',
        placeholder: 'URL avatar'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Crear',
        handler: data => {
          this.agregarPersona(data);
        }
      }
    ]
  });
  alert.present();

  }

  agregarPersona(item: any) {
    this.persProv.createPersona(item)
      .then(data => {
        console.log(data);

        //Como es un servicio mockup, se puede usar:
        this.listado.push(data);
        console.log(this.listado);
      }, (error) => {
        console.error(error)
    })
}

gotoEditar(slidingItem: ItemSliding, item:any, indexP: number) {

  slidingItem.close();

  let alert = this.alertCtrl.create({
    title: 'Editar Persona',
    inputs: [
      {
        name: 'first_name',
        placeholder: 'Nombre',
        value: item.first_name
      },
      {
        name: 'last_name',
        placeholder: 'Apellido',
        value: item.last_name
      },
      {
        name: 'avatar',
        placeholder: 'URL avatar',
        value: item.avatar
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Agregar',
        handler: data => {
          this.editarPersona(data, item.id, indexP);
        }
      }
    ]
  });
  alert.present();

  }

  editarPersona(item: any, ideP: number, indexP: number) {
    this.persProv.updatePersona(item, ideP)
      .then(data => {
        console.log(data);

        //Como es un servicio mockup, se puede usar:
        this.listado[indexP] = data;
        console.log(this.listado);
      }, (error) => {
        console.error(error)
    })
  }


}
