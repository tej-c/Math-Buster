import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { LayComponent } from './lay/lay.component';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from '../app-routing.module';
import { ConComponent } from './con/con.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [HeadComponent, LayComponent, ConComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports:[HeadComponent,LayComponent,ConComponent]
})
export class UseriModule { }
