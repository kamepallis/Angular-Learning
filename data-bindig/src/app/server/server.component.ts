import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  serverId:number = 10;
  serverName:string = "Dev Server";
  dateAndTime:String = Date();
  input:string = "";
  twoWay:string = "Hello!";

  buttonFlag:boolean = false;

  getServerStatus() {
    return "Active";
  }

  onButtonClick() {
    console.log("button clicked");
    this.dateAndTime = Date();
  }

  onUpdate(event: Event) {
    this.input = (<HTMLInputElement>event.target).value;
  }
}
