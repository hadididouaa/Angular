import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit {

  id : number;
  listProducts : Product[];
  constructor(private ac:ActivatedRoute, private router:Router){
    console.log("je suis le constructor");
  }
  list : Product[]=[];
  ngOnInit(){
    this.listProducts=[
      {"id":1, "name":"Refrigérateur LG Inox","image":"assets/images/refrigerateur-lg.jpg","categoryId":1, "description":"","price":2800,"brand":"LG","promotion":0},
      {"id":2, "name":"Refrigérateur Samsung Blanc","image":"assets/images/refrigerateur_samsung.jpeg","categoryId":1, "description":"", "price":2400,"brand":"Samsung","promotion":0},
      {"id":3, "name":"Lave vaisselle Beko", "image":"assets/images/lave_vaisselle.png", "categoryId":1, "description":"","price":1875,"brand":"BEKO", "promotion":0},
      {"id":4, "name":"Oppo Smart Phone","image":"assets/images/oppo_smart.jpg","categoryId":4, "description":"", "price":1200,"brand":"OPPO","promotion":0},
      {"id":5, "name":"Hachoir", "image":"assets/images/hachoir.jpg","categoryId":2, "description":"","price":120,"brand":"Moulinex", "promotion":0},
      {"id":6, "name":"TV 50'' LG","image":"assets/images/tv_lg.jpg","categoryId":5, "description":"", "price":1800,"brand":"LG","promotion":0},
    ];
   // this.id=this.ac.snapshot.params['id'];
   // this.ac.paramMap.subscribe(res=>this.id=Number(res.get('id')));
    this.ac.params.subscribe(
      res=>{
        this.id=res['id'];
        for(let p of this.listProducts){
          if (p.categoryId == this.id){
           this.list.push(p);
          }
       }
      }


      );

    console.log("je suis le ngOnInit");
  }

  ngOnDestroy(){
    console.log("je suis le ngOnDestroy");
  }

  goTo(){
   this.router.navigateByUrl("home");
  }


}
