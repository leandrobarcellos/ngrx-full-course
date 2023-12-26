import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {MaterialModule} from './material.module';
import {metaReducers, reducers} from './shared/state';
import {AuthModule} from './auth';
import {BooksModule} from './books';
import {MarkRyanWorkshopComponent} from './mark-ryan-workshop.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [MarkRyanWorkshopComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MarkRyanWorkshopComponent,
        children: [
          {
            path: 'books',
            loadChildren: () => BooksModule
          }
        ]
      }
    ]),
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreDevtoolsModule.instrument({maxAge: 15}),
    EffectsModule.forRoot([]),
    MaterialModule,
    AuthModule,
  ],
  bootstrap: [MarkRyanWorkshopComponent]
})
export class MarkRyanWorkshopModule {
}
