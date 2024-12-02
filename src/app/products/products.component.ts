import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  classe="4SE2";
  ph="taper votre username";
  ph1="taper votre pwd";
  
  userName="";
  pwd="";
  
  confirmLogin(){
    return confirm("vous etes bien logger!!!!")
  }
}
