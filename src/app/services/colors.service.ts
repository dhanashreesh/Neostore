import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { Colors } from '../colors';
import { Observable } from 'rxjs';
import { colorsURL } from '../urls';

@Injectable()
export class ColorsService {

  constructor(private http: Http) { }

  getColors():Observable<Colors>{
  	const url = colorsURL;
    return this.http.get(url)
    .map(res => { 
    return res.json(); 
    });
  }

}
