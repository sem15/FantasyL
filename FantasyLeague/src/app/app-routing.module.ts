import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'createleague',
    loadChildren: () => import('./createleague/createleague.module').then( m => m.CreateleaguePageModule)
  },
  {
    path: 'draftlobby',
    loadChildren: () => import('./draftlobby/draftlobby.module').then( m => m.DraftlobbyPageModule)
  },
  {
    path: 'leagueoverview',
    loadChildren: () => import('./leagueoverview/leagueoverview.module').then( m => m.LeagueoverviewPageModule)
  },
  {
    path: 'playerinfo',
    loadChildren: () => import('./playerinfo/playerinfo.module').then( m => m.PlayerinfoPageModule)
  },
  {
    path: 'roster-overview',
    loadChildren: () => import('./roster-overview/roster-overview.module').then( m => m.RosterOverviewPageModule)
  },
  {
    path: 'invite',
    loadChildren: () => import('./invite/invite.module').then( m => m.InvitePageModule)
  },
  {
    path: 'trade',
    loadChildren: () => import('./trade/trade.module').then( m => m.TradePageModule)
  },
  {
    path: 'editroster',
    loadChildren: () => import('./editroster/editroster.module').then( m => m.EditrosterPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
