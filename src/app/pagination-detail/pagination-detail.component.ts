import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pagination-detail',
  templateUrl: './pagination-detail.component.html',
  styleUrls: ['./pagination-detail.component.scss']
})
export class PaginationDetailComponent implements OnInit {

  //Total number of records
  @Input() total!: number;
  //Current page of records viewed
  @Input() currentNumber!: number;
  //Increment number per api call
  @Input() limit!: number;

  //Triggered when next button is clicked
  @Output() nextPage = new EventEmitter<number>();
  //Triggered when previous button is clicked
  @Output() previousPage = new EventEmitter<number>();

  //Total number of pages
  totalPages!: number;
  //Starting page number;
  pageStart: number = 1;


  constructor() { }

  ngOnInit(): void {
    //Calculate the total number of pages
    this.totalPages = this.total % this.limit? Math.floor(this.total/this.limit) + 1: this.total/this.limit;

  }
  
   //Triggered when previous button is clicked
  public previous(){
    this.pageStart -= 1;
    this.previousPage.emit(this.currentNumber-this.limit);

  }

  //Triggered when next button is clicked
  public next(){
    this.pageStart += 1;
    this.nextPage.emit(this.currentNumber+this.limit);
  }

}
