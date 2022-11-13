import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeNewListComponent } from './make-new-list.component';

describe('MakeNewListComponent', () => {
  let component: MakeNewListComponent;
  let fixture: ComponentFixture<MakeNewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeNewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeNewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
