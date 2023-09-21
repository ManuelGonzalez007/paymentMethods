import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewPaymentDetailsComponent } from './components/new-payment-details/new-payment-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new-payment-details', component: NewPaymentDetailsComponent },
  { path: 'new-payment-details/:id', component: NewPaymentDetailsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
