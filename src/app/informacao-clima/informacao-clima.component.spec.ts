import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacaoClimaComponent } from './informacao-clima.component';

describe('InformacaoClimaComponent', () => {
  let component: InformacaoClimaComponent;
  let fixture: ComponentFixture<InformacaoClimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformacaoClimaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformacaoClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
