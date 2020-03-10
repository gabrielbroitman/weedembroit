import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user;
  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getUser().then(res => {
      console.log(res);
      this.user = res;
    })
  }

  logout() {
    this.service.logout();
  }

}
