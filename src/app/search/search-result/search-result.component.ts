import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SearchFormComponent } from '../search-form/search-form.component';
import { GridcontainerComponent } from '../../gridcontainer/gridcontainer.component';
import { details, banks,IfscServices } from '../../common/services/ifsc.api.service';
const FIRST_PAGE: number = 1;
@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['../../app.component.css','./search-result.component.css'],
  //  styles: [require('./search-result.component.css')],
//  directives: [ROUTER_DIRECTIVES, GridcontainerComponent, SearchFormComponent],
  providers: [
    IfscServices,
  ],


})
export class SearchResultComponent {

  sub: any;
 error: String;
  results: banks[];
  details: details[];
  @Input()
   query: String;

   submitted: Boolean;

   userNotFound: Boolean;


   constructor(private route: ActivatedRoute,
  private router: Router,private ifscServices: IfscServices) {
     console.log('inside search container custr');
     this.submitted = false;
       this.userNotFound = false;

    /*    route.params.subscribe(
            (queryParam: any) => this.param = queryParam['qry']
        );

        console.log(this.param+'param');*/


        this.sub = this.route.paramMap
            .subscribe((params: any) => {
                let query = params['qry'];
                let page = params['page'];
                console.log('inside search container'+ query + page);
                this.ifscServices.getSearchResult(query, page)
                .subscribe( details => { this.results = details});
                console.log(this.details+'detailee');
            });
       console.log('inside search container');
   }




    onSearchSubmit(qry: String) {
           this.query = qry;
          console.log(qry+'login data');

        this.router.navigate(['search'],{ queryParams: {qry: qry, page: FIRST_PAGE} });
    }

/*  ngOnInit(){
    this.sub = this.route.paramMap
        .subscribe((params: any) => {
            let query = params['qry'];
            let page = params['page'];
            console.log('inside search container'+ query + page);
            this.ifscServices.getSearchResult(query, page)
            .subscribe( details => { this.results = details});
            console.log(this.details+'detailee');
        });
   console.log('inside search container');
 }

 ngOnDestroy() {
    this.sub.unsubscribe();
  }
*/

 title = 'Get';




};
