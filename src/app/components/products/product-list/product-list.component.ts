import { Component, OnInit } from '@angular/core';
 import {ProductService} from '../../../services/product.service';
import { Product } from '../../../models/product';
import { element } from 'protractor';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
  produtcList: Product[];

 constructor( 
   private producSevice :ProductService
  ) {}

  ngOnInit() {
    this.producSevice.getProduct()
    .snapshotChanges()
    .subscribe(item => {
      this.produtcList = [];
      item.forEach(element => {
         let x = element.payload.toJSON();
         x["$key"] = element.key;
         this.produtcList.push(x as Product);
        });
    }); 
  }
  onEdit(product: Product){
    this.producSevice.SelectProduct = Object.assign({},product);
  }
  unDelete($key:string){
   this.producSevice.deleteProct($key);
  }

}
