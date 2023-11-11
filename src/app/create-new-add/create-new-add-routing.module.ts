import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateNewAddComponent} from "./create-new-add.component";

const routes: Routes = [
  { path: '',
    component: CreateNewAddComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateNewAddRoutingModule { }
