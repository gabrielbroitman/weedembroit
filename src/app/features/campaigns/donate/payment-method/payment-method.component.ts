import { Component, OnInit, Input } from '@angular/core';
import { CreateDonationDTO } from 'src/app/core/dto/create-donation.dto';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss'],
})
export class PaymentMethodComponent implements OnInit {


  @Input() donation: CreateDonationDTO;


  constructor() { }

  ngOnInit() {}

}
