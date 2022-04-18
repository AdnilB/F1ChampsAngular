import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChampionsYearlyDto, SeasonStandingsMainDto } from '../data-models/data-models';

/**Api Service is a service that accesses and retrieves
 * data from the http://ergast.com api's **/

const baseUrl = environment.API_HOST + environment.API_PATH ;

@Injectable()
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': '*/*',
    })
  };
 
  constructor(private http: HttpClient) { }
 
 //Returns a list of F1 championship circuits and the winner for each per year
  public getWinnersPerYear(year: number, limit?: number, page?: number):Observable<ChampionsYearlyDto> {

    const url = baseUrl +"/"+ year +"/results/1.json" + "?limit=" + limit + "&offset=" + page;
    return <Observable<ChampionsYearlyDto>>this.http.get(url, this.httpOptions );
  }

  //Returns a list of F1 overall season winners per year
  public getSeasonWinner(year: number):Observable<SeasonStandingsMainDto> {

    const url = "/driverStandings.json?limit=1&offset=0";
    return <Observable<SeasonStandingsMainDto>>this.http.get(baseUrl +"/"+ year + url, this.httpOptions );
  }

  
  
}