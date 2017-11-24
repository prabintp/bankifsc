import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

export interface jsonData {}
@Injectable()
export class ComponentDataService {
  constructor(private _http: Http) { }
  getComponentJSON(url: any) {
    return this._http.get(url)
    .map((response: Response) => response.json().data)
    .do(data => console.log(data));
    //  .map((response: Response) => response.json().data)
            //   return this._http.get(url)
              //   .subscribe((response: Response) => response.json().data, function(){console.log('error occour')}, function(){return console.log('success')})
  }
}
