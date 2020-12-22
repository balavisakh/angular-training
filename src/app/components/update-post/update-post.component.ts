import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../../services/user.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  userId:any;
  userPost:any;
  constructor(private activatedRouter: ActivatedRoute,private userService: UserService, private fb: FormBuilder, private router:Router) { }

  updateFormGroup = this.fb.group({
    updateFormTitle: [''],
    updateFormComment: ['']
  })

  ngOnInit(): void {
    this.getPostId();
    this.getPostById(this.userId);
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
      this.updateFormGroup.patchValue({
        updateFormTitle: this.userPost.title,
        updateFormComment: this.userPost.body
      })
    })
  }
  updatePost(): void {
    const body = this.updateFormGroup.value;
    this.userService.updatePostById(this.userId,body).subscribe(()=>{
      console.log("id",this.userId);
      console.log("body", body);
      this.router.navigate(['user-posts']);
    })
  }
}
