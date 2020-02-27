import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'youtube-Happy';
  date = new Date()
  name: string = 'Hank Yang 2012';
  
  constructor() {
    console.log("Constructor called");
  }

  doSomething(val: string): void{
    val = 'Great';
  }

}
