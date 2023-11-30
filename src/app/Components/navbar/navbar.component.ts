import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() sidebarShow: boolean = true;

  counter = 1;
  prizeTag = 200;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  ShowHide(event:any){
    if(event){
      event.stopPropagation();
      this.sidebarShow = !this.sidebarShow;
    }
  }

  plus(){
    this.counter += 1;
    this.prizeTag += this.prizeTag;
  }

  minus(){
    this.counter -= 1;
    this.prizeTag = this.prizeTag - this.prizeTag;
  }

}
