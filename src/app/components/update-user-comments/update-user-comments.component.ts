import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user-comments',
  templateUrl: './update-user-comments.component.html',
  styleUrls: ['./update-user-comments.component.css']
})
export class UpdateUserCommentsComponent implements OnInit {
  userId:any;
  userPost:any;
  comments;
  constructor(private activatedRouter: ActivatedRoute,private userService: UserService, private fb: FormBuilder, private router:Router) { }

  updateFormGroup = this.fb.group({
    name: [''],
    email: [''],
    comment: ['']
  })
  ngOnInit(): void {
    this.getPostId();
    this.getPostById(this.userId);
    this.getCommentsById(this.userId);
  }

  getPostId(): void {
    this.activatedRouter.params.subscribe((userId)=>{
      this.userId = userId.id;
      console.log("id",this.userId);
    })
  }

  getPostById(id): void {
    this.userService.getPostById(id).subscribe((posts)=>{
      this.userPost = posts;
      console.log(this.userPost,"post");
      // this.updateFormGroup.patchValue({
      //   name: this.userPost.name,
      //   email: this.userPost.email,
      //   comment: this.userPost.body
      // })
    })
  }
  updatePost(): void {
    const body = this.updateFormGroup.value;
    this.userService.updateUserById(this.userId,body).subscribe(()=>{
      console.log("id",this.userId);
      console.log("body", body);
      this.router.navigate(['user-posts']);
    })
  }


  // test
  getCommentsById(id): void {
    this.userService.getUserDetailsWithComments(id).subscribe((posts)=>{
      this.comments = posts;
      console.log("comments", this.comments);
      this.updateFormGroup.patchValue({
        name: this.comments.name,
        email: this.comments.email,
        comment: this.comments.body
      })
    })
  }
}
