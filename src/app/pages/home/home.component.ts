import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contentCount: number;
  goalContent: string;
  btnText: string = "Add a content";
  goals = []
  constructor() {
    
   }

  ngOnInit() {
    this.contentCount = this.goals.length;
  }
  addContent(){
    this.goals.push(this.goalContent);
    this.goalContent = '';
    this.contentCount = this.goals.length;
  }
}
