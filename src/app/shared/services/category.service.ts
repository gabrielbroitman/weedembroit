import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { CategoryInterface } from 'src/app/core/interfaces/category.interface';
import { Observable } from 'rxjs';


@Injectable()
export class CategoryService {

  constructor(private api: ApiService, private storage: Storage) { 

  }

  getCategorias() {
    return this.api.get('categories') as Observable<CategoryInterface[]>;

  }

  getSugestoes() {
    return this.api.get('categories/suggestions') as Observable<CategoryInterface[]>;
  }

  create(c) {
    return this.api.post('categories', c);
  }

  createSuggestion(c) {
    return this.api.post('suggestions', c);
  }

}
