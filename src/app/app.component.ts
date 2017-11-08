import { Component } from '@angular/core';
//import { ROUTER_DIRECTIVES }  from '@angular/router';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
//  directives: [HeaderComponent],
})
export class AppComponent {
  title = 'app';
}
