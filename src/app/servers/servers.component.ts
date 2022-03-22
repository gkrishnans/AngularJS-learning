import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverID : number = 100

  serverCreationStatus = "No server created!!"

  getServerID(){
    return this.serverID
  }
  
  allowNewServer = false;

  onServerCreation(){
    this.serverCreationStatus = "A New server created :)"
  }
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true
    },2000)
  }

  ngOnInit(): void {
  }

}
