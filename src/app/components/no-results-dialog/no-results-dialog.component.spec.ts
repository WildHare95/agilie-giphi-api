import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoResultsDialogComponent } from './no-results-dialog.component';

describe('NoResultsDialogComponent', () => {
  let component: NoResultsDialogComponent;
  let fixture: ComponentFixture<NoResultsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoResultsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoResultsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
