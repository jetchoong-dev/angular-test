import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMainComponent } from './welcome-main/welcome-main.component';
import { MaterialModule } from '../../material.module';
import { WelcomeRoutingModule } from './welcome-routing.module';

@NgModule({
  declarations: [
    WelcomeMainComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
