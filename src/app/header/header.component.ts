import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { jsonData, ComponentDataService } from '../common/services/component.data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../app.component.css','./header.component.css'],
  //directives: [ROUTER_DIRECTIVES],
  providers: [
    ComponentDataService,
  ]

})
export class HeaderComponent implements OnInit {
  constructor(  private componentDataService: ComponentDataService) {
  }
  dataJSON = '../../assets/feeds/header.json';
  jsonDatas: any;
  ngOnInit() {
    this.jsonDatas = '';
    this.componentDataService.getComponentJSON(this.dataJSON)
    .subscribe(val => {this.jsonDatas = val} );

   console.log(this.jsonDatas.id+'inside header');
 };
  title = 'Get ';




};
