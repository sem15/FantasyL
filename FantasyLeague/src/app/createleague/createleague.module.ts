import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateleaguePageRoutingModule } from './createleague-routing.module';

import { CreateleaguePage } from './createleague.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateleaguePageRoutingModule
  ],
  declarations: [CreateleaguePage]
})
export class CreateleaguePageModule {}
