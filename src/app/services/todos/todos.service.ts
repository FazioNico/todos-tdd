import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private _todos$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  public todos$: Observable<any[]> = this._todos$.asObservable();

  delete(itemToDelete) {}

  async addItems(item: any) {}

  get todos() {
    return this._todos$.value;
  }

}
