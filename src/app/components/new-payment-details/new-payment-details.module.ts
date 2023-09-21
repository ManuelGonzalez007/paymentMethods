import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPaymentDetailsComponent } from './new-payment-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NewPaymentDetailsComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class NewPaymentDetailsModule {}
