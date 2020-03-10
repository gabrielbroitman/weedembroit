import { Router } from '@angular/router';
import { ToastController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-sugestion-category',
  templateUrl: './sugestion-category.page.html',
  styleUrls: ['./sugestion-category.page.scss'],
})
export class SugestionCategoryPage implements OnInit {

  sugestion: string;

  constructor(private toastController: ToastController, private navController: NavController, private service: CategoryService) { }

  ngOnInit() {
    
  }

  async send() {
    this.service.createSuggestion({name: this.sugestion}).subscribe(res => {
      const toast = this.toastController.create({
        message: 'Sugestão enviada',
        duration: 2000
      });

      this.navController.back();
    }, err => {

    })

  }

}
