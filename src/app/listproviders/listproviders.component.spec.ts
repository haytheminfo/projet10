import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprovidersComponent } from './listproviders.component';

describe('ListprovidersComponent', () => {
  let component: ListprovidersComponent;
  let fixture: ComponentFixture<ListprovidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListprovidersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListprovidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
