import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasComunesService {
  count: number = 0;
  constructor() { }

  contar = () => {
    this.count = this.count + 1;
    return this.count;
  }
}
