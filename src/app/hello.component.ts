import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{ profile.name }}!</h1>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {

  profile = {
  name: null,
  email: null
};

  constructor(private store: Store<any>) {
    store.pipe(select('profile')).subscribe(res => {
      this.profile = res;
    }, console.error)
  }

}
