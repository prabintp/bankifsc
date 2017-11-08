import { Component, OnInit } from '@angular/core';
import { Router }           from '@angular/router';
import { banks,HeroService } from '../common/services/ifsc.service';
//import { GridcontainerComponent } from '../gridcontainer/gridcontainer.component';
//import { SearchFormComponent } from '../search/search-form/search-form.component';
const FIRST_PAGE: number = 1;
@Component({
  selector: 'dashboard-item',
  templateUrl: './dashboard.component.html',
  providers: [
    HeroService,
  ],
  //directives: [GridcontainerComponent, SearchFormComponent],

})
export class DashboardComponent {

 constructor(

   private heroService: HeroService, private router: Router) {
     console.log('dash');
  //   this.banks = [];
  //  this.heroService.getHeroes()
  //  .subscribe(banks => { this.banks = banks});
 }
banks: banks[];
query: String;

 /*ngOnInit() {
   this.banks = [];
  this.heroService.getHeroes()
  .subscribe(banks => { this.banks = banks});
  // console.log(heroes);
}*/
onSearchSubmit(qry: String) {
       this.query = qry;
      console.log(qry+'login data');

    this.router.navigate(['search'],{ queryParams: {qry: qry, page: FIRST_PAGE} });
}

  title = 'Dashboard';
}
