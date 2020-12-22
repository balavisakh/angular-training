import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCommentsDeleteDialogComponent } from './user-comments-delete-dialog.component';

describe('UserCommentsDeleteDialogComponent', () => {
  let component: UserCommentsDeleteDialogComponent;
  let fixture: ComponentFixture<UserCommentsDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCommentsDeleteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCommentsDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
