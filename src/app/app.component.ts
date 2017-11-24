import { Component } from '@angular/core';
//import { ROUTER_DIRECTIVES }  from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
//  directives: [HeaderComponent],
})
export class AppComponent {
  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {}
  title = 'app';
}
