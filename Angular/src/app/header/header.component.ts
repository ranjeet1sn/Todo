import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter } from 'protractor';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  checked = false
  constructor() { }
  ngOnInit() {
  }
  

}
