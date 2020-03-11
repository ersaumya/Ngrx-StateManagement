import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topping } from '../models/topping.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class ToppingsService {
  
  constructor(private http: HttpClient) {}

  getToppings(): Observable<Topping[]> {
    return this.http
      .get<Topping[]>(`http://localhost:3000/toppings`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
