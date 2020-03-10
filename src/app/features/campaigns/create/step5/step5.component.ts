import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { CreateCampaignDTO } from 'src/app/core/dto/create-campaign.dto';

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.scss'],
})
export class Step5Component implements OnInit {

  value;
  user;
  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {
    this.storage.get('user').then(user => {
    this.user = user;
      console.log(user)
    });
  }

  next() {
    this.storage.get("campaign").then((c: CreateCampaignDTO) => {
      c.value = this.value;
      c.userId = this.user._id;
      this.storage
        .set("campaign", c)
        .then(() => this.router.navigate(["/campaigns/create/preview"]));

    });
  }

}
