import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PersonasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PersonasProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PersonasProvider Provider');
  }

  getPersonasList(): Promise <any> {
  	return new Promise ((resolve, reject) => {
  		this.http.get('https://reqres.in/api/users?per_page=10')
  		.subscribe(res => {
  			resolve(res['data'])
  		}, (err) => {
  			reject(err);
  		});
  	});
  };


}
