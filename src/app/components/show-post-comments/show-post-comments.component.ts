import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserCommentsDeleteDialogComponent } from '../user-comments-delete-dialog/user-comments-delete-dialog.component';

@Component({
  selector: 'app-show-post-comments',
  templateUrl: './show-post-comments.component.html',
  styleUrls: ['./show-post-comments.component.css']
})
export class ShowPostCommentsComponent implements OnInit {
  commentsId;
  comments;
  constructor(private activatedRoute:ActivatedRoute, private userService: UserService, private router:Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUserId();
    this.getCommentsById(this.commentsId.id);
  }

  getUserId(): void {
    this.activatedRoute.params.subscribe((postsId)=>{
      this.commentsId = postsId;
      console.log("cId",this.commentsId);
    })
  }

  getCommentsById(id:number): void {
    this.userService.getCommentsOfPosts(id).subscribe((posts)=>{
      this.comments = posts;
      console.log("comments",this.comments);
    })
  }

  editUser(id:number): void {
    this.router.navigate(["update-user-comments",id]);
  }

  deleteUser(id:number): void {
    // console.log(id,"idfrombtn");
    this.dialog.open(UserCommentsDeleteDialogComponent,{data:{deleteUserPostId:id}});
  }
}
