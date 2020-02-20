import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdcButtonModule} from '@angular-mdc/web';
import {MdcIconModule} from '@angular-mdc/web';
import {MdcIconButtonModule} from '@angular-mdc/web';
import {MdcDrawerModule} from '@angular-mdc/web';
import {MdcListModule} from '@angular-mdc/web';
import {MdcTopAppBarModule} from '@angular-mdc/web';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MdcButtonModule,
    MdcIconModule,
    MdcIconButtonModule,
    MdcDrawerModule,
    MdcListModule,
    MdcTopAppBarModule
  ],
  exports: [
    MdcButtonModule,
    MdcIconModule,
    MdcIconButtonModule,
    MdcDrawerModule,
    MdcListModule,
    MdcTopAppBarModule
  ]
})
export class MaterialModule { }
