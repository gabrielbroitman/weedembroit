import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Injectable } from "@angular/core";
import { ApiService } from "../../core/services/api.service";
import { CampaignsPageModule } from './campaigns.module';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  constructor(private api: ApiService, private navController: NavController, private storage: Storage) { }

  getCampanha(id) {
    return this.api.get(`campaigns/${id}`);

  }

  getUserCampaigns(userId) {
   
    return this.api.get("campaigns/users/" + userId).toPromise();

  }


  getCampanhasPendentes() {
    return this.api.get("campaigns?status=ANALYZING") as Observable<any>;

  }

  getCampanhasExpiradas() {
    return this.api.get("campaigns?status=DISAPPROVED") as Observable<any>;

  }
  findActiveCampaigns() {
    return this.api.get("campaigns?active=true") as Observable<any>;

  }

  findAll(): Observable<any> {
    return this.api.get("campaigns") as Observable<any>;
  }

  create(c: any) {
   
    return this.api.post("campaigns", c);
  }
}
