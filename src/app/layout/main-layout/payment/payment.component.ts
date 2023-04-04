import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  form: any;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(),
      mobile:new FormControl()
    });

  }
  pay(){console.log(this.form.value);
  }

}
