import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowCommentsComponent } from './components/show-comments/show-comments.component';
import { ShowPostCommentsComponent } from './components/show-post-comments/show-post-comments.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';
import { UpdateUserCommentsComponent } from './components/update-user-comments/update-user-comments.component';
import { UpdateUsersComponent } from './components/update-users/update-users.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { UserSpecificPostComponent } from './components/user-specific-post/user-specific-post.component';
import { ViewUserDetailComponent } from './components/view-user-detail/view-user-detail.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

const routes: Routes = [
  {path:'user-posts', component: UserPostsComponent},
  {path: '', redirectTo:'user-posts', pathMatch:'full'},
  {path: 'view-post/:id', component: UserSpecificPostComponent},
  {path: 'update-post/:id', component: UpdatePostComponent},
  {path: 'view-users', component: ViewUserComponent},
  {path: 'show-comments/:id/posts', component: ShowCommentsComponent},
  {path: 'update-user/:id', component: UpdateUsersComponent},
  {path:'view-user-detail/:id', component: ViewUserDetailComponent},
  {path:'show-post-comments/:id/comments', component: ShowPostCommentsComponent},
  {path: 'update-user-comments/:id', component: UpdateUserCommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
