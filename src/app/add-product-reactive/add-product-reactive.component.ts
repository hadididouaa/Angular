import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product-reactive',
  templateUrl: './add-product-reactive.component.html',
  styleUrls: ['./add-product-reactive.component.css']
})
export class AddProductReactiveComponent implements OnInit {
myForm: FormGroup;
name ;
ngOnInit(){  //méthode hook : utile pour l'initialisation
 this.myForm=new FormGroup({
  name : new FormControl(),
  price: new FormControl(),
  description : new FormControl()
 })

}

}
