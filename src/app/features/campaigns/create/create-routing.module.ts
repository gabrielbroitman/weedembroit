import { SaveDraftComponent } from './save-draft/save-draft.component';
import { Step6Component } from './step6/step6.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PreviewComponent } from './preview/preview.component';
import { SuccessComponent } from './success/success.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { Step5Component } from './step5/step5.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  // {
  //   path: "",
  //   redirectTo: "step-1"
  // },
  // {
  //   path: "step-1",
  //   component: Step1Component
  // },
  // {
  //   path: "step-2",
  //   component: Step2Component
  // },
  {
    path: "",
    canActivate: [AuthGuard],
    component: Step3Component
  },
  {
    path: "step-1",
    canActivate: [AuthGuard],
    component: Step4Component
  },
  {
    path: "step-2",
    canActivate: [AuthGuard],
    component: Step5Component
  },
  {
    path: "step-3",
    canActivate: [AuthGuard],
    component: Step6Component
  },
  {
    path: "preview",
    canActivate: [AuthGuard],
    component: PreviewComponent
  },
  {
    path: "success",
    canActivate: [AuthGuard],
    component: SuccessComponent
  },
  {
    path: "draft",
    canActivate: [AuthGuard],
    component: SaveDraftComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePageRoutingModule { }
