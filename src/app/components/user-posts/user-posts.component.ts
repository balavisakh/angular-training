import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Posts } from '../../interfaces/posts';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DeletePostDialogComponent} from '../delete-post-dialog/delete-post-dialog.component';
@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit, AfterViewInit {
  userPosts:any[];
  displayedColumns: string[] = ['id', 'title','name','actions'];
  dataSource = new MatTableDataSource<Posts>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  usersEntity = {};
  constructor(private userService: UserService, private router:Router, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getPost();
    this.getUsers();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getPost(): void {
    this.userService.getAllPosts().subscribe((posts)=>{
      this.userPosts = posts;
      this.dataSource.data = this.userPosts;
      // console.log(this.dataSource.data,"userPosts");
    })
  }

  // testing for getting users inside posts
  getUsers(): void {
    this.userService.getAllUsers().subscribe((users)=>{
      users.forEach((user)=>{
          this.usersEntity[user.id]=user;
      });
    })
  }

  viewPost(id:number): void {
    this.router.navigate(["view-post",id]);
    console.log(id,"id");
  }

  editPost(id:number): void {
    this.router.navigate(["update-post",id]);
  }

  deletePost(id:number): void {
    this.dialog.open(DeletePostDialogComponent,{data:{deletePostId:id}});
  }

  viewUsers(): void {
    this.router.navigate(['view-users']);
  }

  viewPostComments(id:number): void {
    this.router.navigate([`show-post-comments/${id}/comments`]);
  }

  postsByUser(id) {
    this.router.navigate([`show-comments/${id}/posts`]);
  }
}

