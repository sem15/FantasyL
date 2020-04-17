import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DraftlobbyPageRoutingModule } from './draftlobby-routing.module';

import { DraftlobbyPage } from './draftlobby.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DraftlobbyPageRoutingModule
  ],
  declarations: [DraftlobbyPage]
})
export class DraftlobbyPageModule {}
