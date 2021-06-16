import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNumComponent } from './show-num.component';

describe('ShowNumComponent', () => {
  let component: ShowNumComponent;
  let fixture: ComponentFixture<ShowNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowNumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
