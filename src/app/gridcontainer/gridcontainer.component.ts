import { Component, OnInit, Input } from '@angular/core';
//import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'grid-container',
  templateUrl: './gridcontainer.component.html',
  styleUrls: ['../app.component.css','./gridcontainer.component.css'],
//  directives: [ROUTER_DIRECTIVES],


})
export class GridcontainerComponent implements OnInit {
  constructor() {
  }
  @Input() bgimage: string = 'url';


  ngOnInit() {


   console.log('inside grid container');
 };
  title = 'Get';




};
