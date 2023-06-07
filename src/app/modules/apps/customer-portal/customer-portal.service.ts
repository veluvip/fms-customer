import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICommonAPIService } from 'src/app/commons/services/common-api-i.service';
import { Observable } from 'rxjs'
import { ConfigService } from 'src/app/commons/services/config.service';
import {BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CustomerPortalService implements ICommonAPIService<any>{
  private countSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor(
    private httpClient: HttpClient,
    private config: ConfigService
  ) { }

  findAll(searchTerm: string, pageIndex: number, pageSize: number): Observable<any> {
    throw new Error('Method not implemented.');
  }
  get(dataId: number): Observable<any> {
    throw new Error('Method not implemented.');
  }
  add(data: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  update(dataId: number, dataToUpdate: any): Observable<string> {
    throw new Error('Method not implemented.');
  }
  delete(dataId: number): Observable<string> {
    throw new Error('Method not implemented.');
  }

  getCount() {
    return this.countSubject.asObservable();
  }

  setCount(count: number) {
    this.countSubject.next(count);
  }
}
