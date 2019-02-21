import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PersonasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PersonasProvider {

	apiUrl = 'https://reqres.in/api/users';

  constructor(public http: HttpClient) {
    console.log('Hello PersonasProvider Provider');
  }

  readPersonasList(): Promise <any> {
  	return new Promise ((resolve, reject) => {
  		this.http.get(this.apiUrl + '?per_page=10')
  		.subscribe(res => {
  			resolve(res['data'])
  		}, (err) => {
  			reject(err);
  		});
  	});
  };

  createPersona( item: any): Promise <any> {
  	return new Promise ((resolve, reject) => {
  		this.http.post(this.apiUrl , item)
  		.subscribe(res => {
  			resolve(res)
  		}, (err) => {
  			reject(err);
  		});
  	});
  };

  updatePersona( item: any, idP: number): Promise <any> {
  	return new Promise ((resolve, reject) => {
  		console.log(this.apiUrl + '/' + idP);
  		this.http.put(this.apiUrl + '/' + idP , item)
  		.subscribe(res => {
  			resolve(res)
  		}, (err) => {
  			reject(err);
  		});
  	});
  };

  deletePersona(idP: number): Promise <any> {
  	return new Promise ((resolve, reject) => {
  		console.log(this.apiUrl + '/' + idP);
  		this.http.delete(this.apiUrl + '/' + idP)
  		.subscribe(res => {
  			resolve(res)
  		}, (err) => {
  			reject(err);
  		});
  	});
  };


}
