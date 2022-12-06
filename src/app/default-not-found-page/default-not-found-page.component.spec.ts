import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultNotFoundPageComponent } from './default-not-found-page.component';

describe('DefaultNotFoundPageComponent', () => {
  let component: DefaultNotFoundPageComponent;
  let fixture: ComponentFixture<DefaultNotFoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultNotFoundPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultNotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
