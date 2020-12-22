import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Users } from '../../interfaces/users';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DeleteUserDialogComponent} from '../delete-user-dialog/delete-user-dialog.component';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  users:Users[];
  displayedColumns: string[] = ['id', 'username','email', 'website', 'phone', 'actions'];
  dataSource = new MatTableDataSource<Users>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private userService: UserService, private router:Router, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getUser();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getUser(): void {
    this.userService.getAllUsers().subscribe((posts)=>{
      this.users = posts;
      this.dataSource.data = this.users;
      // console.log(this.dataSource,"userUsers");
    })
  }

  viewUser(id:number): void {
    this.router.navigate(["view-user-detail",id]);
    console.log(id,"id");
  }

  editUser(id:number): void {
    this.router.navigate(["update-user",id]);
  }

  deleteUser(id:number): void {
    // console.log(id,"idfrombtn");
    this.dialog.open(DeleteUserDialogComponent,{data:{deleteUserId:id}});
  }

  viewUsers(): void {
    this.router.navigate(['view-users']);
  }

  showComments(id:number): void {
    this.router.navigate([`show-comments/${id}/posts`]);
  }
  
}
