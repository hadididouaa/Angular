import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit {

  id : number;
  constructor(private ac:ActivatedRoute){
    console.log("je suis le constructor");
  }

  ngOnInit(){
   // this.id=this.ac.snapshot.params['id'];
   // this.ac.paramMap.subscribe(res=>this.id=Number(res.get('id')));
    this.ac.params.subscribe(res=>this.id=res['id']);
    console.log("je suis le ngOnInit");
  }



}
