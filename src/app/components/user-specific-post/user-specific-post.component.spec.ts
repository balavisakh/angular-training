import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSpecificPostComponent } from './user-specific-post.component';

describe('UserSpecificPostComponent', () => {
  let component: UserSpecificPostComponent;
  let fixture: ComponentFixture<UserSpecificPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSpecificPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSpecificPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
