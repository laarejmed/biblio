import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChafafLibraryComponent } from './chafaf-library.component';

describe('ChafafLibraryComponent', () => {
  let component: ChafafLibraryComponent;
  let fixture: ComponentFixture<ChafafLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChafafLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChafafLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
