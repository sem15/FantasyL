import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../login/login.module').then(m => m.LoginModule)
          }

          
        ]
      },
      {
        path: 'signup',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../signup/signup.module').then(m => m.SignupModule)
          }
        ]
      },
      
      {
        path: 'leagueList',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../leagueList/leagueList.module').then(m => m.leagueListPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
