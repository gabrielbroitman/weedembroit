import { SaveDraftComponent } from './save-draft/save-draft.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { BrMaskerModule } from 'br-mask';
import { SharedModule } from "./../../../shared/shared.module";
import { CreatePageRoutingModule } from "./create-routing.module";
import { Step1Component } from "./step1/step1.component";
import { Step2Component } from "./step2/step2.component";
import { CategoriesComponent } from './step3/categories/categories.component';
import { Step3Component } from "./step3/step3.component";
import { Step4Component } from './step4/step4.component';
import { Step5Component } from './step5/step5.component';
import { Step6Component } from './step6/step6.component';
import { PreviewComponent } from './preview/preview.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreatePageRoutingModule,
    SharedModule,
    BrMaskerModule
  ],
  declarations: [
    // Step1Component,
    // Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    Step6Component,
    CategoriesComponent,
    PreviewComponent,
    SaveDraftComponent,
    SuccessComponent
  ],
  entryComponents: [CategoriesComponent]
})
export class CreatePageModule { }
