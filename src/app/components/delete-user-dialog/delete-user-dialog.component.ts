import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { DeletePostDialogComponent } from '../delete-post-dialog/delete-post-dialog.component';

@Component({
  selector: 'app-delete-user-dialog',
  templateUrl: './delete-user-dialog.component.html',
  styleUrls: ['./delete-user-dialog.component.css']
})
export class DeleteUserDialogComponent implements OnInit {
  userId:number;
  deleteId: any;
  constructor(private userService: UserService, private router:Router, public dialogRef: MatDialogRef<DeletePostDialogComponent>,@Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.userService.deleteUserById(this.data.deleteUserId).subscribe(()=>{
      console.log(this.data);
      alert("post deleted");
      this.router.navigate(['view-users']);
    })
  }

}
