import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumsAndWordsComponent } from './nums-and-words.component';

describe('NumsAndWordsComponent', () => {
  let component: NumsAndWordsComponent;
  let fixture: ComponentFixture<NumsAndWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumsAndWordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumsAndWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
