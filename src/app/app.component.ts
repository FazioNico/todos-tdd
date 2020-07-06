import { Component, OnInit } from '@angular/core';
import { TodosService } from './services/todos/todos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'TodosTDD';
  todos$: Observable<any[]>;

  constructor() {}

  ngOnInit() {}

  async add(value) {}
}
