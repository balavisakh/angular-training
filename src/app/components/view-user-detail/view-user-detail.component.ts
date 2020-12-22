import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/interfaces/users';
import { UserService } from 'src/app/services/user.service';
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component';

@Component({
  selector: 'app-view-user-detail',
  templateUrl: './view-user-detail.component.html',
  styleUrls: ['./view-user-detail.component.css']
})
export class ViewUserDetailComponent implements OnInit {
  userId:any;
  userDetails:Users;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router:Router, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getUserId();
    this.getUserById(this.userId);
  }

  getUserId(): void {
    this.activatedRoute.params.subscribe((userId)=>{
      this.userId = userId.id;
      console.log("id",this.userId);
    })
  }

  getUserById(id: number): void {
    this.userService.getUserById(id).subscribe((posts:Users)=>{
      this.userDetails = posts;
      console.log(this.userDetails,"post");
    })
  }

  editUser(id:number): void {
    this.router.navigate(["update-user",id]);
  }

  deleteUser(id:number): void {
    // console.log(id,"idfrombtn");
    this.dialog.open(DeleteUserDialogComponent,{data:{deleteUserId:id}});
  }
}
