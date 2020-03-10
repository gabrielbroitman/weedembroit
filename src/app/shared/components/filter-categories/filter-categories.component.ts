import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { CategoryInterface } from 'src/app/core/interfaces/category.interface';

@Component({
  selector: 'app-filter-categories',
  templateUrl: './filter-categories.component.html',
  styleUrls: ['./filter-categories.component.scss'],
})
export class FilterCategoriesComponent implements OnInit {

  @Output() category = new EventEmitter();
  selectedCategory;

  categories: CategoryInterface[];

  constructor(private service: CategoryService) { }

  ngOnInit() {
    this.service.getCategorias().subscribe(res => {
      this.categories = res;
      console.log(res);
    })
  }

  filterCampaigns(event) {
    this.selectedCategory = event;
    this.category.emit(this.selectedCategory)
  }

}
