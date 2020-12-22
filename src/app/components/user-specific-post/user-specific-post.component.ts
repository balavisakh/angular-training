import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DeletePostDialogComponent} from '../delete-post-dialog/delete-post-dialog.component';
import { Posts } from 'src/app/interfaces/posts';
@Component({
  selector: 'app-user-specific-post',
  templateUrl: './user-specific-post.component.html',
  styleUrls: ['./user-specific-post.component.css']
})
export class UserSpecificPostComponent implements OnInit {
  userId:any;
  userPost:Posts;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router:Router, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getUserId();
    this.getPostById(this.userId);
  }

  getUserId(): void {
    this.activatedRoute.params.subscribe((userId)=>{
      this.userId = userId.id;
      console.log("id",this.userId);
    })
  }

  getPostById(id: number): void {
    this.userService.getPostById(id).subscribe((posts:Posts)=>{
      this.userPost = posts;
      console.log(this.userPost,"post");
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
