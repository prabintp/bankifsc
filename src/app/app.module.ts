import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { appRouterProviders, routableComponents }   from './app.routes';
import { SearchFormComponent } from './search/search-form/search-form.component';
import { GridcontainerComponent } from './gridcontainer/gridcontainer.component';
import { HeaderComponent } from './header/header.component';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';



@NgModule({
  declarations: [
    AppComponent, SearchFormComponent, GridcontainerComponent, HeaderComponent,
     routableComponents

  ],

  imports: [
    BrowserModule,
    appRouterProviders,
    FormsModule,
    HttpModule,
    Ng2FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
