import { Storage } from "@ionic/storage";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ENUM_DESTINATION } from "src/app/core/interfaces/destination.interface";
import { CreateCampaignDTO } from "./../../../../core/dto/create-campaign.dto";

@Component({
  selector: "app-step1",
  templateUrl: "./step1.component.html",
  styleUrls: ["./step1.component.scss"]
})
export class Step1Component implements OnInit {
  destination: ENUM_DESTINATION = ENUM_DESTINATION.FOR_ME;
  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() { }

  create() {
    const campaign = new CreateCampaignDTO();
    campaign.destination = this.destination;
    this.storage.set('campaign', campaign).then(() => {
      this.router.navigate(["/campaigns/create/step-2"]);
    });
  }
}
