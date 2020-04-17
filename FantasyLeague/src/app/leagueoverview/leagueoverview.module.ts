import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeagueoverviewPageRoutingModule } from './leagueoverview-routing.module';

import { LeagueoverviewPage } from './leagueoverview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeagueoverviewPageRoutingModule
  ],
  declarations: [LeagueoverviewPage]
})
export class LeagueoverviewPageModule {}
