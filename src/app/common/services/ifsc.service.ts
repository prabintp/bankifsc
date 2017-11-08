import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
//import { Hero } from './hero';

export interface banks {}
@Injectable()
export class HeroService {
  private heroesUrl = 'app/feeds/feed.banks.json';  // URL to web api
  constructor(private _http: Http) { }
  getHeroes() {
    /*return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);*/
               return this._http.get(this.heroesUrl)
                 .map((response: Response) => response.json().data)
  }
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
