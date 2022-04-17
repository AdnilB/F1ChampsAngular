import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationDetailComponent } from './pagination-detail.component';

describe('PaginationDetailComponent', () => {
  let component: PaginationDetailComponent;
  let fixture: ComponentFixture<PaginationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the startPage value to 1', () => {
   expect(component.pageStart).toEqual(1);
  });

  it('should calculate total pages on NgOnInit', () => {
    component.limit = 10;
    component.total = 22;

    component.ngOnInit();
    expect(component.totalPages).toEqual(3);
   });

  it('should decrement pageStart by 1 on previous', () => {
    spyOn(component.previousPage, 'emit');
    component.currentNumber = 10;
    component.limit = 10;
    component.previous();

    expect(component.previousPage.emit).toHaveBeenCalledWith(0);
    expect(component.pageStart).toEqual(0);
   });

   it('should increment pageStart by 1 on previous', () => {
    spyOn(component.nextPage, 'emit');
    component.currentNumber = 1;
    component.limit = 10;
    component.next();

    expect(component.nextPage.emit).toHaveBeenCalledWith(11);
    expect(component.pageStart).toEqual(2);
   });

});
