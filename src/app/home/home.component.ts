import { Component, OnInit } from '@angular/core';
import { DeviceUUID } from "device-uuid";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public uuid :string =''
  constructor() { }

  ngOnInit(): void {
    this.uuid = new DeviceUUID().get();
    
  }

}
