import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls  : ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {
  title = 'F1 World Champions';

  constructor() {
  }

  ngOnInit() {
  }

}

