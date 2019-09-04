import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  title="Ürün Listesi";
  products :any[] = [
    {
      id: 1,
      name: "Laptop",
      price: 1223342,
      categoryId: 1,
      description:"Asus Zen Book"
    },
    {
      id: 2,
      name: "Mouse",
      price: 12233,
      categoryId: 2,
      description:"Logitech"
    }
  ];

  ngOnInit() {
  }

}
