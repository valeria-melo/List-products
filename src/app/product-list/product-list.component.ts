import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  showImage: boolean = false;
  onNotify(message:string):void{}
 

  private _listFilter:string = '';
  get listFilter(): string {
    return this._listFilter;
    
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value)
    this.filteredProducts = this.performFilter(value);
    
  }

  filteredProducts:IProduct[] =[];
  products: IProduct[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity rolling garden carton",
      "price": 32.99,
      "startRating": 4.2,
      "imageUrl":"assets/images/garden_cart.jpg"

    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBT-0048",
      "releaseDate": "May 21, 2021",
      "description": "Cuverd claw stell hammer",
      "price": 8.9,
      "startRating": 4.8,
      "imageUrl":"assets/images/hammer.jpg"

    }
  ];

  performFilter(filterBy:string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }


  ngOnInit():void {
    this.listFilter = ''
    this.performFilter
    
  }

  onRatingClicked(message:string): void {
    this.pageTitle = 'Product List: ' + message;
  }

}
