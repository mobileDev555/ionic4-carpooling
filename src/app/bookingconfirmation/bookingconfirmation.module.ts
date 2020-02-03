/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ProgressBarModule } from 'angular-progress-bar';

import { IonicModule } from '@ionic/angular';

import { BookingconfirmationPage } from './bookingconfirmation.page';

const routes: Routes = [
  {
    path: '',
    component: BookingconfirmationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressBarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BookingconfirmationPage]
})
export class BookingconfirmationPageModule { }
