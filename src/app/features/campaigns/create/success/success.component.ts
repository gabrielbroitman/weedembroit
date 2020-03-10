import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {}


  goHome(){
    this.navController.navigateRoot('/campaigns');
  }

}
