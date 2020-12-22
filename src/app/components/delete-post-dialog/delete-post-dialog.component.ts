import { Component, Inject, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router'
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { Optional } from '@angular/core';
@Component({
  selector: 'app-delete-post-dialog',
  templateUrl: './delete-post-dialog.component.html',
  styleUrls: ['./delete-post-dialog.component.css']
})
export class DeletePostDialogComponent implements OnInit {
  userId:number;
  deleteId: any;
  // @Inject(MAT_DIALOG_DATA) public data: any
  constructor(private userService: UserService, private router:Router, public dialogRef: MatDialogRef<DeletePostDialogComponent>,@Optional() @Inject(MAT_DIALOG_DATA) public data: any){
    // this.delete();
    console.log("idddd",this.data);
  }
  ngOnInit(): void {
  }

  delete(): void {
    this.userService.deletePostById(this.data.deletePostId).subscribe(()=>{
      alert("post deleted");
      this.router.navigate(['user-posts']);
    })
  }
}
