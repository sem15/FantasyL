import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditrosterPage } from './editroster.page';

const routes: Routes = [
  {
    path: '',
    component: EditrosterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditrosterPageRoutingModule {}
