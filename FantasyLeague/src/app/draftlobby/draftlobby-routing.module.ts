import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DraftlobbyPage } from './draftlobby.page';

const routes: Routes = [
  {
    path: '',
    component: DraftlobbyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DraftlobbyPageRoutingModule {}
