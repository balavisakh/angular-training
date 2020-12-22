import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserCommentsComponent } from './update-user-comments.component';

describe('UpdateUserCommentsComponent', () => {
  let component: UpdateUserCommentsComponent;
  let fixture: ComponentFixture<UpdateUserCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
