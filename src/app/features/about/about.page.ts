import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginRequiredModalComponent } from 'src/app/shared/components/login-required-modal/login-required-modal.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private modalController: ModalController) { }

  

  ngOnInit() {
  }

  async openMyModal() {
    const myModal = await this.modalController.create({
      component: LoginRequiredModalComponent,
      cssClass: 'my-custom-modal-css'
    });
    return await myModal.present();

    
  }

}
