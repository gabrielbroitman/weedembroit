import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-required-modal',
  templateUrl: './login-required-modal.component.html',
  styleUrls: ['./login-required-modal.component.scss'],
})
export class LoginRequiredModalComponent implements OnInit {

  constructor(private router: Router, private modalController: ModalController) { }

  ngOnInit() {}

  goToRegisterPage() {
    this.router.navigateByUrl('/signup');
    this.modalController.dismiss();

  }

  goToLoginPage() {
    this.router.navigateByUrl('/login');
    this.modalController.dismiss();
    

  }

  dismiss() {
    this.modalController.dismiss();

  }

}
