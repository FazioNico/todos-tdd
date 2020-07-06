import { TestBed } from '@angular/core/testing';

import { TodosService } from './todos.service';

describe('TodosService', () => {
  let service: TodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add item to total items', () => {
    const item = {id: 10, name: 'item'};
    service.addItems(item);
    expect(service.todos.length).toBe(1);
  });
});
