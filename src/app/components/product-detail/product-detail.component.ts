import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['../../../assets/css/product-details.css'],
  providers: [ProductService]
})
export class ProductDetailComponent implements OnInit {

  constructor(private productService : ProductService, private route: ActivatedRoute) { 
  }

  product_details:Product;
  rating:any;
  currentImage:any;

  ngOnInit() {
  	this.route.params.subscribe( params => this.getProductDetails(params['id']) );
  }

  getProductDetails(productId){
  	this.productService.getProduct(productId).subscribe(
  	(product_details) => { 
  	console.log(product_details);
  	this.product_details = product_details;
    this.currentImage = product_details.images[0].ImgURL;
  	this.rating = product_details.product_avg_rating;
  	return product_details;
  	},
	  (error: Error) => {
	    return error
	  }
  	);
  }

  changeImage(img_url){
    this.currentImage = img_url;
  }

}
