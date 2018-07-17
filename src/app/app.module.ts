/**
 * @license
 * Copyright JINSCOP. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule } from '@ngx-app-frame/theme';

import { NbAppComponent } from './app.component';
import { NbLayoutDirectionToggleComponent } from './layout-direction-toggle/layout-direction-toggle.component';
import { NbDynamicToAddComponent } from '../playground/theme/shared/dynamic.component';
import { NbPlaygroundSharedModule } from '../playground/theme/shared/shared.module';
import { NbLayoutThemeToggleComponent } from './layout-theme-toggle/layout-theme-toggle.component';

/**
 * @primeng
 */
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
const AF_PRIMENGMODLE = [
  SidebarModule,
  ButtonModule,
];
import {
  NbMenuModule,
} from '@ngx-app-frame/theme';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NbMenuModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: '../playground/playground.module#NbPlaygroundModule',
      },
    ], { useHash: true }),
    NbThemeModule.forRoot({ name: 'default' }),
    NbPlaygroundSharedModule,
    ...AF_PRIMENGMODLE,
    // AFValidationModule,
  ],
  declarations: [
    NbAppComponent,
    NbLayoutDirectionToggleComponent,
    NbLayoutThemeToggleComponent,
  ],
  entryComponents: [
    NbDynamicToAddComponent,
  ],
  bootstrap: [NbAppComponent],
})
export class NbAppModule {
}
