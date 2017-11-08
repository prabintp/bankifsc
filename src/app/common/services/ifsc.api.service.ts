import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

export interface banks {}
export interface details {}
@Injectable()
export class IfscServices {
  private getBanksUrl = 'http://localhost:4000/api/listbanks';  // URL to web api
  private baseUrl = 'https://api916312.herokuapp.com/api/';  // URL to web api

  constructor(private _http: Http) { }

  getBanksList() {
    /*return this.http.get(this.getBanksUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);*/
               return this._http.get(this.baseUrl+'listbanks')
                 .map((response: Response) => response.json().data)
  }

  getStatesByBank(bank: any) {
    /*return this.http.get(this.getBanksUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);*/
               return this._http.get(this.baseUrl+'state/'+bank)
                 .map((response: Response) => response.json().data)
  }

  getDistricts(bank: string, state: string) {
    /*return this.http.get(this.getBanksUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);*/
               return this._http.get(this.baseUrl+'districts/'+bank+'/'+state)
                 .map((response: Response) => response.json().data)
  }
  getBranches(bank: string, state: string, district: string) {
    /*return this.http.get(this.getBanksUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);*/
               return this._http.get(this.baseUrl+'branches/'+bank+'/'+state+'/'+district)
                 .map((response: Response) => response.json().data)
  }

  getDetails(bank: string, state: string, district: string, branch: string) {
    /*return this.http.get(this.getBanksUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);*/
               return this._http.get(this.baseUrl+'getbankdetails/'+bank+'/'+state+'/'+district+'/'+branch)
                 .map((response: Response) => response.json())
  }

  getSearchResult(query: string, page: number ) {
    /*return this.http.get(this.getBanksUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);*/
               return this._http.get(this.baseUrl+'search/'+query)
                 .map((response: Response) => response.json())
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
