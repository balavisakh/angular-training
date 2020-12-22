import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { DeletePostDialogComponent } from '../delete-post-dialog/delete-post-dialog.component';
@Component({
  selector: 'app-show-comments',
  templateUrl: './show-comments.component.html',
  styleUrls: ['./show-comments.component.css']
})
export class ShowCommentsComponent implements OnInit {
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
    this.userService.getPostsOfUser(id).subscribe((posts)=>{
      this.comments = posts;
      console.log("comments",this.comments);
    })
  }

  editUser(id:number): void {
    this.router.navigate(["update-post",id]);
  }

  deleteUser(id:number): void {
    // console.log(id,"idfrombtn");
    this.dialog.open(DeletePostDialogComponent,{data:{deletePostId:id}});
  }
}
