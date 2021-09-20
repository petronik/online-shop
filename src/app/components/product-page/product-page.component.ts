import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';
import {Size} from 'src/app/models/size'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product: Product | undefined;
  imageUrl: string = '';
  price: number = 0;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getProduct(id).subscribe(p => {
      this.product = p;
      this.imageUrl = p?.imageUrl || '';
      this.price = p?.price || 0;
    });
  }
  onSizeChange(size: any){
    if(this.product?.price !== undefined)
      switch (size) {
        case Size.MEDIUM: {
          this.price = this.product.price * 1.2;
          break;
        }
        case Size.LARGE: {
          this.price = this.product.price * 1.4;
          break;
        }
        default:
          this.price = this.product?.price;
      }
  }


}
