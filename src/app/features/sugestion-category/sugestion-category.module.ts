import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { SugestionCategoryPage } from "./sugestion-category.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([{ path: "", component: SugestionCategoryPage }])
  ],
  declarations: [SugestionCategoryPage]
})
export class SugestionCategoryPageModule {}
