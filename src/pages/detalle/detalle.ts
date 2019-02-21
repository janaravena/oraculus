import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

	tituloPagina: string = "Detalle";

	item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.item = navParams.get('item');
  	console.log(this.item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

}
