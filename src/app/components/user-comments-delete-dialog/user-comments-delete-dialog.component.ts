import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-comments-delete-dialog',
  templateUrl: './user-comments-delete-dialog.component.html',
  styleUrls: ['./user-comments-delete-dialog.component.css']
})
export class UserCommentsDeleteDialogComponent implements OnInit {
  userId:number;
  deleteId: any;
  constructor(private userService: UserService, private router:Router, public dialogRef: MatDialogRef<UserCommentsDeleteDialogComponent>,@Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.userService.deleteCommentsById(this.data.deleteUserPostId).subscribe(()=>{
      alert("post deleted");
      this.router.navigate(['user-posts']);
    })

}
}
