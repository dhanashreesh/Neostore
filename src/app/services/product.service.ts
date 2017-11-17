import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { Product, ProductCategory } from '../product';
import { Observable } from 'rxjs';
import { productURL, categoryURL } from '../urls';

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  getProducts():Observable<Product>{
  	const url = productURL + '?filter={"include":"images", "limit":"6"}';
    return this.http.get(url)
    .map(res => { 
    console.log(res.json());
    return res.json(); 
    });
  }

  getAllProducts():Observable<Product>{
    const url = productURL + '?filter={"include":"images"}';
    return this.http.get(url)
    .map(res => { 
    console.log(res.json());
    return res.json(); 
    });
  }

  getProductCategories():Observable<ProductCategory>{
  	const url = categoryURL + '?filter={"include":"images"}';
    return this.http.get(url)
    .map(res => { 
    console.log(res.json());
    return res.json(); 
    });
  }

  getProduct(productId):Observable<Product>{
  	const url = productURL + productId + '/?filter={"include":"images"}';
    return this.http.get(url)
    .map(res => { 
    console.log(res.json());
    return res.json(); 
    });
  }

}


