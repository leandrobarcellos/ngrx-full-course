import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MarkRyanWorkshopModule} from './mark-ryan-workshop/mark-ryan-workshop.module';
import {MarkRyanWorkshopComponent} from './mark-ryan-workshop/mark-ryan-workshop.component';
import {NgrxWorkshopModule} from './ngrx-workshop/ngrx-workshop.module';


const routes: Routes = [
  {
    path: 'mark-ryan-workshop',
    // component: MarkRyanWorkshopComponent
    loadChildren: () => MarkRyanWorkshopModule
  },
  {
    path: 'ngrx-workshop',
    // component: MarkRyanWorkshopComponent
    loadChildren: () => NgrxWorkshopModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
