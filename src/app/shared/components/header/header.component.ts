import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { autoLogout } from 'src/app/auth/state/auth.actions';
import { getUser } from 'src/app/auth/state/auth.selector';
import { isAuthenticated } from 'src/app/auth/state/auth.state';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isAuthenticated !: Observable<boolean>;
  public isTeacher: boolean = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.isAuthenticated = this.store.select(isAuthenticated);
    this.store.select(getUser).subscribe((res) => {
      res?.user?.role === 'teacher' ? this.isTeacher = true : this.isTeacher = false;
    })
  }

  public onLogout(event: Event) {
    event?.preventDefault();
    this.store.dispatch(autoLogout());
  }

}