import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private settings : any;
  private http : HttpClient;

  constructor(private readonly httpHandler: HttpBackend) {
    this.http = new HttpClient(httpHandler);
  }

  init(endpoint: string): Promise<boolean>{
    return new Promise<boolean>((resolve,reject) => {
      this.http.get(endpoint).pipe(map(res => res)).subscribe(
        value=> {
          this.settings = value;
          resolve(true);
        },
        (error) => {
          reject(error);
        }
      )
    });
  }

  getSetting(key?: string | Array<string>):any {
    if(!key || (Array.isArray(key) && !key[0])){
      return this.settings;
    }
    if(!Array.isArray(key)){
      key = key.split('.');
    }
    return key.reduce((acc: any, current: string)=> acc && acc[current], this.settings);
  }

}
