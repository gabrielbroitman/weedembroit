import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { Component, OnInit } from "@angular/core";
import { CreateCampaignDTO } from "src/app/core/dto/create-campaign.dto";

@Component({
  selector: "app-step2",
  templateUrl: "./step2.component.html",
  styleUrls: ["./step2.component.scss"]
})
export class Step2Component implements OnInit {
  degreeKinship: string;
  favoredName: string;

  constructor(private storage: Storage, private router: Router) {}

  ngOnInit() {}

  
  async next() {
    this.storage.get("campaign").then((c: CreateCampaignDTO) => {
      c.degreeKinship = this.degreeKinship;
      c.favoredName = this.favoredName;
      this.storage
        .set("campaign", c)
        .then(() => this.router.navigate(["/campaigns/create/step-3"]));
    });
  }
}
