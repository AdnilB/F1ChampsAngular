import { Component, OnInit } from '@angular/core';

/** The header bar component is displayed on top of the page
 * and contains the application title **/

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

