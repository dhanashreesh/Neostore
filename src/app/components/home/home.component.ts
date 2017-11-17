import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product, ProductCategory } from '../../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductService]
})
export class HomeComponent implements OnInit {

  constructor(private productService : ProductService) {
  }

  products:Product;
  product_categories:ProductCategory;

  ngOnInit() {
  	this.getAllProducts();
  	this.getProductCategories();
  }

  getAllProducts(){
  	this.productService.getProducts().subscribe(
  	(products) => { 
  	this.products = products
  	return products
  	}
  	);
  }

  getProductCategories(){
  	this.productService.getProductCategories().subscribe(
  	(product_categories) => { 
  	this.product_categories = product_categories
  	return product_categories
  	}
  	);
  }

}
