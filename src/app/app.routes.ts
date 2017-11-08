// import { provideRouter, RouterConfig }  from '@angular/router';
import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { BanksComponent } from './banks/banks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchResultComponent } from './search/search-result/search-result.component';



const routes: Routes  = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {path: 'search',  component: SearchResultComponent},

/*  {
    path: 'search',
    children: [
      {
        path: '',
        component: SearchResultComponent
      },
      {
        path: ':login',
        component: SearchResultComponent
      }
    ]
  },*/
/*  {
    path: 'banks',
    component: BanksComponent
  },
  {
    path: 'banks/:bankname',
    component: BanksComponent
  }, */
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
  path: 'banks',
    children: [
      {
        path: '',
        component: BanksComponent
      },
      {
        path: ':bankname',
        children:[
          {
            path:'',
            component: BanksComponent,
          },
          {
            path:':statename',
            children:[
              {
                path:'',
                component: BanksComponent,
              },
              {
                path:':districtname',
                children:[
                  {
                    path:'',
                    component: BanksComponent,
                  },
                  {
                    path:':branchname',
                    component: BanksComponent,
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class appRouterProviders{ }
export const routableComponents = [
  BanksComponent,
  DashboardComponent,
  SearchResultComponent
];


// export const appRouterProviders: ModuleWithProviders = RouterModule.forRoot(routes);
