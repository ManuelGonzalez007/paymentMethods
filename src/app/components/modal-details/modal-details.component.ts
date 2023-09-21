import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PaymentMethod } from 'src/app/models/payment-method.model';
import { PaymentMethodService } from '../../servicio/payment-method.service';

@Component({
  selector: 'modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.scss'],
})
export class ModalDetailsComponent implements OnInit {
  @Input() paymentMethodId!: string;
  @Input() paymentMethod!: PaymentMethod;
  showModal: boolean = false;
  paymentDetails$!: Observable<PaymentMethod>;

  constructor(private paymentMethodService: PaymentMethodService) {}

  ngOnInit(): void {
    this.paymentDetails$ =
      this.paymentMethod.status_id == 2
        ? of(this.paymentMethod)
        : this.paymentMethodService.getDetails(this.paymentMethodId);
  }

  closeModal() {
    this.showModal = false;
  }
}
