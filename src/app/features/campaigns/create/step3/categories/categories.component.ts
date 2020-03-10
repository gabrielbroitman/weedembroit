import { Router } from '@angular/router';
import { CategoryInterface } from './../../../../../core/interfaces/category.interface';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from "@angular/core";
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {

  @Input() categorySelected: CategoryInterface;

  categories: CategoryInterface[] = [
  ];
  constructor(private modalCtrl: ModalController, private router: Router, private service: CategoryService) { }

  ngOnInit() {
    this.service.getCategorias().subscribe(res => this.categories = res);
    if (this.categorySelected) {
      this.updateStatus(this.categorySelected._id);
    }
  }

  select(id: string) {
    this.updateStatus(id);
    this.modalCtrl.dismiss({category: this.categorySelected});
  }

  async openSugestions(){
    await this.modalCtrl.dismiss();
    this.router.navigateByUrl('/sugestions');
  }

  private updateStatus(id: string){
    this.categories.forEach(c => {
      if (c._id === id) {
        c.selected = true;
        this.categorySelected = c;
        return;
      }
      c.selected = false;
    });
  }
}
