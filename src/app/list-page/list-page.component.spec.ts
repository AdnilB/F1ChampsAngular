import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ApiService } from '../services/apiService.service';

import { ListPageComponent } from './list-page.component';

describe('ListPageComponent', () => {
  let component: ListPageComponent;
  let fixture: ComponentFixture<ListPageComponent>;
  const mockedApiService = jasmine.createSpyObj('ApiService', ['getWinnersPerYear', 'getSeasonWinner']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPageComponent ],
      providers   : [ {
                        provide: ApiService,
                        useValue: mockedApiService
                      },
                      HttpHandler,
                      HttpClient],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset current record page number when new year is selected', () => {
    mockedApiService.getWinnersPerYear.and.returnValue(of(null));
    mockedApiService.getSeasonWinner.and.returnValue(of(null));

    component.selectedYear = "2010";
    component.onYearSelectChange();

    expect(component.currentNumber).toEqual(0);
    expect(mockedApiService.getWinnersPerYear).toHaveBeenCalledTimes(1)
    expect(mockedApiService.getSeasonWinner).toHaveBeenCalledTimes(1)
    expect(component).toBeTruthy();
  });

  it('should generate list of year from 2005 to current year', () => {
    spyOn(component, 'generateYearList');

    component.ngOnInit();
    expect(component.startYear).toEqual(2005);
    expect(component.generateYearList).toHaveBeenCalledTimes(1);
  });

  it('should set records drawn per api to 10', () => {
    expect(component.limit).toEqual(10);
  });

});
