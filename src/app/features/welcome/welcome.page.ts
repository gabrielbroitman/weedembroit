import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage {

  trustedVideoUrl: SafeResourceUrl;
  array_of_objects = [{vid_link:"https://www.youtube.com/watch?v=YYOKMUTTDdA"}]


  constructor(public navCtrl: NavController,
              private domSanitizer: DomSanitizer) {}

  ionViewWillEnter(): void {
    for(let i of this.array_of_objects as any){
      i.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(i.vid_link);
    }
  }  

}
