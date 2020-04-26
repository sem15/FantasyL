import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditrosterPageRoutingModule } from './editroster-routing.module';

import { EditrosterPage } from './editroster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EditrosterPageRoutingModule
  ],
  declarations: [EditrosterPage]
})
export class EditrosterPageModule {}
