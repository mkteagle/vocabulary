import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppConfig } from '../app.config';
import 'rxjs/add/operator/toPromise';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class VocabService {

constructor(private http: Http, private config: AppConfig) { }

getNames() {
  return this.http.get(this.config.apiUrl + 'names')
  .toPromise()
  .then(response => {
    return response.json();
  }).catch(this.handleError);
}
private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
}

}
