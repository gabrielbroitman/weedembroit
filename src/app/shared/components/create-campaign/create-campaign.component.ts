import { UserService } from './../../../core/services/user.service';
import { NavController } from "@ionic/angular";
import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-create-campaign",
  templateUrl: "./create-campaign.component.html",
  styleUrls: ["./create-campaign.component.scss"]
})
export class CreateCampaignComponent implements OnInit {
  @Input() showNext = true;
  @Input() showBack = true;
  @Input() labelNext = "Continuar";
  @Input() labelBack = "Editar";
  @Input() disableNext = false;

  @Output() changePageEvent = new EventEmitter();

  user;

  constructor(private navController: NavController, private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser().then(u => this.user = u);
  }

  nextPage() {
    this.changePageEvent.emit(true);
  }

  backPage() {
    this.navController.back();
  }
}
