import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserModel } from '../../../shared/models';
import { Store } from '@ngrx/store';
import { State } from '../../../shared/state';
import { AuthUserActions } from '../../actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user$: Observable<UserModel | null> = of({
    id: '1',
    username: 'NgRx Learner'
  });

  onLogout() {
    // Not Implemented
  }
}
