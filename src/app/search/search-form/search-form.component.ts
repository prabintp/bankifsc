import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { FormsModule }   from '@angular/forms';
//import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'div.search-formdir',
  templateUrl: './search-form.component.html',
  styleUrls: ['../../app.component.css','./search-form.component.css']


})
export class SearchFormComponent {
  @Input()
   query: String;

   submitted: Boolean;

   userNotFound: Boolean;

   @Output()

   onSearchSubmit = new EventEmitter<String>()
   constructor() {
     console.log('inside search container custr11');
     this.submitted = false;
       this.userNotFound = false;
   }


   onSubmitHandler(form:any) {
          this.submitted = true;
          if (!form.valid) {
              console.error('[Invalid form]:', form);
              return ;
          }
          console.log(this.query +'div' + form);
          this.onSearchSubmit.emit(this.query);
    }




 title = 'Get';




};
