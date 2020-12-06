import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationTiroirComponent } from './navigation-tiroir.component';

describe('NavigationTiroirComponent', () => {
  let component: NavigationTiroirComponent;
  let fixture: ComponentFixture<NavigationTiroirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationTiroirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationTiroirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
