import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  form: any;
  paymentDetail = {
    actual_price: 10,
    discounted_price: 10,
  };
  constructor(private paymentService: PaymentService) {}
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
      ]),
    });
  }
  pay() {
    if (this.form.valid) {
      this.paymentService
        .getDataPayment(this.form.value)
        .subscribe((result: any) => {
          console.log(result);
          this.paymentDetail = result;
        });
    } else this.form.markAllAsTouched();
  }
  validationClass(control: string) {
    if (!this.form.controls[control].touched) return 'not-touched';
    else
      return this.form.controls[control].valid &&
        this.form.controls[control].touched
        ? 'is-valid'
        : 'is-invalid';
  }
}
