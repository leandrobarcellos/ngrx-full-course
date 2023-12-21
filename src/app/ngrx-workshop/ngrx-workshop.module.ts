import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgrxWorkshopRoutingModule} from './ngrx-workshop-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {NgrxWorkshopCreateComponent} from './ngrx-workshop-create/ngrx-workshop-create.component';
import {NgrxWorkshopListComponent} from './ngrx-workshop-list/ngrx-workshop-list.component';
import {NgrxWorkshopComponent} from './ngrx-workshop.component';
import {NgrxWorkshopGrossTotalComponent} from './ngrx-workshop-gross-total/ngrx-workshop-gross-total.component';
import {NgrxWorkshopListItemComponent} from './ngrx-workshop-list-item/ngrx-workshop-list-item.component';
import {NgrxWorkshopSearchBoxComponent} from './ngrx-workshop-search-box/ngrx-workshop-search-box.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    NgrxWorkshopComponent,
    NgrxWorkshopCreateComponent,
    NgrxWorkshopGrossTotalComponent,
    NgrxWorkshopListComponent,
    NgrxWorkshopListItemComponent,
    NgrxWorkshopSearchBoxComponent
  ],
  imports: [
    CommonModule,
    NgrxWorkshopRoutingModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatInputModule, // Add MatInputModule
    MatFormFieldModule, // Add MatFormFieldModule
    MatButtonModule, // Add MatButtonModule
    MatCardModule, // Add MatCardModule
    MatIconModule,
    MatToolbarModule,
    // Add MatIconModule
  ]
})
export class NgrxWorkshopModule {
}
