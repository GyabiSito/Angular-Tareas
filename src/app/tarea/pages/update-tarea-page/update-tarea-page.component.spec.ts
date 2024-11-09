import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTareaPageComponent } from './update-tarea-page.component';

describe('UpdateTareaPageComponent', () => {
  let component: UpdateTareaPageComponent;
  let fixture: ComponentFixture<UpdateTareaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTareaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTareaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
