import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RosterOverviewPage } from './roster-overview.page';

const routes: Routes = [
  {
    path: '',
    component: RosterOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RosterOverviewPageRoutingModule {}
