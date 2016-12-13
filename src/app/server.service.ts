import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class ServerService {

  constructor(private http: Http) { }

  get(url): Observable<any> {
    return this.http.get(url)
      .map(res => res.json());
  }

}
