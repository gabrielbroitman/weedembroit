import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  constructor(private api: ApiService, private navController: NavController, private storage: Storage) { }

  create(c: any) {
   
    return this.api.post("donations", c);
  }
}
