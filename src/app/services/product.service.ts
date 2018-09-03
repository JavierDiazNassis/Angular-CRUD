import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
 productList: AngularFireList<any>;
 SelectProduct: Product= new Product();

  constructor( private firebase: AngularFireDatabase) { }
 
  getProduct()
 {
   return this.productList= this.firebase.list('products');
 }
  insertProduct(product: Product){
 this.productList.push({
   name:product.name,
   categoroty: product.category,
   price: product.price
 });
  }

  updateProduc(product:Product)
  {
    this.productList.update(product.$key, {  
      name:product.name,
      categoroty: product.category,
      price: product.price
    });
  }
   
  deleteProct( $key: string)
   {
     this.productList.remove($key);
   }
}
