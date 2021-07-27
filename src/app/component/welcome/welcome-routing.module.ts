import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WelcomeMainComponent } from "./welcome-main/welcome-main.component";

const routes: Routes = [
  {
    path: '',
    component: WelcomeMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WelcomeRoutingModule { }