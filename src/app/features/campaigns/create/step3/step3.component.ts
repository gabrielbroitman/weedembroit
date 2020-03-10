import { Router } from '@angular/router';
import { CreateCampaignDTO } from 'src/app/core/dto/create-campaign.dto';
import { Storage } from '@ionic/storage';
import { CategoryInterface } from './../../../../core/interfaces/category.interface';
import { Component, OnInit } from "@angular/core";
import { PickerController, ModalController } from "@ionic/angular";
import { CategoriesComponent } from "./categories/categories.component";

@Component({
  selector: "app-step3",
  templateUrl: "./step3.component.html",
  styleUrls: ["./step3.component.scss"]
})
export class Step3Component implements OnInit {
  title: string;
  category: CategoryInterface;
  constructor(private modalController: ModalController,
    private storage: Storage,
    private router: Router) { }

  ngOnInit() {
  }

  create() {
    const campaign = new CreateCampaignDTO();
    campaign.title = this.title;
    campaign.categoryId = this.category._id;
    this.storage.set('campaign', campaign).then(() => {
      this.router.navigate(["/campaigns/create/step-1"]);
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CategoriesComponent,
      backdropDismiss: true,
      componentProps: {
        'categorySelected': this.category,
      }
    });

    modal.onDidDismiss().then((data) => {
      if (data['data']) {
        console.log(data);
        this.category = data['data']['category'];
        console.log(this.category);
      }
    });

    return await modal.present();
  }

}
