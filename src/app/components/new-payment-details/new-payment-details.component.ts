import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { PaymentMethod } from '../../models/payment-method.model';
import { PaymentMethodService } from '../../servicio/payment-method.service';

@Component({
  selector: 'app-new-payment-details',
  templateUrl: './new-payment-details.component.html',
  styleUrls: ['./new-payment-details.component.scss'],
})
export class NewPaymentDetailsComponent implements OnInit {
  newPaymentMethodForm: FormGroup;
  button: string = 'Agregar';
  id: string | null = '';
  title = 'NUEVO METODO DE PAGO';
  constructor(
    private formBuilder: FormBuilder,
    private paymentMethodService: PaymentMethodService,
    private router: Router,
    private aRouter: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.newPaymentMethodForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      status_id: ['', Validators.required],
      icono: ['', Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.updatePaymentMethod();
  }

  createEditPaymentMethod(): void {
    const paymentMethod: PaymentMethod = {
      name: this.newPaymentMethodForm.get('name')?.value,
      description: this.newPaymentMethodForm.get('description')?.value,
      status_id: this.newPaymentMethodForm.get('status_id')?.value,
      icono: this.newPaymentMethodForm.get('icono')?.value,
      filesToUpload: {},
      nameFolder: 'type_payment_coditions',
    };
    if (this.id) {
      this.paymentMethodService
        .updatePaymentDetails(this.id, paymentMethod)
        .pipe(take(1))
        .subscribe({
          next: () => {
            this.toastr.success('Metodo de pago editado', 'Success');
            this.router.navigate(['/']);
          },
          error: (error) => {
            console.log(error);
            this.newPaymentMethodForm.reset();
          },
        });
    } else {
      this.paymentMethodService
        .newPaymentMethod(paymentMethod)
        .pipe(take(1))
        .subscribe({
          next: () => {
            this.toastr.success('Nuevo Metodo de pago creado', 'Success');
            this.router.navigate(['/']);
          },
          error: (error) => {
            console.log(error);
            this.newPaymentMethodForm.reset();
          },
        });
    }
  }

  updatePaymentMethod(): void {
    if (this.id !== null) {
      this.title = 'Editar Metodo de pago';
      this.button = 'Editar';
      this.paymentMethodService
        .getDetails(this.id)
        .pipe(take(1))
        .subscribe((data: PaymentMethod) => {
          this.newPaymentMethodForm.setValue({
            name: data.name,
            description: data.description,
            status_id: data.status_id,
            icono: data.icono,
          });
        });
    }
  }
}
