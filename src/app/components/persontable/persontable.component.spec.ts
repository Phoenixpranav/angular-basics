import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersontableComponent } from './persontable.component';

describe('PersontableComponent', () => {
  let component: PersontableComponent;
  let fixture: ComponentFixture<PersontableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersontableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersontableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
