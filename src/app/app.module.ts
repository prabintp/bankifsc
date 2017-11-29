import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule} from '@angular/http';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';


import { AppComponent } from './app.component';
import { appRouterProviders, routableComponents }   from './app.routes';
import { SearchFormComponent } from './search/search-form/search-form.component';
import { GridcontainerComponent } from './gridcontainer/gridcontainer.component';
import { HeaderComponent } from './header/header.component';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { AvatharPipe } from './common/pipe/avathar.pipe';
import { FooterComponent } from './footer/footer.component';
import { DescDetailsComponent } from './desc-details/desc-details.component';
import { Title } from '@angular/platform-browser';





@NgModule({
  declarations: [
    AppComponent, SearchFormComponent, GridcontainerComponent, HeaderComponent,
     routableComponents,
     AvatharPipe,
     FooterComponent,
     DescDetailsComponent


  ],

  imports: [
    BrowserModule,
    appRouterProviders,
    FormsModule,
    HttpModule,
    Ng2FilterPipeModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
