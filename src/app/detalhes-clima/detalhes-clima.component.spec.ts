import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesClimaComponent } from './detalhes-clima.component';

describe('DetalhesClimaComponent', () => {
  let component: DetalhesClimaComponent;
  let fixture: ComponentFixture<DetalhesClimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalhesClimaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalhesClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
