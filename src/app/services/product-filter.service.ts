import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { Product, ProductCategory } from '../product';
import { Observable } from 'rxjs';
import { productURL, categoryURL } from '../urls';

@Injectable()
export class ProductFilterService {

  constructor(private http: Http) { }

  getProductsByCategory(categry_id):Observable<Product>{
  	const url = productURL + '?filter={"where":{"categoryId":"'+categry_id+'"},"include":"images"}';
    return this.http.get(url)
    .map(res => { 
    //console.log(res.json());
    return res.json(); 
    });
  }

  getProductsByColor(color_name):Observable<Product>{
  	const url = productURL + '?filter={"where":{"product_color.color_name":{"like":"'+color_name+'"}},"include":"images"}';
    return this.http.get(url)
    .map(res => { 
    //console.log(res.json());
    return res.json(); 
    });
  }

}
