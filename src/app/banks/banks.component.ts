import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { details, banks,IfscServices } from '../common/services/ifsc.api.service';

const FIRST_PAGE: number = 1;

@Component({
  selector: 'bank-item',
  templateUrl: './banks.component.html',
  styleUrls: ['../app.component.css','./banks.component.css'],
  providers: [
    IfscServices
  ],
//  declarations: [GridcontainerComponent, SearchFormComponent],
//  pipes: [BookFilterPipe],
})
export class BanksComponent implements OnInit {
  constructor(
    private ifscServices: IfscServices, private route: ActivatedRoute, private router: Router) {
  }

  redirect(pagename: string, page: string) {

        this.router.navigate([pagename], {relativeTo: this.route});
  }

//  state = this.route.snapshot.get('state');
  //console.log(state);
 banks: banks[];
 sub: any;
 page: any;
 details: details[];
 query: String;
 currentBank: String;
 term:any;

  ngOnInit() {
    this.banks = [];
    this.details = [] ;
    this.page = '';
    this.sub = this.route.params.subscribe(params => {

          let bankName = params['bankname'];
          let stateName = params['statename'];
          let districtName = params['districtname'];
          let branchName = params['branchname'];
          console.log(bankName);
          if(branchName){
            this.ifscServices.getDetails(bankName, stateName, districtName, branchName)
            .subscribe(details => { this.details = details});
            console.log(this.details+'detailee');
            this.page = 'details';
          }
          else if(districtName){
            this.ifscServices.getBranches(bankName, stateName, districtName)
            .subscribe(banks => { this.banks = banks});
            this.page = 'branches';
          }
          else if(stateName){
            this.ifscServices.getDistricts(bankName, stateName)
            .subscribe(banks => { this.banks = banks});
            this.page = 'districts';
          }
          else if(bankName){
            this.ifscServices.getStatesByBank(bankName)
            .subscribe(banks => { this.banks = banks});
            this.page = 'states';
            this.currentBank = bankName;
          }else{
             this.ifscServices.getBanksList()
             .subscribe(banks => { this.banks = banks});
             this.page = 'banks';

          }

        });

 }

 onSearchSubmit(qry: String) {
      this.query = qry;
       console.log(qry+'login data');

     this.router.navigate(['search'],{ queryParams: {qry: qry, page: FIRST_PAGE} });
 }

  title = 'Get ';



}
