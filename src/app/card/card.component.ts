import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  @Input() data:Category
  @Output() notified = new EventEmitter()
  sendNotif(){
    this.notified.emit()
  }
  getDescription(desc:string){
    alert(desc);
  }

}
