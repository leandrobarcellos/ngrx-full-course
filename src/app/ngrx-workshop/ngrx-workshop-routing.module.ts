import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NgrxWorkshopComponent} from './ngrx-workshop.component';


const routes: Routes = [
  {
    path: '',
    component: NgrxWorkshopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgrxWorkshopRoutingModule {
}
