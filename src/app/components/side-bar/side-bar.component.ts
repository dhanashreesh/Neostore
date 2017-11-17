import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ColorsService } from '../../services/colors.service';
import { ProductFilterService } from '../../services/product-filter.service';
import { ProductCategory } from '../../product';
import { Colors } from '../../colors';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  providers: [ProductService, ColorsService, ProductFilterService],
})
export class SideBarComponent implements OnInit {

  constructor(private productService : ProductService, 
  private colorService : ColorsService,
  private productfilterService : ProductFilterService) { }

  product_categories : ProductCategory;
  colors : Colors;

  @Output() categoryFilter: EventEmitter<any> = new EventEmitter<any>()
  @Output() colorFilter: EventEmitter<any> = new EventEmitter<any>()

  ngOnInit() {
  	this.getProductCategories();
  	this.getColors();
  }

  getProductCategories(){
  	this.productService.getProductCategories().subscribe(
  	(product_categories) => { 
  	this.product_categories = product_categories;
  	//console.log(product_categories);
  	return product_categories
  	}
  	);
  }

  getColors(){
  	this.colorService.getColors().subscribe(
  	(colors) => { 
  	this.colors = colors;
  	//console.log(colors);
  	return colors
  	}
  	);
  }

  getProductByCategory(categoryId, categoryName){
    this.productfilterService.getProductsByCategory(categoryId).subscribe(
    (response) => { 
    let response_data = {
        id : categoryId,
        categoryName : categoryName,
        products : response,
    }
    this.categoryFilter.emit(response_data)
    }
    );
  }

  getProductByColor(colorName){
    this.productfilterService.getProductsByColor(colorName).subscribe(
    (response) => { 
    this.colorFilter.emit(response)
    }
    );
  }

}
