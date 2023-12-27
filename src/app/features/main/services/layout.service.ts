import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  pageTitle$ = new BehaviorSubject('');
  isLoading$ = new BehaviorSubject(false);

  setPageTitle(value: string) {
    this.pageTitle$.next(value);
  }

  setLoadingState(val: boolean) {
    this.isLoading$.next(val);
  }
}
