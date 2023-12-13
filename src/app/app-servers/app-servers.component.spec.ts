import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppServersComponent } from './app-servers.component';

describe('AppServersComponent', () => {
  let component: AppServersComponent;
  let fixture: ComponentFixture<AppServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppServersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
