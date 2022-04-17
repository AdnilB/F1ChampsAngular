import { Component, HostListener, OnInit } from '@angular/core';
import { ChampionsYearlyDto, PointStandingDto, RacesDto, ResultsDto } from '../data-models/data-models';
import { ApiService } from '../services/apiService.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  //Year dropdown
  selectedYear: any;
  startYear :number = 2005;
  endYear: number = new Date().getFullYear();
  years: number [] = [];

  //Championship winners
  winnersList : RacesDto[] = [];
  winnersName!: string;
  curcuitName!: string;
  seasonWinner!: string;

  //Pagination Details
  totalItems :number = 0;
  currentNumber: number = 0;
  limit: number = 10;

  //Mobile or desktop display screen
  innerWidth: number = 0;
  mobileView!: boolean;
  
  constructor(private apiService: ApiService) {
    this.onResize();

   }

   @HostListener('window:resize', ['$event'])
    
   onResize() {
   this.innerWidth = window.innerWidth;
   this.checkScreenSize();
   }

  ngOnInit(): void {
    this.generateYearList(this.startYear, this.endYear);
  }

  public checkScreenSize(){
  this.mobileView = this.innerWidth < 600? true : false;
  }


  //Create a list of years starting from the current year to 2005
  public generateYearList(startYear: number, endYear: number){

    for(let i = endYear; i >= startYear ; i--){
      this.years.push(i);
    }

  }


  //Function is triggered when a year is selected from the year dropdown box
  public onYearSelectChange(){

    if(this.selectedYear){
      //Reset current displayed page number
      this.currentNumber = 0;

      this.getSeasonWinner();
      this.getWinnersPerYear();
      
    }
    else{
      this.winnersList = [];
      this.seasonWinner = "";
    }
    
  }

  //Get a list of F1 Champions names per year
  getWinnersPerYear($event?:any){
    
    this.currentNumber = $event >=0 ? $event: this.currentNumber;
    this.apiService.getWinnersPerYear(this.selectedYear, this.limit, this.currentNumber).subscribe(data =>{

      if(data){
        
          this.winnersList = data.MRData.RaceTable.Races;
          this.totalItems = +data.MRData.total;
      }

      else{
        console.log("No data found");
      }
      
    },error =>{
      console.log(error);
    })

  }

  //Get a list of the overal Season winner per year
  getSeasonWinner(){
      this.apiService.getSeasonWinner(this.selectedYear).subscribe(data =>{

        if(data){
          this.seasonWinner = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.driverId;
        }
     
      
    },error =>{
      console.log(error);
    })
  }

}
