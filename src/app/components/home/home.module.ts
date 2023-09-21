import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ModalDetailsComponent } from '../modal-details/modal-details.component';

@NgModule({
  declarations: [HomeComponent, ModalDetailsComponent],
  imports: [CommonModule, RouterModule],
})
export class HomeModule {}
