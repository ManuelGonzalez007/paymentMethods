import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { PaymentMethod } from 'src/app/models/payment-method.model';
import { PaymentMethodService } from '../../servicio/payment-method.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  paymentMethods: PaymentMethod[][] = [];
  paymentMethodId!: string;
  showModal: boolean = false;
  paymentMethod: PaymentMethod = {};
  hover: boolean = false;
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalElements: number = 0;
  subscription!: Subscription;
  constructor(
    private paymentMethodService: PaymentMethodService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getPaymentMethods();
    console.log(this.paymentMethods);
  }

  getPaymentMethods(): void {
    this.paymentMethods = [];
    this.subscription = this.paymentMethodService
      .getPaymentMethods()
      .subscribe({
        next: (data: any) => {
          this.paymentMethods.push(data.data);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  deletePaymentMethod(id: string): void {
    this.subscription = this.paymentMethodService
      .deletePaymentMethod(id)
      .subscribe({
        next: () => {
          this.toastr.error('El metodo de pago fue eliminado correctamente');
          this.getPaymentMethods();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  openModal(paymentMethod: PaymentMethod): void {
    this.paymentMethod = paymentMethod;
    this.paymentMethodId = paymentMethod.id ?? '';
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage * this.itemsPerPage < this.totalItems) {
      this.currentPage++;
    }
  }

  get totalItems(): number {
    let total = 0;
    for (const paymentMethodGroup of this.paymentMethods) {
      total += paymentMethodGroup.length;
    }
    return total;
  }

  get startItem(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get endItem(): number {
    const end = this.currentPage * this.itemsPerPage;
    return end > this.totalItems ? this.totalItems : end;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
