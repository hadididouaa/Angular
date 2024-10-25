import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent {
id : number;
   constructor(private ac:ActivatedRoute){}
 ngOnInit(){
  console.log("onInit");
  //this.id=this.ac.snapshot.params['id'];
   this.ac.paramMap.subscribe(
    res=>this.id=Number(res.get('id')));
 }
}
