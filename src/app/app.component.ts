import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'konsultera';
  sideBarOpen=true;
  constructor() { }

  ngOnInit(): void {
  }
  sideBarToggle(){
    this.sideBarOpen =!this.sideBarOpen; 
  }

}













