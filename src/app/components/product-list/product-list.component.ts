import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {

  constructor(private productService : ProductService) { 
    this.productArray
  }

  allProducts:Product;
  products: any;
  productArray:any[] = [];
  categoryId:string;
  categoryName:string = 'All Categories';
  
  ngOnInit() {
  	this.getAllProducts();
  }

  getAllProducts(){
  	this.productService.getAllProducts().subscribe(
  	(products) => { 
  	this.products = products;
    for(let p of this.products)
    {
      this.productArray.push(p);
    }
  	return products
  	}
  	);
  }

  getProductByCategory(event){
    this.productArray = event.products
    this.categoryId = event.id
    this.categoryName = event.categoryName
  }

  getProductsByColor(event){
    this.productArray = event
  }

}
