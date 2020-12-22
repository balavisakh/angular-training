import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { UserSpecificPostComponent } from './components/user-specific-post/user-specific-post.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import { ViewUserComponent } from './components/view-user/view-user.component';
import {MatCardModule} from '@angular/material/card';
import { UpdatePostComponent } from './components/update-post/update-post.component'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog'; 
import {DeletePostDialogComponent} from './components/delete-post-dialog/delete-post-dialog.component';
import { ShowCommentsComponent } from './components/show-comments/show-comments.component';
import { UpdateUsersComponent } from './components/update-users/update-users.component';
import { DeleteUserDialogComponent } from './components/delete-user-dialog/delete-user-dialog.component';
import { ViewUserDetailComponent } from './components/view-user-detail/view-user-detail.component';
import { ShowPostCommentsComponent } from './components/show-post-comments/show-post-comments.component';
import { UpdateUserCommentsComponent } from './components/update-user-comments/update-user-comments.component';
import { UserCommentsDeleteDialogComponent } from './components/user-comments-delete-dialog/user-comments-delete-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    UserPostsComponent,
    UserSpecificPostComponent,
    ViewUserComponent,
    UpdatePostComponent,
    DeletePostDialogComponent,
    ShowCommentsComponent,
    UpdateUsersComponent,
    DeleteUserDialogComponent,
    ViewUserDetailComponent,
    ShowPostCommentsComponent,
    UpdateUserCommentsComponent,
    UserCommentsDeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
