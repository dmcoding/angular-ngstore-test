import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../actions/profile.actions'

@Component({
  selector: 'app-dm',
  templateUrl: './dm.component.html',
  styleUrls: ['./dm.component.css']
})
export class DmComponent implements OnInit {

  name: string = '';
  email: string = '';

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
  }

  save() {
    if (!(this.name || this.email)) return;

    this.store.dispatch(increment({
      name: this.name,
      email: this.email
    }))
    
  }

}