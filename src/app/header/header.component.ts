import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
isAdmin : boolean = true;
classAdmin = 'navbar navbar-expand-lg navbar-dark bg-dark';
classUser = 'navbar navbar-expand-lg navbar-light bg-light';
}
