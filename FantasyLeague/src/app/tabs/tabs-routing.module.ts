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
        path: 'createLeague',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../createleague/createleague.module').then(m => m.CreateleaguePageModule)
          }
        ]
      },
      {
        path: 'leagueOverview',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../leagueoverview/leagueoverview.module').then(m => m.LeagueoverviewPageModule)
          }
        ]
      },
      {
        path: 'draftLobby',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../draftlobby/draftlobby.module').then(m => m.DraftlobbyPageModule)
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
        path: 'playerInfo',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../playerinfo/playerinfo.module').then(m => m.PlayerinfoPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/login',
        pathMatch: 'full'
      },
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
