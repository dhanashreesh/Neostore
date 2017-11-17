export class Product{
	product_name: String;
    categoryId: String;
    product_producer: String;
    product_description: String;
    product_cost: Number;
    product_avg_rating: Number;
    product_view_count: Number;
    product_stock: Number;
    product_created_date: String;
    product_modified_date: String;
    product_createdby: String;
    product_modifiedby: String;
    product_color: object;
    product_dimension: String;
    product_purchaseCount: Number;
    product_isactive: true;
    product_material: String;
    id: String;
    productId: String;
    productid: String;
    images: any[];
}

export class ProductCategory{
	category_name: String;
    category_isactive: boolean;
    category_description: String;
    id: String;
}
