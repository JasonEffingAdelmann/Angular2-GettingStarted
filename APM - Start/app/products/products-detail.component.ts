import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';


@Component({
    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct[];

    ngOnInit(): void {
            return;
    }

}