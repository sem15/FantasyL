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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
