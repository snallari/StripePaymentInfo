import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
  private formData$ = new BehaviorSubject<any>(null);
  customerForm: any = {
    customer:{},
    familyDetails: {},
    custAddress:{}
  }

  constructor() { }

  getFormData():Observable<any>{
    return this.formData$.asObservable();
  }

  changeFormData(data: any) {
    this.formData$.next({...this.formData$.value,...data});
  }
}
