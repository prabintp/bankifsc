import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { appRouterProviders, routableComponents }   from './app.routes';
import { SearchFormComponent } from './search/search-form/search-form.component';
import { GridcontainerComponent } from './gridcontainer/gridcontainer.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
// import { SearchResultComponent } from './search/search-result/search-result.component';
// import { BanksComponent } from './banks/banks.component';
import { HeaderComponent } from './header/header.component';
import { BookFilterPipe } from './common/pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent, SearchFormComponent, GridcontainerComponent, HeaderComponent,
     routableComponents, BookFilterPipe

  ],

  imports: [
    BrowserModule,
    appRouterProviders,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
