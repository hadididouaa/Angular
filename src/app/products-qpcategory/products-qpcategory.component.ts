import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products-qpcategory',
  templateUrl: './products-qpcategory.component.html',
  styleUrls: ['./products-qpcategory.component.css']
})
export class ProductsQPCategoryComponent {
  id : number;
  constructor(private ac:ActivatedRoute){
    console.log("je suis le constructor");
  }

  ngOnInit(){
    this.id=this.ac.snapshot.queryParams['id'];
    this.ac.queryParamMap.subscribe(res=>this.id=Number(res.get('id')));
    this.ac.queryParams.subscribe(res=>this.id=res['id']);
    console.log("je suis le ngOnInit");
  }

}
