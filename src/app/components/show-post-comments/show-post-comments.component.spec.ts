import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPostCommentsComponent } from './show-post-comments.component';

describe('ShowPostCommentsComponent', () => {
  let component: ShowPostCommentsComponent;
  let fixture: ComponentFixture<ShowPostCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPostCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPostCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
