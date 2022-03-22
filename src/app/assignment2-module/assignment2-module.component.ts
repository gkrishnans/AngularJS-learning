import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2-module',
  templateUrl: './assignment2-module.component.html',
  styleUrls: ['./assignment2-module.component.css']
})
export class Assignment2ModuleComponent implements OnInit {
  
  name = ""
//  message = "your name is " + this.name 
  onclick(){
    this.name = ""
    this.buttonStatus = false
  }

  buttonStatus = true

  onReadingInput(event:any){
    if(this.name === "")
    {
      this.buttonStatus = false
    }
    console.log(this.name.length)
    this.name = event.target.value
    console.log(event.target.value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
