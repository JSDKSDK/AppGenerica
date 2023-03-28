import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VariablesGlService {
  showSideUser = new BehaviorSubject<boolean>(false);
  constructor() { }
}
