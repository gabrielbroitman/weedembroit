import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent implements OnInit {

  campaign;
  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {
    this.storage.get('campanhaDoacao').then(res => {
      this.campaign = res;
    })
  }


  async continuar() {
    this.storage.remove('campanhaDoacao').then(res => console.log(res));

    this.router.navigate(['campaigns']);
  }

}
