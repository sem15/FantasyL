import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RosterOverviewPageRoutingModule } from './roster-overview-routing.module';

import { RosterOverviewPage } from './roster-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RosterOverviewPageRoutingModule
  ],
  declarations: [RosterOverviewPage]
})
export class RosterOverviewPageModule {}
